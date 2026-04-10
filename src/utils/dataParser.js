const cleanText = (value = "") =>
  value
    .replace(/\r/g, "")
    .replace(/[â€“â€”]/g, "-")
    .replace(/[â€™]/g, "'")
    .replace(/[â€œâ€�]/g, '"')
    .replace(/â€"/g, '"')
    .replace(/âœ‰ï¸/g, "")
    .trim();

const splitLines = (content = "") => cleanText(content).split("\n");

const parseKeyValue = (lines) => {
  const result = {};
  let currentKey = null;
  let currentValues = [];

  lines.forEach((rawLine, index) => {
    const line = rawLine.trim();
    if (!line) {
      return;
    }

    if (/^https?:\/\//i.test(line)) {
      if (!currentKey && index === 0) {
        result.GitHub = line;
      } else if (currentKey) {
        currentValues.push(line);
      }
      return;
    }

    const match = line.match(/^([A-Za-z][A-Za-z0-9 '&()/.-]+):\s*(.*)$/);
    if (match) {
      if (currentKey) {
        const nextValue = currentValues.join("\n").trim();
        result[currentKey] = result[currentKey]
          ? `${result[currentKey]}\n${nextValue}`
          : nextValue;
      }

      currentKey = match[1].trim();
      currentValues = match[2] ? [match[2].trim()] : [];
      return;
    }

    if (currentKey) {
      currentValues.push(line);
    }
  });

  if (currentKey) {
    const nextValue = currentValues.join("\n").trim();
    result[currentKey] = result[currentKey]
      ? `${result[currentKey]}\n${nextValue}`
      : nextValue;
  }

  return result;
};

const parseBulletList = (value = "") =>
  cleanText(value)
    .split("\n")
    .map((item) => item.replace(/^[-*]\s*/, "").trim())
    .filter(Boolean);

const parseInlineList = (value = "") =>
  cleanText(value)
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean);

const summarize = (value = "", fallback = "") => {
  const source = cleanText(value || fallback);
  if (!source) {
    return "";
  }

  const condensed = source.replace(/\s+/g, " ").trim();
  if (condensed.length <= 150) {
    return condensed;
  }

  return `${condensed.slice(0, 147).trim()}...`;
};

export const rewriteAbout = (content) => {
  const paragraphs = splitLines(content).filter(Boolean);

  return {
    intro:
      "Full Stack Developer with Zoho internship experience, specializing in React.js, Node.js, and Spring Boot to build scalable, production-ready systems.",
    narrative: [
      "I specialize in architecting systems that bridge the gap between complex engineering and clear user outcomes. My background is built on a foundation of full-stack excellence (React, Node, Spring Boot) and an AWS-certified focus on scalability.",
      "A defining highlight of my work is Claridux, an AI-driven platform for job readiness. It leverages Personalized Roadmap Systems (PRS) and skill gap analysis to solve a problem I faced personally: the difficulty of navigating abstract studies without a clear, structured path.",
      "My professional growth has been accelerated through high-intensity environments, including an internship at Zoho and multiple technical hackathons where I've consistently delivered award-winning solutions under tight constraints.",
      "I approach every project with a product-minded perspective—ensuring that every line of code serves a measurable objective while maintaining the architectural integrity required for production-level stability.",
    ],
    source: paragraphs,
  };
};

export const parseProject = (content) => {
  const data = parseKeyValue(splitLines(content));
  const problem = cleanText(data.Problem || "");
  const solution = cleanText(data.Solution || "");
  const context = cleanText(data.Context || "");
  const impact = cleanText(data.Impact || "");

  return {
    title: cleanText(data.Title || ""),
    github: cleanText(data.GitHub || ""),
    live: cleanText(data.Live || ""),
    problem,
    solution,
    tech: parseInlineList(data.Tech || ""),
    role: cleanText(data["My Role"] || ""),
    keyFeatures: parseBulletList(data["Key Features"] || ""),
    systemDesign: parseBulletList(data["System Design"] || ""),
    impact,
    insight: cleanText(data.Insight || ""),
    context,
    achievement: cleanText(data.Achievement || ""),
    extension: cleanText(data.Extension || ""),
    accessibility: cleanText(data["Accessibility Enhancement"] || ""),
    summary: summarize(solution, problem),
  };
};

export const parseInternship = (content) => {
  const data = parseKeyValue(splitLines(content));
  const work = cleanText(data.Work || "");

  return {
    company: cleanText(data.Company || ""),
    role: cleanText(data.Role || ""),
    duration: cleanText(data.Duration || ""),
    team: cleanText(data.Team || ""),
    work,
    highlights: parseBulletList(data["What I Did"] || ""),
    tech: parseInlineList(data.Tech || ""),
    learning: cleanText(data.Learning || ""),
    summary: summarize(work),
  };
};

export const parseHackathon = (content) => {
  const data = parseKeyValue(splitLines(content));
  const learning = cleanText(data.Learning || "");
  const contribution = parseBulletList(data["What I Did"] || "").join(" ");

  return {
    event: cleanText(data.Event || ""),
    level: cleanText(data.Level || ""),
    organizedBy: cleanText(data["Organized By"] || ""),
    date: cleanText(data.Date || ""),
    achievement: cleanText(data.Achievement || ""),
    project: cleanText(data.Project || ""),
    highlights: parseBulletList(data["What I Did"] || ""),
    learning,
    summary: summarize(contribution, learning),
  };
};

export const parseCertificate = (content) => {
  const data = parseKeyValue(splitLines(content));
  const description = cleanText(data.Description || "");

  return {
    title: cleanText(data.Title || ""),
    issuedBy: cleanText(data["Issued By"] || ""),
    date: cleanText(data.Date || ""),
    description,
    keyLearnings: parseBulletList(data["Key Learnings"] || ""),
    relevance: cleanText(data.Relevance || ""),
    summary: summarize(description),
  };
};

export const parseSkills = (content) => {
  const sections = {
    languages: [],
    frontend: [],
    backend: [],
    databases: [],
    cloud: [],
    tools: [],
  };
  let currentSection = null;

  splitLines(content).forEach((rawLine) => {
    const line = rawLine.trim();
    if (!line) {
      return;
    }

    if (line.startsWith("###")) {
      const name = line.replace("###", "").trim().toLowerCase();
      if (name.includes("language")) currentSection = "languages";
      else if (name.includes("frontend")) currentSection = "frontend";
      else if (name.includes("backend")) currentSection = "backend";
      else if (name.includes("database")) currentSection = "databases";
      else if (name.includes("cloud")) currentSection = "cloud";
      else currentSection = "tools";
      return;
    }

    if (!currentSection) {
      return;
    }

    parseInlineList(line.replace(/^- /, "")).forEach((item) => {
      if (!sections[currentSection].includes(item)) {
        sections[currentSection].push(item);
      }
    });
  });

  return sections;
};
