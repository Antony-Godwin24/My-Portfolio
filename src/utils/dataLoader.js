import {
  certificateSources,
  externalLinks,
  hackathonSources,
  internshipSources,
  profileAssets,
  projectSources,
} from "./contentSources";
import {
  parseCertificate,
  parseHackathon,
  parseInternship,
  parseProject,
  parseSkills,
  rewriteAbout,
} from "./dataParser";

const fetchText = async (url) => {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Failed to load content from ${url}`);
  }

  return response.text();
};

const withMedia = (item, additions) => ({ ...item, ...additions });
const mergeWithFallback = (parsed, fallback = {}) => {
  const merged = { ...fallback };
  Object.entries(parsed).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      merged[key] = value.length ? value : merged[key] || [];
    } else if (value !== undefined && value !== null && String(value).trim() !== "") {
      merged[key] = value;
    } else if (!(key in merged)) {
      merged[key] = value;
    }
  });
  return merged;
};

export const loadAllData = async () => {
  const [aboutText, skillsText] = await Promise.all([
    fetchText(profileAssets.aboutTextUrl),
    fetchText(profileAssets.skillsTextUrl),
  ]);

  const [projects, internships, hackathons, certificates] = await Promise.all([
    Promise.all(
      projectSources.map(async (source) =>
        withMedia(
          {
            github: source.github || "",
            live: source.live || "",
            ...parseProject(await fetchText(source.textUrl)),
          },
          {
            slug: source.slug,
            images: source.images,
            featured: Boolean(source.featured),
          }
        )
      )
    ),
    Promise.all(
      internshipSources.map(async (source) =>
        withMedia(parseInternship(await fetchText(source.textUrl)), {
          slug: source.slug,
          images: source.images,
          documents: source.documents,
        })
      )
    ),
    Promise.all(
      hackathonSources.map(async (source) =>
        withMedia(
          mergeWithFallback(parseHackathon(await fetchText(source.textUrl)), source.fallback),
          {
            slug: source.slug,
            media: source.media,
          }
        )
      )
    ),
    Promise.all(
      certificateSources.map(async (source) =>
        withMedia(parseCertificate(await fetchText(source.textUrl)), {
          slug: source.slug,
          media: source.media,
        })
      )
    ),
  ]);

  return {
    about: rewriteAbout(aboutText),
    skills: parseSkills(skillsText),
    projects,
    featuredProject: projects.find((project) => project.featured) || projects[0],
    internships,
    hackathons,
    certificates,
    profile: {
      name: "ANTONY GODWIN S",
      role: "Full Stack Developer | Zoho Experience",
      identity: "AWS Certified | Specialized in React, Node, and Spring Boot | Innovator of Claridux",
      image: profileAssets.profileImage,
      resumeUrl: profileAssets.resumePdf,
      email: "antonygodwin08@gmail.com",
      links: externalLinks,
    },
  };
};
