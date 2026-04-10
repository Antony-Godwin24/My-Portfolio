import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";

const Projects = ({ projects }) => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <Box id="projects" component="section" sx={styles.section}>
      <Box sx={styles.header}>
        <Typography sx={styles.eyebrow}>Projects</Typography>
        <Typography sx={styles.title}>Selected builds with system depth.</Typography>
      </Box>
      <Box sx={styles.grid}>
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} onClick={() => setSelectedProject(project)} />
        ))}
      </Box>
      <ProjectModal project={selectedProject} open={Boolean(selectedProject)} onClose={() => setSelectedProject(null)} />
    </Box>
  );
};

const styles = {
  section: {
    maxWidth: 1280,
    margin: "0 auto",
    padding: { xs: "0 1.25rem 5rem", md: "0 2rem 7rem" },
  },
  header: {
    marginBottom: 4,
  },
  eyebrow: {
    color: "#2563eb",
    fontWeight: 700,
    letterSpacing: "0.12em",
    textTransform: "uppercase",
    fontSize: "0.82rem",
  },
  title: {
    marginTop: 1.5,
    fontSize: { xs: "1.9rem", md: "2.8rem" },
    fontWeight: 800,
    color: "#0f172a",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: { xs: "1fr", md: "repeat(2, minmax(0, 1fr))" },
    gap: 3,
  },
};

export default Projects;
