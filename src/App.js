import React, { useState } from "react";
import {
  Box,
  Typography,
  Button,
  Link,
  Container,
} from "@mui/material";
import {
  GitHub,
  LinkedIn,
  FolderOpen,
} from "@mui/icons-material";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";
import styles from "./style";
import profilePic from "./profile.png";
import NavBar from "./Navbar";
import ContactForm from "./ContactForm";
import Resume from "./resumeNew.pdf";

const skills = [
  { name: "React.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "Express.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" }, // Note: Express icon often dark, check contrast or use generic
  { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
  { name: "Spring Boot", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" },
  { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
  { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
  { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
  { name: "Maven", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/maven/maven-original.svg" },
  { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  { name: "Zoho Deluge", icon: "https://img.icons8.com/color/48/000000/code.png" }, // Fallback/Generic
  { name: "REST APIs", icon: "https://img.icons8.com/nolan/64/api-settings.png" },
];

const experience = [
  {
    title: "CRM Extension Developer",
    company: "ZOHO CORPORATION",
    period: "Jul 2025 – Aug 2025",
    points: [
      "Developed Zoho Marketplace extensions using Deluge scripting and REST APIs.",
      "Automated critical business workflows for CRM users.",
      "Integrated third-party services like Google Maps and payment gateways."
    ],
  },
  {
    title: "React Developer Intern",
    company: "Amizhth InfoTech",
    period: "Sep 2025 – Dec 2025",
    points: [
      "Built responsive frontend features with React.js and Material-UI.",
      "Optimized application performance and improved load times by 20%.",
      "Collaborated with backend teams to integrate RESTful services."
    ],
  },
];

const projects = [
  {
    name: "Zoho CRM Duplicate Detector",
    details:
      "Automated extension to detect duplicate Leads/Contacts via email and phone, ensuring data consistency for high-volume CRM accounts.",
    tech: ["Deluge", "Zoho CRM API", "Sigma"],
  },
  {
    name: "Smart Water Monitoring System",
    github: "https://github.com/Antony-Godwin24/Smart-QR-Based-Water-Can-Monitoring-System-for-Safe-Reuse-and-Sustainability-Full-Stack",
    details:
      "Full-stack IoT system featuring QR-based tracking for real-time water quality and usage monitoring. Includes Admin/User dashboards.",
    tech: ["React.js", "Node.js", "MySQL", "IoT"],
  },
  {
    name: "Traffic Violation Detection",
    github: "https://github.com/Antony-Godwin24/TrafficViolationSystem",
    details:
      "Computer vision system utilizing OpenCV & YOLO for automated traffic violation detection, report generation, and authority alerting.",
    tech: ["Python", "OpenCV", "YOLO", "CNN"],
  },
  {
    name: "Student Record Management",
    github: "https://github.com/Antony-Godwin24/Students-Record-Management",
    details:
      "Secure academic portal featuring role-based access control, JWT authentication, and Bcrypt hashing for student record management.",
    tech: ["React.js", "Express", "MySQL", "JWT"],
  },
];

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={styles.container}>
        <NavBar />

        {/* Hero Section */}
        <Box id="hero" component="section" sx={styles.hero}>
          <Box sx={styles.heroContent}>
            <Box sx={styles.heroText}>
                <Typography sx={styles.heroPrefix}>Hi, my name is</Typography>
                <Typography variant="h1" sx={styles.heroTitle}>
                  Antony Godwin S.
                </Typography>
                <Typography variant="h2" sx={styles.heroSubtitle}>
                  I'm a <span style={{ color: "#64ffda" }}>Java Spring Boot</span> & <br />
                  Full Stack Developer.
                </Typography>
                <Typography sx={styles.heroDescription}>
                  I specialize in building accessible, exceptional digital experiences. 
                  Currently, I'm focused on developing scalable, product-ready applications 
                  at <strong>Zoho Corporation</strong>.
                </Typography>
                <Link 
                  href={Resume} 
                  target="_blank" 
                  underline="none"
                  sx={styles.downloadBtn}
                >
                  Check out my Resume!
                </Link>
            </Box>
            
            {/* Profile Photo */}
            <Box sx={styles.avatarContainer}>
                 <Box component="img" src={profilePic} alt="Profile" sx={styles.avatar} />
            </Box>
          </Box>
        </Box>

        {/* About Section */}
        <Box id="about" component="section" sx={styles.section}>
            <Typography variant="h3" sx={styles.sectionTitle}>
                About Me
            </Typography>
            <Box sx={{ maxWidth: "900px", mx: "auto" }}>

                <Typography sx={styles.aboutText}>
  Hello! I’m Antony Godwin S, a full-stack developer who enjoys building 
  reliable, scalable applications that solve real-world problems. 
  My journey into development began in 2023, driven by curiosity and a desire 
  to understand how things work beyond the UI.
</Typography>

<Typography sx={styles.aboutText}>
  Over time, I’ve worked across frontend and backend technologies, building 
  production-oriented applications using React, Node.js, Java, and Spring Boot. 
  I’ve also had hands-on experience developing Zoho Marketplace extensions, 
  integrating APIs, and automating workflows for real business use cases.
</Typography>

<Typography sx={styles.aboutText}>
  Today, my focus is on writing clean, maintainable code and designing systems 
  that are efficient, secure, and user-centric. I enjoy working close to the 
  product, understanding requirements deeply, and turning ideas into 
  dependable software.
</Typography>

<Typography sx={styles.aboutText}>
  Here are a few technologies I’ve been working with recently:
</Typography>

            </Box>
        </Box>

        {/* Experience Section (Reordered: First) */}
        <Box id="experience" component="section" sx={styles.section}>
             <Typography variant="h3" sx={styles.sectionTitle}>
                Where I've Worked
            </Typography>
            <Box sx={{ maxWidth: "700px", margin: "0 auto" }}>
                {experience.map((job, idx) => (
                    <Box key={idx} sx={styles.expCard}>
                        <Typography sx={styles.expTitle}>
                            {job.title} <span style={styles.expCompany}>@ {job.company}</span>
                        </Typography>
                        <Typography sx={styles.expDuration}>{job.period}</Typography>
                        <Box component="ul" sx={styles.expPoints}>
                            {job.points.map((pt, i) => (
                                <li key={i}>{pt}</li>
                            ))}
                        </Box>
                    </Box>
                ))}
            </Box>
        </Box>

        {/* Projects Section (Reordered: Second) */}
        <Box id="projects" component="section" sx={styles.section}>
            <Typography variant="h3" sx={styles.sectionTitle}>
                Some Things I've Built
            </Typography>
            <Box sx={styles.gridContainer}>
                {projects.map((proj, idx) => (
                    <Box key={idx} sx={styles.projectCard}>
                        <Box>
                            <Box sx={styles.projectHeader}>
                                <FolderOpen sx={styles.projectFolderIcon} />
                                <Box sx={styles.projectLinks}>
                                    {proj.github && (
                                        <Link href={proj.github} target="_blank">
                                            <GitHub />
                                        </Link>
                                    )}
                                </Box>
                            </Box>
                            <Typography sx={styles.projectTitle}>
                                {proj.name}
                            </Typography>
                            <Typography sx={styles.projectDescription}>
                                {proj.details}
                            </Typography>
                        </Box>
                        <Box sx={styles.techStack}>
                             {proj.tech.map((t, i) => (
                                 <span key={i}>{t}</span>
                             ))}
                        </Box>
                    </Box>
                ))}
            </Box>
        </Box>

        {/* Skills Section (Moved here & Redesigned) */}
        <Box id="skills" component="section" sx={styles.section}>
             <Typography variant="h3" sx={styles.sectionTitle}>
                Technical Skills
            </Typography>
            <Box sx={styles.skillsGrid}>
                {skills.map((skill, i) => (
                    <Box key={i} sx={styles.techCard}>
                        <Box component="img" src={skill.icon} alt={skill.name} sx={styles.techIcon} />
                        <Typography sx={styles.techName}>{skill.name}</Typography>
                    </Box>
                ))}
            </Box>
        </Box>

        {/* Contact Section */}
        <Box id="contact" component="section" sx={{ ...styles.section, textAlign: "center" }}>
            <Typography variant="h3" sx={{ ...styles.sectionTitle, justifyContent: "center", "&:after": { display: "none" } }}>
                What's Next?
            </Typography>
            <Typography variant="h2" sx={{ color: "#e6f1ff", fontWeight: 700, mb: 3 }}>
                Get In Touch
            </Typography>
            <Typography sx={{ 
                color: "#8892b0", 
                maxWidth: "600px", 
                width: "100%", // Ensure it respects container width
                mx: "auto", 
                mb: 5, 
                fontSize: "1.1rem",
                px: 2 // Add internal padding as slight buffer
            }}>
                I'm currently looking for new opportunities, and my inbox is always open. 
                Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </Typography>
            
            <Box sx={styles.formContainer}>
                 <ContactForm />
            </Box>
        </Box>

        {/* Footer */}
        <Box sx={styles.footer}>
             <Box sx={styles.socialIcons}>
                <Link href="https://github.com/Antony-Godwin24" target="_blank">
                    <GitHub />
                </Link>
                <Link href="https://www.linkedin.com/in/antony-godwin-s-7143ab2a4/" target="_blank">
                    <LinkedIn />
                </Link>
             </Box>
            <Typography sx={{ fontFamily: '"Fira Code", monospace' }}>
                Designed & Built by Antony Godwin S
            </Typography>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
