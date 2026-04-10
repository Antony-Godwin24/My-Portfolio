import React from "react";
import { Box, Button, Chip, Stack, Typography } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LaunchRoundedIcon from "@mui/icons-material/LaunchRounded";

const getCardDescription = (project) => project.solution || project.summary || project.problem || "";

const ProjectCard = ({ project, onClick }) => (
  <Box role="button" tabIndex={0} onClick={onClick} onKeyDown={(event) => event.key === "Enter" && onClick()} sx={styles.card}>
    <Box sx={styles.topBlock}>
      <Typography sx={styles.actionsLabel}>Project Links</Typography>
      {project.title.toLowerCase().includes("water can") && (
        <Chip 
          label="PATENT APPLIED (2024)" 
          sx={{ 
            backgroundColor: "#fef3c7", 
            color: "#92400e", 
            fontWeight: 900, 
            fontSize: "0.68rem", 
            letterSpacing: "0.05em",
            mb: 1.2,
            alignSelf: "start"
          }} 
        />
      )}
      <Typography sx={styles.title}>{project.title}</Typography>
      <Typography sx={styles.summary}>{getCardDescription(project)}</Typography>
    </Box>

    <Box sx={styles.actionsBlock}>
      <Stack direction="row" spacing={1.5} sx={styles.links}>
        {project.github && (
          <Button
            component="a"
            href={project.github}
            target="_blank"
            rel="noreferrer"
            onClick={(event) => event.stopPropagation()}
            variant="contained"
            size="small"
            startIcon={<GitHubIcon fontSize="small" />}
            sx={styles.primaryBtn}
          >
            GitHub
          </Button>
        )}
        {project.live && (
          <Button
            component="a"
            href={project.live}
            target="_blank"
            rel="noreferrer"
            onClick={(event) => event.stopPropagation()}
            variant="outlined"
            size="small"
            startIcon={<LaunchRoundedIcon fontSize="small" />}
            sx={styles.secondaryBtn}
          >
            Live Server
          </Button>
        )}
      </Stack>
      <Box sx={styles.badges}>
        {project.tech.slice(0, 5).map((item) => (
          <Chip key={item} label={item} sx={styles.badge} />
        ))}
      </Box>
    </Box>
  </Box>
);

const styles = {
  card: {
    display: "flex",
    flexDirection: "column",
    height: "100%",
    padding: { xs: 3, md: 3.5 },
    borderRadius: "26px",
    border: "1px solid #dbe3ee",
    backgroundColor: "#ffffff",
    cursor: "pointer",
    transition: "transform 180ms ease, box-shadow 180ms ease, border-color 180ms ease",
    "&:hover": {
      transform: "translateY(-4px) scale(1.01)",
      boxShadow: "0 24px 45px rgba(15, 23, 42, 0.09)",
      borderColor: "#93c5fd",
    },
  },
  topBlock: {
    minHeight: { xs: "auto", md: 250 },
  },
  title: {
    color: "#0f172a",
    fontWeight: 800,
    fontSize: { xs: "1.2rem", md: "1.4rem" },
    lineHeight: 1.2,
  },
  actionsLabel: {
    color: "#2563eb",
    fontSize: "0.78rem",
    fontWeight: 800,
    letterSpacing: "0.08em",
    textTransform: "uppercase",
    marginBottom: 1.2,
  },
  summary: {
    marginTop: 1.5,
    color: "#475569",
    lineHeight: 1.7,
    display: "-webkit-box",
    WebkitLineClamp: 4,
    WebkitBoxOrient: "vertical",
    overflow: "hidden",
  },
  actionsBlock: {
    marginTop: "auto",
    paddingTop: 2,
  },
  links: {
    flexWrap: "wrap",
    minHeight: 44,
    alignItems: "center",
  },
  primaryBtn: {
    backgroundColor: "#2563eb",
    boxShadow: "0 10px 24px rgba(37, 99, 235, 0.22)",
    "&:hover": {
      backgroundColor: "#1d4ed8",
      transform: "translateY(-2px) scale(1.02)",
    },
  },
  secondaryBtn: {
    borderColor: "#93c5fd",
    color: "#1d4ed8",
    "&:hover": {
      borderColor: "#2563eb",
      backgroundColor: "#eff6ff",
      transform: "translateY(-2px) scale(1.02)",
    },
  },
  badges: {
    display: "flex",
    flexWrap: "wrap",
    gap: 1,
    marginTop: 2.2,
  },
  badge: {
    backgroundColor: "#eff6ff",
    color: "#1d4ed8",
    border: "1px solid #dbeafe",
    fontWeight: 500,
  },
};

export default ProjectCard;
