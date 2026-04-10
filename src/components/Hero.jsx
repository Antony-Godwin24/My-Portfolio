import React from "react";
import { Avatar, Box, Button, Chip, IconButton, Stack, Typography } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import TerminalRoundedIcon from "@mui/icons-material/TerminalRounded";

const Hero = ({ profile }) => {
  const jumpToProjects = () => {
    window.history.replaceState(null, "", "#projects");
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <Box id="hero" component="section" sx={styles.section}>
      <Box sx={styles.layout}>
        <Box sx={styles.copy}>
          <Chip label="Full Stack Developer" sx={styles.kicker} />
          <Typography variant="h1" sx={styles.name}>
            {profile.name}
          </Typography>
          <Typography variant="h2" sx={styles.identity}>
            {profile.identity}
          </Typography>
          <Typography sx={styles.description}>
            I build practical software systems that connect product thinking, backend structure, and user-facing clarity.
          </Typography>

          <Stack direction={{ xs: "column", sm: "row" }} spacing={2} sx={styles.actions}>
            <Button variant="contained" onClick={jumpToProjects} sx={styles.primaryAction}>
              View Projects
            </Button>
            <Button component="a" href={profile.resumeUrl} download="Antony_Godwin_Resume.pdf" variant="outlined" sx={styles.secondaryAction}>
              Download Resume
            </Button>
          </Stack>

          <Stack direction="row" spacing={1.5} sx={styles.links}>
            <IconButton component="a" href={profile.links.github} target="_blank" rel="noreferrer" sx={styles.iconButton} aria-label="GitHub">
              <GitHubIcon />
            </IconButton>
            <IconButton component="a" href={profile.links.linkedin} target="_blank" rel="noreferrer" sx={styles.iconButton} aria-label="LinkedIn">
              <LinkedInIcon />
            </IconButton>
            <IconButton component="a" href={profile.links.leetcode} target="_blank" rel="noreferrer" sx={styles.iconButton} aria-label="LeetCode">
              <TerminalRoundedIcon />
            </IconButton>
            <IconButton component="a" href={profile.links.email} sx={styles.iconButton} aria-label="Email">
              <EmailOutlinedIcon />
            </IconButton>
          </Stack>
        </Box>

        <Box sx={styles.visual}>
          <Box sx={styles.visualFrame}>
            <Avatar src={profile.image} alt={profile.name} sx={styles.avatar} />
            <Box sx={styles.metricCard}>
              <Typography sx={styles.metricLabel}>Focus</Typography>
              <Typography sx={styles.metricValue}>Product systems</Typography>
            </Box>
            <Box sx={styles.metricCardAlt}>
              <Typography sx={styles.metricLabel}>Approach</Typography>
              <Typography sx={styles.metricValue}>Clarity first</Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

const styles = {
  section: {
    maxWidth: 1280,
    margin: "0 auto",
    padding: { xs: "2rem 1.25rem 4rem", md: "4rem 2rem 6rem" },
  },
  layout: {
    minHeight: { md: "calc(100vh - 110px)" },
    display: "grid",
    gridTemplateColumns: { xs: "1fr", lg: "1.1fr 0.9fr" },
    alignItems: "center",
    gap: { xs: 5, md: 8 },
  },
  copy: {
    maxWidth: 720,
  },
  kicker: {
    mb: 3,
    backgroundColor: "#dbeafe",
    color: "#1d4ed8",
    fontWeight: 700,
  },
  name: {
    fontSize: { xs: "3rem", md: "5.6rem" },
    lineHeight: 0.95,
    color: "#0f172a",
    maxWidth: 680,
  },
  identity: {
    mt: 3,
    fontSize: { xs: "1.55rem", md: "2.4rem" },
    lineHeight: 1.15,
    color: "#334155",
    maxWidth: 680,
  },
  description: {
    mt: 3,
    maxWidth: 620,
    color: "#475569",
    fontSize: { xs: "1rem", md: "1.12rem" },
  },
  actions: {
    mt: 4,
  },
  primaryAction: {
    boxShadow: "0 18px 35px rgba(37, 99, 235, 0.22)",
    "&:hover": {
      transform: "translateY(-2px) scale(1.02)",
    },
  },
  secondaryAction: {
    borderColor: "#cbd5e1",
    color: "#0f172a",
    "&:hover": {
      borderColor: "#2563eb",
      backgroundColor: "#eff6ff",
      transform: "translateY(-2px) scale(1.02)",
    },
  },
  links: {
    mt: 3,
  },
  iconButton: {
    color: "#334155",
    border: "1px solid #cbd5e1",
    backgroundColor: "#fff",
    "&:hover": {
      color: "#2563eb",
      backgroundColor: "#eff6ff",
      transform: "translateY(-2px) scale(1.02)",
    },
  },
  visual: {
    display: "flex",
    justifyContent: "center",
  },
  visualFrame: {
    position: "relative",
    width: "100%",
    maxWidth: 460,
    minHeight: 610,
    padding: "20px",
    borderRadius: "38px",
    backgroundColor: "#e2e8f0",
    border: "1px solid rgba(148, 163, 184, 0.35)",
    overflow: "clip",
  },
  avatar: {
    width: "100%",
    height: 455,
    borderRadius: "30px",
    border: "10px solid #fff",
    boxShadow: "0 30px 60px rgba(15, 23, 42, 0.14)",
    objectFit: "cover",
  },
  metricCard: {
    position: "absolute",
    left: 24,
    bottom: 24,
    padding: "1rem 1.15rem",
    borderRadius: "20px",
    backgroundColor: "#0f172a",
    color: "#fff",
    width: 190,
    transition: "transform 180ms ease",
    "&:hover": {
      transform: "scale(1.02)",
    },
  },
  metricCardAlt: {
    position: "absolute",
    right: 24,
    bottom: 24,
    padding: "1rem 1.15rem",
    borderRadius: "20px",
    backgroundColor: "#ffffff",
    color: "#0f172a",
    border: "1px solid #cbd5e1",
    width: 190,
    transition: "transform 180ms ease",
    zIndex: 3,
    "&:hover": {
      transform: "scale(1.02)",
    },
  },
  metricLabel: {
    fontSize: "0.8rem",
    color: "inherit",
    opacity: 0.72,
  },
  metricValue: {
    mt: 0.5,
    fontSize: "1.05rem",
    fontWeight: 700,
  },
};

export default Hero;
