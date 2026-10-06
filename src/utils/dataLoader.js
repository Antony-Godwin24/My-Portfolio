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

// Skills sourced directly from the updated resume (single source of truth)
const resumeSkills = {
  languages: ["Java", "JavaScript"],
  frontend: ["HTML5", "CSS3", "React.js"],
  backend: ["Node.js", "Express.js", "Spring Boot", "REST APIs"],
  databases: ["MySQL"],
  tools: ["Git", "GitHub"],
  subjects: ["Data Structures & Algorithms", "OOP", "DBMS"],
};

export const loadAllData = async () => {
  const [aboutText] = await Promise.all([
    fetchText(profileAssets.aboutTextUrl),
  ]);

  const [projects, internships, hackathons, certificates] = await Promise.all([
    // Projects
    Promise.all(
      projectSources.map(async (source) =>
        withMedia(
          {
            github: source.github || "",
            live: source.live || "",
            patentApplied: source.patentApplied || false,
            isConcept: source.isConcept || false,
            ...parseProject(await fetchText(source.textUrl)),
            ...(source.titleOverride ? { title: source.titleOverride } : {}),
            ...(source.summaryOverride ? { summary: source.summaryOverride, solution: source.summaryOverride } : {}),
          },
          {
            slug: source.slug,
            images: source.images,
            featured: Boolean(source.featured),
          }
        )
      )
    ),

    // Internships
    Promise.all(
      internshipSources.map(async (source) =>
        withMedia(parseInternship(await fetchText(source.textUrl)), {
          slug: source.slug,
          images: source.images,
          documents: source.documents,
        })
      )
    ),

    // Hackathons
    Promise.all(
      hackathonSources.map(async (source) =>
        withMedia(
          mergeWithFallback(
            source.textUrl
              ? parseHackathon(await fetchText(source.textUrl))
              : {},
            source.fallback
          ),
          {
            slug: source.slug,
            media: source.media,
          }
        )
      )
    ),

    // Certificates — some may be hardcoded (no txt file)
    Promise.all(
      certificateSources.map(async (source) => {
        if (source.hardcoded) {
          return withMedia(
            {
              ...source.hardcoded,
              keyLearnings: [],
              relevance: "",
            },
            {
              slug: source.slug,
              media: source.media,
            }
          );
        }
        return withMedia(parseCertificate(await fetchText(source.textUrl)), {
          slug: source.slug,
          media: source.media,
        });
      })
    ),
  ]);

  return {
    about: rewriteAbout(aboutText),
    // Skills come directly from resume — not from txt file
    skills: resumeSkills,
    projects,
    internships,
    hackathons,
    certificates,
    profile: {
      name: "ANTONY GODWIN S",
      tagline: "Final-year CSE Student | Full Stack Developer",
      objective:
        "Final-year Computer Science and Engineering student with hands-on software development experience through internships, projects, and hackathons. Experienced in Java, JavaScript, React.js, Node.js, Express.js, Spring Boot, REST APIs, and MySQL.",
      image: profileAssets.profileImage,
      resumeUrl: profileAssets.resumePdf,
      email: "antonygodwin08@gmail.com",
      phone: "+91 99949 82519",
      location: "Tiruchirappalli, Tamil Nadu, India",
      links: externalLinks,
    },
  };
};
