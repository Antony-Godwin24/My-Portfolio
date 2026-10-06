import React, { useState } from "react";
import { Box, Button, Chip, Dialog, DialogContent, IconButton, Stack, Typography } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LaunchRoundedIcon from "@mui/icons-material/LaunchRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";

// Project accent colors
const projectColors = {
  "claridux": "#e84c2b",
  "internship-recommendation-engine": "#2563eb",
  "smart-water-can": "#00a86b",
};

const projectDateRanges = {
  "claridux": "Sep 2025 – Apr 2026",
  "internship-recommendation-engine": "Sep 2025 – Nov 2025",
  "smart-water-can": "Jul 2024 – Dec 2024",
};

const ProjectCard = ({ project, onClick, index }) => {
  const color = projectColors[project.slug] || "#e84c2b";
  const desc = project.solution || project.summary || project.problem || "";

  return (
    <Box
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onClick();
        }
      }}
      sx={{ ...styles.card, borderTop: `3px solid ${color}` }}
    >
      {/* Top Header Row with Index & Badges */}
      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", mb: 1 }}>
        <Typography sx={{ ...styles.cardIndex, color }}>
          0{index + 1}
        </Typography>
        <Stack direction="row" spacing={1} flexWrap="wrap">
          {project.isConcept && (
            <Chip
              label="PROPOSED CONCEPT"
              size="small"
              sx={styles.conceptChip}
            />
          )}
          {project.patentApplied && (
            <Chip
              label="PATENT APPLIED (2024)"
              size="small"
              sx={styles.patentChip}
            />
          )}
        </Stack>
      </Box>

      <Typography sx={styles.cardTitle}>{project.title}</Typography>

      {/* Date */}
      <Typography sx={styles.dateRange}>
        {project.dateRange || projectDateRanges[project.slug] || ""}
      </Typography>

      <Typography sx={styles.cardDesc}>
        {desc}
      </Typography>

      {/* Tech stack */}
      {project.tech?.length > 0 && (
        <Stack direction="row" flexWrap="wrap" gap={0.8} sx={{ mt: 2, mb: 2.5 }}>
          {project.tech.slice(0, 5).map((t) => (
            <Chip key={t} label={t} size="small" sx={{ ...styles.techChip, "&:hover": { backgroundColor: color, color: "#fff", borderColor: color } }} />
          ))}
        </Stack>
      )}

      {/* Actions footer */}
      <Box sx={{ mt: "auto", pt: 1, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <Stack direction="row" spacing={1.5} alignItems="center" flexWrap="wrap" gap={1}>
          {project.github && (
            <Button
              component="a"
              href={project.github}
              target="_blank"
              rel="noreferrer"
              onClick={(e) => e.stopPropagation()}
              size="small"
              variant="contained"
              startIcon={<GitHubIcon fontSize="small" />}
              sx={{ ...styles.githubBtn, backgroundColor: color, "&:hover": { backgroundColor: color, filter: "brightness(0.9)" } }}
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
              onClick={(e) => e.stopPropagation()}
              size="small"
              variant="outlined"
              startIcon={<LaunchRoundedIcon fontSize="small" />}
              sx={{ ...styles.liveBtn, borderColor: color, color, "&:hover": { backgroundColor: `${color}10`, borderColor: color } }}
            >
              Live
            </Button>
          )}
        </Stack>

        <Typography sx={{ ...styles.cardHint, color }}>
          Click to view details →
        </Typography>
      </Box>
    </Box>
  );
};

const ProjectModal = ({ project, open, onClose }) => {
  if (!project) return null;
  const color = projectColors[project.slug] || "#e84c2b";

  return (
    <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth PaperProps={{ sx: styles.dialogPaper }}>
      <DialogContent sx={styles.dialogContent}>
        <IconButton onClick={onClose} sx={styles.closeBtn} aria-label="Close">
          <CloseRoundedIcon />
        </IconButton>

        <Box sx={{ borderBottom: "1px solid #e8e8e8", pb: 3, mb: 3 }}>
          <Stack direction="row" spacing={1} flexWrap="wrap" sx={{ mb: 1 }}>
            {project.isConcept && (
              <Chip label="PROPOSED CONCEPT / PATENT WORK" size="small" sx={styles.conceptChip} />
            )}
            {project.patentApplied && (
              <Chip label="PATENT APPLICATION FILED (NOV 2024)" size="small" sx={styles.patentChip} />
            )}
          </Stack>
          <Typography sx={{ ...styles.modalTitle, color: "#1a1a1a" }}>{project.title}</Typography>
          <Typography sx={{ color, fontWeight: 700, fontSize: "0.9rem", mt: 0.5 }}>
            {project.dateRange || projectDateRanges[project.slug] || ""}
          </Typography>
          {project.isConcept && (
            <Typography sx={{ mt: 1, fontSize: "0.85rem", color: "#64748b", fontStyle: "italic" }}>
              * Proposed architecture &amp; research initiative — conceived as a patent application and symposium presentation rather than an actively deployed product.
            </Typography>
          )}
        </Box>

        {project.problem && (
          <Box sx={{ mb: 3 }}>
            <Typography sx={styles.modalLabel}>Problem</Typography>
            <Typography sx={styles.modalText}>{project.problem}</Typography>
          </Box>
        )}

        {project.solution && (
          <Box sx={{ mb: 3 }}>
            <Typography sx={styles.modalLabel}>Solution</Typography>
            <Typography sx={styles.modalText}>{project.solution}</Typography>
          </Box>
        )}

        {project.keyFeatures?.length > 0 && (
          <Box sx={{ mb: 3 }}>
            <Typography sx={styles.modalLabel}>Key Features</Typography>
            <Box component="ul" sx={{ pl: 2, m: 0 }}>
              {project.keyFeatures.map((f) => (
                <Typography component="li" key={f} sx={{ ...styles.modalText, mb: 0.5 }}>{f}</Typography>
              ))}
            </Box>
          </Box>
        )}

        {project.tech?.length > 0 && (
          <Box sx={{ mb: 3 }}>
            <Typography sx={styles.modalLabel}>Technologies</Typography>
            <Stack direction="row" flexWrap="wrap" gap={1} sx={{ mt: 1 }}>
              {project.tech.map((t) => (
                <Chip key={t} label={t} size="small" sx={{ backgroundColor: `${color}15`, color, borderColor: `${color}30`, border: "1px solid", fontWeight: 700 }} />
              ))}
            </Stack>
          </Box>
        )}

        {/* Links */}
        <Stack direction="row" spacing={2} flexWrap="wrap" gap={1.5}>
          {project.github && (
            <Button component="a" href={project.github} target="_blank" rel="noreferrer"
              variant="contained" startIcon={<GitHubIcon />}
              sx={{ backgroundColor: color, "&:hover": { backgroundColor: color, filter: "brightness(0.9)" } }}>
              GitHub
            </Button>
          )}
          {project.live && (
            <Button component="a" href={project.live} target="_blank" rel="noreferrer"
              variant="outlined" startIcon={<LaunchRoundedIcon />}
              sx={{ borderColor: color, color, "&:hover": { backgroundColor: `${color}10` } }}>
              Live Site
            </Button>
          )}
        </Stack>

        {/* Images */}
        {project.images?.length > 0 && (
          <Box sx={{ mt: 4, display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 2 }}>
            {project.images.map((img, i) => (
              <Box key={i} component="img" src={img} alt={`${project.title} screenshot ${i + 1}`}
                sx={{ width: "100%", borderRadius: "10px", border: "1px solid #e8e8e8", objectFit: "cover", maxHeight: 200 }} />
            ))}
          </Box>
        )}
      </DialogContent>
    </Dialog>
  );
};

const Projects = ({ projects }) => {
  const [selected, setSelected] = useState(null);

  return (
    <Box id="projects" component="section" sx={styles.section}>
      <Box sx={styles.container}>
        {/* Header */}
        <Box sx={styles.header}>
          <span className="section-eyebrow">Projects</span>
          <Typography sx={styles.title}>What I've Built</Typography>
          <Typography sx={styles.subtitle}>
            Projects developed through hackathons, internships, and independent work.
          </Typography>
        </Box>

        <Box sx={styles.grid}>
          {projects.map((p, i) => (
            <ProjectCard key={p.slug} project={p} index={i} onClick={() => setSelected(p)} />
          ))}
        </Box>
      </Box>

      <ProjectModal project={selected} open={Boolean(selected)} onClose={() => setSelected(null)} />
    </Box>
  );
};

const styles = {
  section: {
    backgroundColor: "#ffffff",
    py: { xs: 8, md: 12 },
  },
  container: {
    maxWidth: 1200,
    margin: "0 auto",
    px: { xs: 2.5, md: 4 },
  },
  header: {
    mb: 6,
    maxWidth: 560,
  },
  title: {
    fontSize: { xs: "2rem", md: "2.8rem" },
    fontWeight: 800,
    color: "#1a1a1a",
    letterSpacing: "-0.02em",
    lineHeight: 1.1,
    mt: 0.5,
  },
  subtitle: {
    mt: 1.5,
    fontSize: "1rem",
    color: "#666666",
    lineHeight: 1.7,
  },
  grid: {
    display: "grid",
    gridTemplateColumns: { xs: "1fr", md: "repeat(3, 1fr)" },
    gap: 3,
  },
  card: {
    backgroundColor: "#ffffff",
    border: "1px solid #e8e8e8",
    borderRadius: "16px",
    p: { xs: 2.5, md: 3 },
    display: "flex",
    flexDirection: "column",
    minHeight: 340,
    cursor: "pointer",
    outline: "none",
    transition: "transform 180ms ease, box-shadow 180ms ease, border-color 180ms ease",
    "&:hover": {
      transform: "translateY(-5px)",
      boxShadow: "0 20px 40px rgba(0,0,0,0.08)",
      borderColor: "#d1d5db",
    },
    "&:focus-visible": {
      boxShadow: "0 0 0 3px rgba(232,76,43,0.35)",
    },
  },
  cardIndex: {
    fontSize: "2.4rem",
    fontWeight: 900,
    lineHeight: 1,
    opacity: 0.15,
  },
  conceptChip: {
    backgroundColor: "#eff6ff",
    color: "#1d4ed8",
    border: "1px solid #bfdbfe",
    fontWeight: 800,
    fontSize: "0.68rem",
    letterSpacing: "0.05em",
    borderRadius: "6px",
  },
  patentChip: {
    backgroundColor: "#fffbeb",
    color: "#92400e",
    border: "1px solid #fde68a",
    fontWeight: 800,
    fontSize: "0.68rem",
    letterSpacing: "0.05em",
    borderRadius: "6px",
  },
  cardHint: {
    fontSize: "0.78rem",
    fontWeight: 700,
    letterSpacing: "0.02em",
  },
  cardTitle: {
    fontWeight: 800,
    fontSize: { xs: "1rem", md: "1.1rem" },
    color: "#1a1a1a",
    lineHeight: 1.3,
    mb: 0.5,
  },
  dateRange: {
    fontSize: "0.8rem",
    color: "#888888",
    fontWeight: 600,
    mb: 1.5,
  },
  cardDesc: {
    fontSize: "0.88rem",
    color: "#555555",
    lineHeight: 1.65,
    display: "-webkit-box",
    WebkitLineClamp: 4,
    WebkitBoxOrient: "vertical",
    overflow: "hidden",
  },
  techChip: {
    backgroundColor: "#f5f5f5",
    color: "#444444",
    border: "1px solid #e0e0e0",
    fontWeight: 600,
    fontSize: "0.75rem",
    borderRadius: "6px",
    transition: "all 160ms ease",
  },
  githubBtn: {
    borderRadius: "8px",
    boxShadow: "none",
    color: "#ffffff",
    fontSize: "0.82rem",
    "&:hover": { boxShadow: "none" },
  },
  liveBtn: {
    borderRadius: "8px",
    fontSize: "0.82rem",
    boxShadow: "none",
  },
  detailsBtn: {
    fontSize: "0.82rem",
    fontWeight: 700,
    borderRadius: "8px",
    textTransform: "none",
    "&:hover": { backgroundColor: "transparent", opacity: 0.8 },
  },
  dialogPaper: {
    borderRadius: "16px",
    maxHeight: "90vh",
  },
  dialogContent: {
    p: { xs: 3, md: 4 },
    position: "relative",
  },
  closeBtn: {
    position: "absolute",
    right: 16,
    top: 16,
    zIndex: 2,
    backgroundColor: "#f5f5f5",
    "&:hover": { backgroundColor: "#e8e8e8" },
  },
  modalTitle: {
    fontWeight: 800,
    fontSize: { xs: "1.3rem", md: "1.6rem" },
    lineHeight: 1.2,
    mt: 1,
  },
  modalLabel: {
    fontWeight: 800,
    fontSize: "0.78rem",
    textTransform: "uppercase",
    letterSpacing: "0.1em",
    color: "#888888",
    mb: 1,
  },
  modalText: {
    color: "#444444",
    fontSize: "0.95rem",
    lineHeight: 1.7,
  },
};

export default Projects;
