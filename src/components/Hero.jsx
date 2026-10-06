import React from "react";
import { Avatar, Box, Button, Chip, IconButton, Stack, Typography } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import TerminalRoundedIcon from "@mui/icons-material/TerminalRounded";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";

const Hero = ({ profile }) => {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <Box id="hero" component="section" sx={styles.section}>
      {/* Dark background layer */}
      <Box sx={styles.bg} />

      <Box sx={styles.inner}>
        {/* LEFT: Text content */}
        <Box sx={styles.copy}>
          {/* Zoho-style color dots row */}
          <Stack direction="row" spacing={1} sx={{ mb: 3 }}>
            {["#e84c2b", "#f5a623", "#00a86b", "#2563eb"].map((c) => (
              <Box key={c} sx={{ width: 10, height: 10, borderRadius: "50%", backgroundColor: c }} />
            ))}
          </Stack>

          <Chip
            label="Fresher · Open to Opportunities"
            sx={styles.badge}
          />

          <Typography variant="h1" sx={styles.name}>
            ANTONY<br />GODWIN S
          </Typography>

          <Typography sx={styles.tagline}>
            Final-year CSE Student &amp; Full Stack Developer
          </Typography>

          <Typography sx={styles.objective}>
            {profile.objective}
          </Typography>

          {/* Contact Details Bar */}
          <Box sx={styles.contactBar}>
            <Box sx={styles.contactItem}>
              <Box sx={{ ...styles.contactIconCircle, backgroundColor: "rgba(245,166,35,0.12)", color: "#f5a623" }}>
                <LocationOnOutlinedIcon sx={{ fontSize: 16 }} />
              </Box>
              <Box>
                <Typography sx={styles.contactLabel}>Location</Typography>
                <Typography sx={styles.contactValue}>Tiruchirappalli, TN</Typography>
              </Box>
            </Box>
            <Box sx={styles.contactDivider} />
            <Box sx={styles.contactItem}>
              <Box sx={{ ...styles.contactIconCircle, backgroundColor: "rgba(37,99,235,0.12)", color: "#3b82f6" }}>
                <EmailOutlinedIcon sx={{ fontSize: 16 }} />
              </Box>
              <Box>
                <Typography sx={styles.contactLabel}>Email</Typography>
                <Typography sx={styles.contactValue}>antonygodwin08@gmail.com</Typography>
              </Box>
            </Box>
          </Box>

          {/* Actions */}
          <Stack direction={{ xs: "column", sm: "row" }} spacing={2} sx={{ mt: 4 }}>
            <Button
              variant="contained"
              onClick={() => scrollTo("projects")}
              sx={styles.primaryBtn}
            >
              View My Work
            </Button>
            <Button
              component="a"
              href={profile.resumeUrl}
              download="ANTONY_GODWIN_S_RESUME.pdf"
              variant="outlined"
              sx={styles.outlineBtn}
            >
              Download Resume
            </Button>
          </Stack>

          {/* Social links */}
          <Stack direction="row" spacing={1.5} sx={{ mt: 3.5 }}>
            <IconButton component="a" href={profile.links.github} target="_blank" rel="noreferrer" sx={styles.socialBtn} aria-label="GitHub">
              <GitHubIcon sx={{ fontSize: 18 }} />
            </IconButton>
            <IconButton component="a" href={profile.links.linkedin} target="_blank" rel="noreferrer" sx={styles.socialBtn} aria-label="LinkedIn">
              <LinkedInIcon sx={{ fontSize: 18 }} />
            </IconButton>
            <IconButton component="a" href={profile.links.leetcode} target="_blank" rel="noreferrer" sx={styles.socialBtn} aria-label="LeetCode">
              <TerminalRoundedIcon sx={{ fontSize: 18 }} />
            </IconButton>
            <IconButton component="a" href={profile.links.email} sx={styles.socialBtn} aria-label="Email">
              <EmailOutlinedIcon sx={{ fontSize: 18 }} />
            </IconButton>
          </Stack>
        </Box>

        {/* RIGHT: Profile photo */}
        <Box sx={styles.photoWrapper}>
          {/* Decorative background circle */}
          <Box sx={styles.photoBg} />
          <Avatar
            src={profile.image}
            alt="ANTONY GODWIN S"
            sx={styles.photo}
            imgProps={{ style: { objectPosition: "top center" } }}
          />
          {/* Floating stat cards */}
          <Box sx={styles.statCard1}>
            <Typography sx={styles.statNum}>3+</Typography>
            <Typography sx={styles.statLabel}>Internships</Typography>
          </Box>
          <Box sx={styles.statCard2}>
            <Typography sx={styles.statNum}>1st</Typography>
            <Typography sx={styles.statLabel}>Prize × 2 Hackathons</Typography>
          </Box>
        </Box>
      </Box>

      {/* Bottom fade to white */}
      <Box sx={styles.fadeBottom} />
    </Box>
  );
};

const styles = {
  section: {
    position: "relative",
    backgroundColor: "#1a1a1a",
    overflow: "hidden",
    minHeight: { xs: "auto", md: "100vh" },
    display: "flex",
    flexDirection: "column",
  },
  bg: {
    position: "absolute",
    inset: 0,
    background:
      "radial-gradient(ellipse at 20% 50%, rgba(232,76,43,0.12) 0%, transparent 50%), radial-gradient(ellipse at 80% 20%, rgba(37,99,235,0.1) 0%, transparent 50%)",
    pointerEvents: "none",
  },
  inner: {
    position: "relative",
    zIndex: 1,
    maxWidth: 1200,
    width: "100%",
    margin: "0 auto",
    px: { xs: 2.5, md: 4 },
    py: { xs: 5, md: 0 },
    minHeight: { md: "100vh" },
    display: "grid",
    gridTemplateColumns: { xs: "1fr", lg: "1fr 1fr" },
    alignItems: "center",
    gap: { xs: 5, lg: 4 },
  },
  copy: {
    color: "#ffffff",
    maxWidth: 600,
  },
  badge: {
    mb: 2.5,
    backgroundColor: "rgba(232,76,43,0.15)",
    color: "#ff8066",
    border: "1px solid rgba(232,76,43,0.3)",
    fontWeight: 700,
    fontSize: "0.8rem",
    letterSpacing: "0.02em",
  },
  name: {
    fontSize: { xs: "3.2rem", sm: "4rem", md: "5.2rem" },
    lineHeight: 0.92,
    color: "#ffffff",
    fontWeight: 900,
    letterSpacing: "-0.03em",
  },
  tagline: {
    mt: 2.5,
    fontSize: { xs: "1.1rem", md: "1.3rem" },
    color: "#aaaaaa",
    fontWeight: 500,
  },
  objective: {
    mt: 2,
    color: "#888888",
    fontSize: { xs: "0.9rem", md: "0.97rem" },
    lineHeight: 1.75,
    maxWidth: 540,
  },
  contactBar: {
    mt: 3.5,
    display: "flex",
    flexWrap: { xs: "wrap", sm: "nowrap" },
    alignItems: "center",
    backgroundColor: "rgba(255,255,255,0.04)",
    border: "1px solid rgba(255,255,255,0.08)",
    borderRadius: "14px",
    p: { xs: 1.5, sm: "10px 16px" },
    gap: { xs: 1.5, sm: 2 },
    maxWidth: 580,
  },
  contactItem: {
    display: "flex",
    alignItems: "center",
    gap: 1.25,
    flex: { xs: "1 1 100%", sm: "auto" },
  },
  contactIconCircle: {
    width: 32,
    height: 32,
    borderRadius: "8px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
  },
  contactLabel: {
    fontSize: "0.68rem",
    textTransform: "uppercase",
    letterSpacing: "0.08em",
    color: "#777777",
    fontWeight: 700,
    lineHeight: 1.1,
  },
  contactValue: {
    fontSize: "0.82rem",
    color: "#e2e8f0",
    fontWeight: 600,
    lineHeight: 1.3,
    mt: 0.2,
  },
  contactDivider: {
    display: { xs: "none", sm: "block" },
    width: "1px",
    height: "28px",
    backgroundColor: "rgba(255,255,255,0.08)",
  },
  primaryBtn: {
    backgroundColor: "#e84c2b",
    color: "#ffffff",
    borderRadius: "8px",
    px: 3,
    py: 1.25,
    fontWeight: 700,
    fontSize: "0.95rem",
    boxShadow: "0 4px 20px rgba(232,76,43,0.35)",
    "&:hover": {
      backgroundColor: "#c73d20",
      transform: "translateY(-2px)",
      boxShadow: "0 8px 24px rgba(232,76,43,0.4)",
    },
    transition: "all 160ms ease",
  },
  outlineBtn: {
    borderColor: "rgba(255,255,255,0.25)",
    color: "#ffffff",
    borderRadius: "8px",
    px: 3,
    py: 1.25,
    fontWeight: 600,
    fontSize: "0.95rem",
    "&:hover": {
      borderColor: "rgba(255,255,255,0.55)",
      backgroundColor: "rgba(255,255,255,0.06)",
      transform: "translateY(-2px)",
    },
    transition: "all 160ms ease",
  },
  socialBtn: {
    width: 38,
    height: 38,
    color: "#aaaaaa",
    border: "1px solid rgba(255,255,255,0.12)",
    borderRadius: "8px",
    "&:hover": {
      color: "#ffffff",
      backgroundColor: "rgba(255,255,255,0.08)",
      borderColor: "rgba(255,255,255,0.25)",
      transform: "translateY(-2px)",
    },
    transition: "all 160ms ease",
  },
  photoWrapper: {
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-end",
    height: { xs: 380, md: "70vh" },
    maxHeight: 650,
    mt: { xs: 0, lg: 4 },
  },
  photoBg: {
    position: "absolute",
    bottom: 0,
    left: "50%",
    transform: "translateX(-50%)",
    width: "85%",
    height: "90%",
    borderRadius: "50% 50% 0 0",
    background: "linear-gradient(180deg, rgba(232,76,43,0.15) 0%, rgba(37,99,235,0.08) 100%)",
    border: "1px solid rgba(255,255,255,0.06)",
  },
  photo: {
    position: "relative",
    zIndex: 1,
    width: { xs: 260, sm: 320, md: 380, lg: 420 },
    height: { xs: 340, sm: 400, md: 480, lg: 560 },
    borderRadius: "0",
    objectFit: "cover",
    objectPosition: "top center",
    filter: "drop-shadow(0 20px 40px rgba(0,0,0,0.4))",
    // Make it look like person standing
    "& img": {
      objectFit: "cover",
      objectPosition: "top center",
    },
  },
  statCard1: {
    position: "absolute",
    left: { xs: 0, md: -10 },
    bottom: { xs: 30, md: 80 },
    backgroundColor: "#ffffff",
    borderRadius: "12px",
    px: 2,
    py: 1.5,
    boxShadow: "0 8px 24px rgba(0,0,0,0.2)",
    textAlign: "center",
    minWidth: 90,
    zIndex: 2,
  },
  statCard2: {
    position: "absolute",
    right: { xs: 0, md: -10 },
    bottom: { xs: 30, md: 80 },
    backgroundColor: "#1a1a1a",
    border: "1px solid rgba(255,255,255,0.12)",
    borderRadius: "12px",
    px: 2,
    py: 1.5,
    boxShadow: "0 8px 24px rgba(0,0,0,0.3)",
    textAlign: "center",
    minWidth: 110,
    zIndex: 2,
  },
  statNum: {
    fontSize: "1.5rem",
    fontWeight: 900,
    color: "#e84c2b",
    lineHeight: 1,
  },
  statLabel: {
    fontSize: "0.72rem",
    color: "#888888",
    fontWeight: 600,
    mt: 0.4,
  },
  fadeBottom: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 80,
    background: "linear-gradient(to bottom, transparent, #1a1a1a)",
    pointerEvents: "none",
  },
};

export default Hero;
