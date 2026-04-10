import React, { useState } from "react";
import { Box, Button, Chip, Dialog, DialogContent, IconButton, Stack, Typography } from "@mui/material";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import GitHubIcon from "@mui/icons-material/GitHub";
import LaunchRoundedIcon from "@mui/icons-material/LaunchRounded";
import ArrowBackIosNewRoundedIcon from "@mui/icons-material/ArrowBackIosNewRounded";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";

const getLeadDescription = (project) => {
  if (project.problem && project.solution) {
    return `${project.solution} ${project.problem}`;
  }

  return project.solution || project.summary || project.problem || "";
};

const ProjectModal = ({ project, open, onClose }) => {
  const [imageIndex, setImageIndex] = useState(0);
  const [fullScreenImage, setFullScreenImage] = useState(null);

  if (!project) {
    return null;
  }

  const hasImages = project.images.length > 0;
  const activeImage = hasImages ? project.images[imageIndex % project.images.length] : null;
  const leadDescription = getLeadDescription(project);

  return (
    <>
      <Dialog open={open} onClose={onClose} maxWidth="lg" fullWidth PaperProps={{ sx: styles.paper }}>
        <DialogContent sx={styles.content}>
          <IconButton onClick={onClose} sx={styles.closeBtn}>
            <CloseRoundedIcon />
          </IconButton>
          {project.title.toLowerCase().includes("water can") && (
            <Chip 
              label="PATENT APPLIED (2024)" 
              sx={{ 
                backgroundColor: "#fef3c7", 
                color: "#92400e", 
                fontWeight: 900, 
                fontSize: "0.72rem", 
                letterSpacing: "0.05em",
                mb: 1.5
              }} 
            />
          )}
          <Typography sx={styles.title}>{project.title}</Typography>
          <Typography sx={styles.lead}>{leadDescription}</Typography>
          <Typography sx={styles.linksLabel}>Project Links</Typography>

          <Stack direction="row" spacing={1.5} flexWrap="wrap" useFlexGap sx={styles.links}>
            {project.github && (
              <Button component="a" href={project.github} target="_blank" rel="noreferrer" variant="contained" startIcon={<GitHubIcon fontSize="small" />} sx={styles.primaryBtn}>
                GitHub
              </Button>
            )}
            {project.live && (
              <Button component="a" href={project.live} target="_blank" rel="noreferrer" variant="outlined" startIcon={<LaunchRoundedIcon fontSize="small" />} sx={styles.secondaryBtn}>
                Live Server
              </Button>
            )}
          </Stack>

          <Box sx={styles.badges}>
            {project.tech.map((item) => (
              <Chip key={item} label={item} sx={styles.badge} />
            ))}
          </Box>

          {hasImages && (
            <Box sx={styles.carouselWrap}>
              <IconButton onClick={() => setImageIndex((v) => (v - 1 + project.images.length) % project.images.length)} sx={styles.arrowBtn}>
                <ArrowBackIosNewRoundedIcon />
              </IconButton>
              <Box component="button" type="button" onClick={() => setFullScreenImage(activeImage)} sx={styles.imageButton}>
                <Box component="img" src={activeImage} alt={project.title} loading="lazy" sx={styles.image} />
              </Box>
              <IconButton onClick={() => setImageIndex((v) => (v + 1) % project.images.length)} sx={styles.arrowBtn}>
                <ArrowForwardIosRoundedIcon />
              </IconButton>
            </Box>
          )}

          <Box sx={styles.columns}>
            <Box sx={styles.infoCard}>
              <Typography sx={styles.blockTitle}>Problem</Typography>
              <Typography sx={styles.paragraph}>{project.problem}</Typography>
            </Box>
            <Box sx={styles.infoCard}>
              <Typography sx={styles.blockTitle}>Solution</Typography>
              <Typography sx={styles.paragraph}>{project.solution}</Typography>
            </Box>
          </Box>

          <Box sx={styles.columns}>
            {project.keyFeatures.length > 0 && (
              <Box sx={styles.infoCard}>
                <Typography sx={styles.blockTitle}>Key Features</Typography>
                <Box component="ul" sx={styles.list}>
                  {project.keyFeatures.map((item) => (
                    <Typography component="li" key={item} sx={styles.listItem}>{item}</Typography>
                  ))}
                </Box>
              </Box>
            )}
            {project.systemDesign.length > 0 && (
              <Box sx={styles.infoCard}>
                <Typography sx={styles.blockTitle}>System Design</Typography>
                <Box component="ul" sx={styles.list}>
                  {project.systemDesign.map((item) => (
                    <Typography component="li" key={item} sx={styles.listItem}>{item}</Typography>
                  ))}
                </Box>
              </Box>
            )}
          </Box>
        </DialogContent>
      </Dialog>

      <Dialog open={Boolean(fullScreenImage)} onClose={() => setFullScreenImage(null)} maxWidth="xl" fullWidth PaperProps={{ sx: styles.fullPaper }}>
        <DialogContent sx={styles.fullContent}>
          <IconButton onClick={() => setFullScreenImage(null)} sx={styles.fullClose}>
            <CloseRoundedIcon />
          </IconButton>
          {fullScreenImage && <Box component="img" src={fullScreenImage} alt={project.title} sx={styles.fullImage} />}
        </DialogContent>
      </Dialog>
    </>
  );
};

const styles = {
  paper: { borderRadius: 5, backgroundColor: "#f8fafc" },
  content: { position: "relative", padding: { xs: 2.5, md: 4 } },
  closeBtn: { position: "absolute", top: 14, right: 14, backgroundColor: "#fff" },
  title: { fontSize: { xs: "1.6rem", md: "2.2rem" }, fontWeight: 800, color: "#0f172a", paddingRight: 4 },
  lead: {
    color: "#334155",
    marginTop: 1.6,
    fontSize: { xs: "1rem", md: "1.05rem" },
    lineHeight: 1.9,
    maxWidth: 980,
  },
  paragraph: { color: "#475569", marginTop: 1.5 },
  linksLabel: {
    marginTop: 2.2,
    color: "#2563eb",
    fontSize: "0.78rem",
    fontWeight: 800,
    letterSpacing: "0.08em",
    textTransform: "uppercase",
  },
  links: { marginTop: 2.5 },
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
  badges: { display: "flex", flexWrap: "wrap", gap: 1, marginTop: 2.5 },
  badge: { backgroundColor: "#eff6ff", color: "#1d4ed8", border: "1px solid #dbeafe" },
  carouselWrap: { marginTop: 3, display: "grid", gridTemplateColumns: "44px 1fr 44px", gap: 1, alignItems: "center" },
  arrowBtn: { border: "1px solid #cbd5e1", backgroundColor: "#fff" },
  imageButton: { border: 0, padding: 0, background: "transparent", cursor: "zoom-in", borderRadius: 3, overflow: "hidden" },
  image: { width: "100%", maxHeight: 420, objectFit: "contain", backgroundColor: "#0f172a" },
  columns: { marginTop: 3, display: "grid", gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" }, gap: 2.5 },
  infoCard: {
    backgroundColor: "#ffffff",
    border: "1px solid #dbeafe",
    borderRadius: "14px",
    padding: "1rem 1rem 0.5rem",
  },
  block: { marginTop: 3 },
  blockTitle: { color: "#0f172a", fontWeight: 800, fontSize: "0.96rem", textTransform: "uppercase", letterSpacing: "0.05em" },
  list: { margin: "0.9rem 0 0", paddingLeft: "1.2rem" },
  listItem: { color: "#475569", marginBottom: 0.8 },
  fullPaper: { borderRadius: 3, backgroundColor: "#0f172a" },
  fullContent: { padding: 1.5, position: "relative" },
  fullClose: { position: "absolute", right: 16, top: 16, backgroundColor: "rgba(255,255,255,0.9)", zIndex: 3 },
  fullImage: { width: "100%", maxHeight: "85vh", objectFit: "contain" },
};

export default ProjectModal;
