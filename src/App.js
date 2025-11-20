import React, { useState } from "react";
import {
  Box,
  Typography,
  Button,
  Grid,
  Paper,
  Avatar,
  Link,
} from "@mui/material";
import {
  GitHub,
  LinkedIn,
  Download,
  Code,
  EmojiEvents,
  School,
  WorkspacePremium,
  EmojiObjects,
  Build,
  Translate,
  Psychology,
  Star,
} from "@mui/icons-material";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";
import styles from "./style";
import profilePic from "./profile.png";
import NavBar from "./Navbar";
import ContactForm from "./ContactForm";
import Resume from "./resumeNew.pdf";

// Replace these with your actual Unsplash image URLs for best results
// Search "computer science student", "mern stack", "programming grid", "hackathon prize", "internship office", "college campus", "certificate", "patent", "water safety", "weather app", "password generator", "qr code", "traffic ai", "student record", etc.
const UNSLASH_HERO_BG =
  "https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80";
const UNSLASH_SKILLS_BG =
  "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80";
const UNSLASH_ACHIEVEMENTS_BG =
  "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80";
const UNSLASH_INTERNSHIPS_BG =
  "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80";
const UNSLASH_PROJECTS_BG =
  "https://images.unsplash.com/photo-1614027164847-1b28cfe1df60?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80";
const UNSLASH_EDUCATION_BG =
  "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80";
const UNSLASH_CERTIFICATIONS_BG =
  "https://images.unsplash.com/photo-1518976024611-28e4c7891247?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80";
const UNSLASH_PATENTS_BG =
  "https://images.unsplash.com/photo-1589998059171-988d887df646?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80";
const UNSLASH_TOOLS_BG =
  "https://images.unsplash.com/photo-1604964432806-254d07c11f32?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80";
const UNSLASH_LANGUAGES_BG =
  "https://images.unsplash.com/photo-1563841930606-77ef4526b153?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80";
const UNSLASH_INTERESTS_BG =
  "https://images.unsplash.com/photo-1535223289827-42f30e9a013f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80";
const UNSLASH_SOFT_SKILLS_BG =
  "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80";

const skills = [
  // Full Stack Core
  "React.js",
  "Node.js",
  "Express.js",

  // Backend | Java
  "Java",
  "Spring Boot",
  "Hibernate",
  "JDBC",
  "Maven",

  // Databases
  "MySQL",
  "PostgreSQL",
  "MongoDB",

  // Other
  "REST APIs",
  "Deluge",
  "Zoho Sigma",
];


const achievements = [
  "Zoho Corporation Extension Developer Internship",
  "Amizhth InfoTech React Developer Internship",
  "AURA’24 Hackathon – 3rd Prize (Bannari Amman Institute of Technology)",
  "Patent Holder (QR Code Water Can System, filed 2024)",
];
const internships = [
  {
    title: "ZOHO CORPORATION – CRM Extension Developer",
    period: "Jul–Aug 2025",
    details:
      "Worked on Zoho Marketplace extension development, automation, and integrations using Deluge scripting and REST APIs.",
  },
  {
    title: "Amizhth InfoTech – React Developer",
    period: "Sep–Nov 2025",
    details:
      "Built and improved frontend features with React.js and Material-UI, integrated REST APIs, and optimized UI/UX.",
  },
];
const projects = [
  {
    name: "Zoho CRM Duplicate Detector",
    details:
      "Zoho CRM extension detecting duplicates (Leads, Contacts, Accounts) by email/phone. Integrated with Deluge, CRM APIs, Sigma widgets, and custom modules.",
  },
  {
    name: "Smart QR-Based Water Can Monitoring System",
    github:
      "https://github.com/Antony-Godwin24/Smart-QR-Based-Water-Can-Monitoring-System-for-Safe-Reuse-and-Sustainability-Full-Stack",
    details:
      "Full-stack system with JWT auth, admin panel, Express.js + MySQL backend, QR-based tracking, and quality monitoring.",
  },
  {
    name: "Traffic Violation Detection System – AI/ML",
    github: "https://github.com/Antony-Godwin24/TrafficViolationSystem",
    details:
      "Computer vision system detecting traffic violations using OpenCV, YOLO, CNNs. Alerts authorities via dashboard/API.",
  },
  {
    name: "Students Record Management",
    github: "https://github.com/Antony-Godwin24/Students-Record-Management",
    details:
      "Role-based student portal (React.js, Express.js, MySQL, JWT, bcrypt). Admin–student CRUD operations with secure auth.",
  },
];


const education = [
  {
    institute: "K. Ramakrishnan College of Engineering",
    degree: "BE Computer Science and Engineering",
    period: "2023–2027",
    details: "",
  },
];
const certifications = [
  "Zoho Corporation – Extension Developer Internship",
  "NPTEL – Introduction to Internet of Things (Elite)",
  "NPTEL – Introduction to Operating Systems",
];
const patents = [
  {
    title: "A System for Enhancing Quality of Water Can Through QR Code",
    year: "2024",
    details:
      "Patent system to improve public health and water safety via QR codes on water cans for usage tracking, quality status, payment blocking, and real-time sensor integration. Filed by K. Ramakrishnan College of Engineering.",
  },
];
const tools = [
  "VS Code",
  "Eclipse",
  "Git & GitHub",
  "EmailJS",
  "MySQL Workbench",
  "Canva",
  "Vercel",
  "Postman",
  "MongoDB",
  "Zoho Tools",
];
const languages = ["Tamil", "English"];
const interests = [
  "MERN Full Stack Development",
  "Problem Solving",
  "Technical Blogging",
  "Startups & Innovation",
];
const softSkills = [
  "Leadership & Teamwork",
  "Effective Communication",
  "Time & Priority Management",
  "Fast Learning & Adaptability",
  "Critical & Analytical Thinking",
  "Problem Solving Under Pressure",
];

export default function App() {
  const [avatarHovered, setAvatarHovered] = useState(false);

  return (
    <ThemeProvider theme={theme}>
      <Box sx={styles.container}>
        <NavBar />

        {/* Hero Section */}
        <Box id="hero" sx={styles.hero}>
          <Box
            component="img"
            src={UNSLASH_HERO_BG} // YOUR UNSLASH HERO IMAGE URL
            alt="Computer Science Student"
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              zIndex: 0,
              filter: "brightness(0.5) blur(2px)",
            }}
          />
          <Box sx={styles.heroContent}>
            <Avatar
              src={profilePic}
              sx={{
                ...styles.avatar,
                transform: avatarHovered ? "scale(1.08)" : "scale(1)",
                boxShadow: avatarHovered
                  ? "0 0 24px rgba(255, 0, 127, 0.5)"
                  : "none",
              }}
              onMouseEnter={() => setAvatarHovered(true)}
              onMouseLeave={() => setAvatarHovered(false)}
            />
            <Typography variant="h2" sx={styles.heroTitle}>
              Antony Godwin S
            </Typography>
            <Typography variant="h5" sx={styles.heroSubtitle}>
              Computer Science student and full-stack developer with hands-on experience in 
MERN, PERN, and Java Spring Boot development. Strong in 
building production-ready applications, backend APIs, and database-heavy 
systems. Interned at Zoho as an Extension Developer working with Deluge, 
CRM APIs, and custom modules.

            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: "rgba(255,255,255,0.9)",
                mb: 4,
                maxWidth: "600px",
                mx: "auto",
              }}
            >
              Computer Science student and passionate developer with hands-on
              experience building responsive, functional web apps. Interned at
              Zoho and Amizhth, contributor to real-world projects with
              React.js, Node.js, MongoDB, MySQL, Java, and modern dev tools.
            </Typography>
            <a href={Resume} download style={{ textDecoration: "none" }}>
              <Button
                variant="contained"
                color="secondary"
                startIcon={<Download />}
                sx={styles.downloadBtn}
              >
                Download Resume
              </Button>
            </a>
          </Box>
        </Box>

        {/* Skills Section */}
        <Box
          id="skills"
          sx={styles.sectionWithImage}
          style={{ backgroundImage: `url(${UNSLASH_SKILLS_BG})` }}
        >
          <Box sx={styles.sectionContent}>
            <Typography variant="h4" sx={styles.sectionTitle}>
              Skills
            </Typography>
            <Grid container spacing={2} sx={{ justifyContent: "center" }}>
              {skills.map((skill, idx) => (
                <Grid item xs={12} sm={6} md={4} lg={3} key={idx}>
                  <Paper sx={styles.bigCard}>
                    <Typography
                      variant="body1"
                      sx={{ fontWeight: 600, color: "primary.main" }}
                    >
                      <Code sx={{ mr: 1, verticalAlign: "middle" }} /> {skill}
                    </Typography>
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Box>

        {/* Achievements Section */}
        <Box
          id="achievements"
          sx={styles.sectionWithImage}
          style={{ backgroundImage: `url(${UNSLASH_ACHIEVEMENTS_BG})` }}
        >
          <Box sx={styles.sectionContent}>
            <Typography variant="h4" sx={styles.sectionTitle}>
              Achievements
            </Typography>
            <Grid container spacing={3} sx={{ justifyContent: "center" }}>
              {achievements.map((ach, idx) => (
                <Grid item xs={12} md={6} key={idx}>
                  <Paper sx={styles.cardWithIcon}>
                    <EmojiEvents
                      sx={{ fontSize: 40, mb: 1, color: "secondary.main" }}
                    />
                    <Typography variant="h6" sx={{ mb: 1 }}>
                      {ach}
                    </Typography>
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Box>

        {/* Internships Section */}
        <Box
          id="internships"
          sx={styles.sectionWithImage}
          style={{ backgroundImage: `url(${UNSLASH_INTERNSHIPS_BG})` }}
        >
          <Box sx={styles.sectionContent}>
            <Typography variant="h4" sx={styles.sectionTitle}>
              Internships
            </Typography>
            <Grid container spacing={3} sx={{ justifyContent: "center" }}>
              {internships.map((intern, idx) => (
                <Grid item xs={12} key={idx}>
                  <Paper sx={styles.card}>
                    <Typography variant="h6" sx={{ fontWeight: 600 }}>
                      {intern.title}
                    </Typography>
                    <Typography variant="subtitle2" color="text.secondary">
                      {intern.period}
                    </Typography>
                    <Typography variant="body2" sx={{ mt: 1 }}>
                      {intern.details}
                    </Typography>
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Box>

        {/* Projects Section */}
        <Box
          id="projects"
          sx={styles.sectionWithImage}
          style={{ backgroundImage: `url(${UNSLASH_PROJECTS_BG})` }}
        >
          <Box sx={styles.sectionContent}>
            <Typography variant="h4" sx={styles.sectionTitle}>
              Projects
            </Typography>
            <Grid container spacing={3} sx={{ justifyContent: "center" }}>
              {projects.map((proj, idx) => (
                <Grid item xs={12} sm={6} md={4} key={idx}>
                  <Paper sx={styles.bigCard}>
                    <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                      {proj.name}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ mb: 2, textAlign: "center" }}
                    >
                      {proj.details}
                    </Typography>
                    {(proj.link || proj.github) && (
                      <Box sx={styles.projectLinks}>
                        {proj.link && (
                          <Link
                            href={proj.link}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Live
                          </Link>
                        )}
                        {proj.github && (
                          <Link
                            href={proj.github}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            GitHub
                          </Link>
                        )}
                      </Box>
                    )}
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Box>

        {/* Education Section */}
        <Box
          id="education"
          sx={styles.sectionWithImage}
          style={{ backgroundImage: `url(${UNSLASH_EDUCATION_BG})` }}
        >
          <Box sx={styles.sectionContent}>
            <Typography variant="h4" sx={styles.sectionTitle}>
              Education
            </Typography>
            <Grid container spacing={3}>
              {education.map((edu, idx) => (
                <Grid item xs={12} key={idx}>
                  <Paper sx={styles.cardWithIcon}>
                    <School
                      sx={{ fontSize: 40, mb: 1, color: "secondary.main" }}
                    />
                    <Typography variant="h6" sx={{ fontWeight: 600 }}>
                      {edu.institute}
                    </Typography>
                    <Typography variant="subtitle2" sx={{ mb: 1 }}>
                      {edu.degree} ({edu.period})
                    </Typography>
                    <Typography variant="body2">{edu.details}</Typography>
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Box>

        {/* Certifications Section */}
        <Box
          id="certifications"
          sx={styles.sectionWithImage}
          style={{ backgroundImage: `url(${UNSLASH_CERTIFICATIONS_BG})` }}
        >
          <Box sx={styles.sectionContent}>
            <Typography variant="h4" sx={styles.sectionTitle}>
              Certifications
            </Typography>
            <Grid container spacing={3} sx={{ justifyContent: "center" }}>
              {certifications.map((cert, idx) => (
                <Grid item xs={12} sm={6} key={idx}>
                  <Paper sx={styles.cardWithIcon}>
                    <WorkspacePremium
                      sx={{ fontSize: 40, mb: 1, color: "secondary.main" }}
                    />
                    <Typography variant="h6">{cert}</Typography>
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Box>

        {/* Patents Section */}
        <Box
          id="patents"
          sx={styles.sectionWithImage}
          style={{ backgroundImage: `url(${UNSLASH_PATENTS_BG})` }}
        >
          <Box sx={styles.sectionContent}>
            <Typography variant="h4" sx={styles.sectionTitle}>
              Patents
            </Typography>
            <Grid container spacing={3}>
              {patents.map((pat, idx) => (
                <Grid item xs={12} key={idx}>
                  <Paper sx={styles.cardWithIcon}>
                    <EmojiObjects
                      sx={{ fontSize: 40, mb: 1, color: "secondary.main" }}
                    />
                    <Typography variant="h6" sx={{ fontWeight: 600 }}>
                      {pat.title}
                    </Typography>
                    <Typography variant="subtitle2">{pat.year}</Typography>
                    <Typography variant="body2" sx={{ mt: 1 }}>
                      {pat.details}
                    </Typography>
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Box>

        {/* Tools Section */}
        <Box
          id="tools"
          sx={styles.sectionWithImage}
          style={{ backgroundImage: `url(${UNSLASH_TOOLS_BG})` }}
        >
          <Box sx={styles.sectionContent}>
            <Typography variant="h4" sx={styles.sectionTitle}>
              Tools
            </Typography>
            <Grid container spacing={2} sx={{ justifyContent: "center" }}>
              {tools.map((tool, idx) => (
                <Grid item xs={12} sm={6} md={4} lg={3} key={idx}>
                  <Paper sx={styles.bigCard}>
                    <Typography
                      variant="body1"
                      sx={{ fontWeight: 600, color: "primary.main" }}
                    >
                      <Build sx={{ mr: 1, verticalAlign: "middle" }} /> {tool}
                    </Typography>
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Box>

        {/* Languages Section */}
        <Box
          id="languages"
          sx={styles.sectionWithImage}
          style={{ backgroundImage: `url(${UNSLASH_LANGUAGES_BG})` }}
        >
          <Box sx={styles.sectionContent}>
            <Typography variant="h4" sx={styles.sectionTitle}>
              Languages
            </Typography>
            <Grid container spacing={2} sx={{ justifyContent: "center" }}>
              {languages.map((lang, idx) => (
                <Grid item xs={12} sm={6} md={4} lg={3} key={idx}>
                  <Paper sx={styles.bigCard}>
                    <Typography
                      variant="body1"
                      sx={{ fontWeight: 600, color: "primary.main" }}
                    >
                      <Translate sx={{ mr: 1, verticalAlign: "middle" }} />{" "}
                      {lang}
                    </Typography>
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Box>

        {/* Interests Section */}
        <Box
          id="interests"
          sx={styles.sectionWithImage}
          style={{ backgroundImage: `url(${UNSLASH_INTERESTS_BG})` }}
        >
          <Box sx={styles.sectionContent}>
            <Typography variant="h4" sx={styles.sectionTitle}>
              Interests
            </Typography>
            <Grid container spacing={2} sx={{ justifyContent: "center" }}>
              {interests.map((interest, idx) => (
                <Grid item xs={12} sm={6} md={4} lg={3} key={idx}>
                  <Paper sx={styles.bigCard}>
                    <Typography
                      variant="body1"
                      sx={{ fontWeight: 600, color: "primary.main" }}
                    >
                      <Star sx={{ mr: 1, verticalAlign: "middle" }} />{" "}
                      {interest}
                    </Typography>
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Box>

        {/* Soft Skills Section */}
        <Box
          id="soft-skills"
          sx={styles.sectionWithImage}
          style={{ backgroundImage: `url(${UNSLASH_SOFT_SKILLS_BG})` }}
        >
          <Box sx={styles.sectionContent}>
            <Typography variant="h4" sx={styles.sectionTitle}>
              Soft Skills
            </Typography>
            <Grid container spacing={2} sx={{ justifyContent: "center" }}>
              {softSkills.map((skill, idx) => (
                <Grid item xs={12} sm={6} md={4} lg={3} key={idx}>
                  <Paper sx={styles.bigCard}>
                    <Typography
                      variant="body1"
                      sx={{ fontWeight: 600, color: "primary.main" }}
                    >
                      <Psychology sx={{ mr: 1, verticalAlign: "middle" }} />{" "}
                      {skill}
                    </Typography>
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Box>

        {/* Contact Section */}
        <ContactForm />

        {/* Footer */}
        <Box sx={styles.footer}>
          <Box sx={styles.socialIcons}>
            <Link
              href="https://github.com/Antony-Godwin24"
              target="_blank"
              color="text.primary"
            >
              <GitHub fontSize="large" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/antony-godwin-s-7143ab2a4/"
              target="_blank"
              color="text.primary"
            >
              <LinkedIn fontSize="large" />
            </Link>
          </Box>
          <Typography variant="subtitle2" color="text.secondary">
            © {new Date().getFullYear()} Antony Godwin S
          </Typography>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
