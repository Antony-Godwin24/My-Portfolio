import React, { useState } from "react";
import { Box, Button, Chip, Dialog, DialogContent, IconButton, Stack, Typography } from "@mui/material";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";

const FeaturedProject = ({ project }) => {
  const [activeImage, setActiveImage] = useState(null);

  if (!project) {
    return null;
  }

  const featuredIntro = project.solution || project.summary || project.problem || "";

  return (
    <Box id="featured" component="section" sx={styles.section}>
      <Box sx={styles.panel}>
        <Box sx={styles.header}>
          <Typography sx={styles.eyebrow}>Featured Project</Typography>
          <Typography sx={styles.title}>{project.title}</Typography>
          <Typography sx={styles.summary}>{featuredIntro}</Typography>
        </Box>

        <Box sx={styles.layout}>
          <Box sx={styles.gallery}>
            {project.images.map((image, index) => (
              <Box
                key={image}
                component="button"
                type="button"
                onClick={() => setActiveImage(image)}
                sx={styles.galleryButton}
              >
                <Box component="img" src={image} alt={`${project.title} screen ${index + 1}`} loading="lazy" sx={styles.galleryImage} />
              </Box>
            ))}
          </Box>

          <Box sx={styles.content}>
            <Typography sx={styles.projectTitle}>{project.title}</Typography>
            <Typography sx={styles.copy}>{project.solution}</Typography>
            <Typography sx={styles.linksLabel}>Project Links</Typography>
            <Stack direction="row" spacing={1.2} flexWrap="wrap" useFlexGap sx={styles.primaryActions}>
              {project.github && (
                <Button component="a" href={project.github} target="_blank" rel="noreferrer" variant="contained" sx={styles.primaryLinkBtn}>
                  GitHub
                </Button>
              )}
              {project.live && (
                <Button component="a" href={project.live} target="_blank" rel="noreferrer" variant="outlined" sx={styles.secondaryLinkBtn}>
                  Live Server
                </Button>
              )}
            </Stack>
            <Box sx={styles.badges}>
              {project.tech.map((item) => (
                <Chip key={item} label={item} sx={styles.badge} />
              ))}
            </Box>

            <Box sx={styles.detailGrid}>
              <Box>
                <Typography sx={styles.detailTitle}>Key Features</Typography>
                <Box component="ul" sx={styles.list}>
                  {project.keyFeatures.map((feature) => (
                    <Typography component="li" key={feature} sx={styles.listItem}>{feature}</Typography>
                  ))}
                </Box>
              </Box>
              <Box>
                <Typography sx={styles.detailTitle}>System Design</Typography>
                <Box component="ul" sx={styles.list}>
                  {project.systemDesign.map((feature) => (
                    <Typography component="li" key={feature} sx={styles.listItem}>{feature}</Typography>
                  ))}
                </Box>
              </Box>
            </Box>

            <Button onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })} variant="outlined" sx={styles.cta}>
              Explore Full Project Set
            </Button>
          </Box>
        </Box>
      </Box>

      <Dialog open={Boolean(activeImage)} onClose={() => setActiveImage(null)} maxWidth="lg" fullWidth PaperProps={{ sx: styles.dialogPaper }}>
        <DialogContent sx={styles.dialogContent}>
          <IconButton onClick={() => setActiveImage(null)} sx={styles.dialogClose}>
            <CloseRoundedIcon />
          </IconButton>
          {activeImage && <Box component="img" src={activeImage} alt={project.title} sx={styles.dialogImage} />}
        </DialogContent>
      </Dialog>
    </Box>
  );
};

const styles = {
  section: {
    maxWidth: 1280,
    margin: "0 auto",
    padding: { xs: "0 1.25rem 5rem", md: "0 2rem 7rem" },
  },
  panel: {
    padding: { xs: 3, md: 4 },
    borderRadius: "30px",
    backgroundColor: "#0f172a",
    color: "#e2e8f0",
    boxShadow: "0 32px 70px rgba(15, 23, 42, 0.18)",
  },
  header: {
    maxWidth: 660,
    marginBottom: 4,
  },
  eyebrow: {
    color: "#93c5fd",
    fontWeight: 700,
    textTransform: "uppercase",
    letterSpacing: "0.12em",
    fontSize: "0.82rem",
  },
  title: {
    mt: 1.5,
    fontSize: { xs: "2rem", md: "3rem" },
    fontWeight: 800,
    color: "#fff",
  },
  summary: {
    mt: 1.5,
    color: "#cbd5e1",
    fontSize: "1.04rem",
    lineHeight: 1.8,
    maxWidth: 760,
  },
  layout: {
    display: "grid",
    gridTemplateColumns: { xs: "1fr", lg: "1.1fr 0.9fr" },
    gap: 4,
  },
  gallery: {
    display: "grid",
    gridTemplateColumns: "1fr",
    gap: 2.2,
    alignSelf: "start",
  },
  galleryButton: {
    padding: 0,
    border: 0,
    background: "transparent",
    cursor: "pointer",
    borderRadius: "20px",
    overflow: "hidden",
    transition: "transform 180ms ease",
    "&:hover": {
      transform: "scale(1.02)",
    },
  },
  galleryImage: {
    width: "100%",
    height: { xs: 260, md: 340 },
    objectFit: "contain",
    backgroundColor: "#0b1328",
    transition: "transform 260ms ease",
    "&:hover": {
      transform: "scale(1.02)",
    },
  },
  content: {
    backgroundColor: "#ffffff",
    color: "#0f172a",
    borderRadius: "24px",
    padding: { xs: 3, md: 4 },
    overflow: "hidden",
  },
  projectTitle: {
    fontSize: { xs: "1.8rem", md: "2.4rem" },
    fontWeight: 800,
    lineHeight: 1.1,
  },
  copy: {
    mt: 2.5,
    color: "#475569",
    lineHeight: 1.8,
  },
  linksLabel: {
    marginTop: 2.2,
    color: "#2563eb",
    fontSize: "0.78rem",
    fontWeight: 800,
    letterSpacing: "0.08em",
    textTransform: "uppercase",
  },
  primaryActions: {
    mt: 2,
  },
  primaryLinkBtn: {
    backgroundColor: "#2563eb",
    boxShadow: "0 10px 24px rgba(37, 99, 235, 0.3)",
    "&:hover": {
      backgroundColor: "#1d4ed8",
      transform: "translateY(-2px) scale(1.02)",
    },
  },
  secondaryLinkBtn: {
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
    mt: 3,
  },
  badge: {
    backgroundColor: "#eff6ff",
    color: "#1d4ed8",
    border: "1px solid #bfdbfe",
  },
  detailGrid: {
    display: "grid",
    gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
    gap: 3,
    mt: 4,
  },
  detailTitle: {
    fontWeight: 800,
    marginBottom: 1.5,
    color: "#0f172a",
  },
  list: {
    margin: 0,
    paddingLeft: "1.15rem",
  },
  listItem: {
    color: "#475569",
    marginBottom: 1,
  },
  cta: {
    mt: 2,
    borderColor: "#cbd5e1",
    color: "#0f172a",
    "&:hover": {
      backgroundColor: "#eff6ff",
      borderColor: "#2563eb",
      transform: "translateY(-2px) scale(1.02)",
    },
  },
  dialogPaper: {
    borderRadius: "20px",
    overflow: "hidden",
    backgroundColor: "#0f172a",
  },
  dialogContent: {
    position: "relative",
    padding: { xs: 1.5, md: 2 },
  },
  dialogClose: {
    position: "absolute",
    top: 16,
    right: 16,
    zIndex: 2,
    backgroundColor: "rgba(255,255,255,0.85)",
  },
  dialogImage: {
    width: "100%",
    maxHeight: "84vh",
    objectFit: "contain",
    borderRadius: 3,
  },
};

export default FeaturedProject;
