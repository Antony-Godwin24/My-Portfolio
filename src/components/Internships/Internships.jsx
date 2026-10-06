import React from "react";
import { Box, Chip, Link, Stack, Typography } from "@mui/material";
import WorkOutlineRoundedIcon from "@mui/icons-material/WorkOutlineRounded";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import OpenInNewRoundedIcon from "@mui/icons-material/OpenInNewRounded";

// Accent colors per internship (oldest → most recent order)
const accentColors = {
  "zoho": { color: "#e84c2b", bg: "#fef0ed", label: "Jul 2025 – Aug 2025" },
  "amizhth-techno-solutions": { color: "#2563eb", bg: "#eff6ff", label: "Sep 2025 – Dec 2025" },
  "techpuram": { color: "#00a86b", bg: "#f0fdf4", label: "Apr 2026 – Jun 2026" },
};

const Internships = ({ internships }) => (
  <Box id="experience" component="section" sx={styles.section}>
    <Box sx={styles.container}>
      {/* Header */}
      <Box sx={styles.header}>
        <span className="section-eyebrow">Experience</span>
        <Typography sx={styles.title}>Internship Journey</Typography>
        <Typography sx={styles.subtitle}>
          Real-world software development experience across product companies and startups.
        </Typography>
      </Box>

      {/* Timeline */}
      <Box sx={styles.timeline}>
        {internships.map((intern, index) => {
          const accent = accentColors[intern.slug] || { color: "#555", bg: "#f5f5f5" };
          return (
            <Box key={intern.slug} sx={styles.timelineItem}>
              {/* Timeline line + dot */}
              <Box sx={styles.timelineLeft}>
                <Box sx={{ ...styles.timelineDot, backgroundColor: accent.color, boxShadow: `0 0 0 4px ${accent.bg}` }} />
                {index < internships.length - 1 && <Box sx={styles.timelineLine} />}
              </Box>

              {/* Card */}
              <Box sx={styles.card}>
                {/* Top colored strip */}
                <Box sx={{ ...styles.cardStrip, backgroundColor: accent.color }} />

                <Box sx={styles.cardContent}>
                  {/* Header row */}
                  <Box sx={styles.cardHeader}>
                    <Box sx={{ flex: 1 }}>
                      <Stack direction="row" spacing={1} alignItems="center" flexWrap="wrap" gap={1}>
                        <Typography sx={styles.company}>{intern.company}</Typography>
                        <Chip
                          label={`#${index + 1}`}
                          size="small"
                          sx={{ ...styles.indexChip, backgroundColor: accent.bg, color: accent.color, borderColor: `${accent.color}30` }}
                        />
                      </Stack>
                      <Typography sx={{ ...styles.role, color: accent.color }}>{intern.role}</Typography>
                    </Box>
                    <Box sx={styles.durationBadge}>
                      <CalendarTodayOutlinedIcon sx={{ fontSize: 13, color: "#888" }} />
                      <Typography sx={styles.duration}>{intern.duration}</Typography>
                    </Box>
                  </Box>

                  {/* Highlights */}
                  {intern.highlights?.length > 0 && (
                    <Box component="ul" sx={styles.list}>
                      {intern.highlights.map((h) => (
                        <Box component="li" key={h} sx={styles.listItem}>
                          <Box sx={{ ...styles.bullet, backgroundColor: accent.color }} />
                          <Typography sx={styles.listText}>{h}</Typography>
                        </Box>
                      ))}
                    </Box>
                  )}

                  {/* Tech tags */}
                  {intern.tech?.length > 0 && (
                    <Stack direction="row" flexWrap="wrap" gap={1} sx={{ mt: 2 }}>
                      {intern.tech.map((t) => (
                        <Chip
                          key={t}
                          label={t}
                          size="small"
                          sx={styles.techChip}
                        />
                      ))}
                    </Stack>
                  )}

                  {/* Documents */}
                  {intern.documents?.length > 0 && (
                    <Stack direction="row" gap={1.5} flexWrap="wrap" sx={{ mt: 2 }}>
                      {intern.documents.map((doc) => (
                        <Link
                          key={doc.url}
                          href={doc.url}
                          target="_blank"
                          rel="noreferrer"
                          sx={{ ...styles.docLink, color: accent.color }}
                        >
                          {intern.slug === "zoho" ? "Completion Certificate" : doc.label}
                          <OpenInNewRoundedIcon sx={{ fontSize: 13, ml: 0.4 }} />
                        </Link>
                      ))}
                    </Stack>
                  )}
                </Box>
              </Box>
            </Box>
          );
        })}
      </Box>
    </Box>
  </Box>
);

const styles = {
  section: {
    backgroundColor: "#f7f8fa",
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
  timeline: {
    display: "flex",
    flexDirection: "column",
    gap: 0,
  },
  timelineItem: {
    display: "flex",
    gap: { xs: 2.5, md: 3.5 },
  },
  timelineLeft: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    flexShrink: 0,
    pt: 3.5,
  },
  timelineDot: {
    width: 16,
    height: 16,
    borderRadius: "50%",
    flexShrink: 0,
    zIndex: 1,
  },
  timelineLine: {
    flex: 1,
    width: 2,
    backgroundColor: "#e8e8e8",
    mt: 1,
    mb: 0,
    minHeight: 40,
  },
  card: {
    flex: 1,
    backgroundColor: "#ffffff",
    border: "1px solid #e8e8e8",
    borderRadius: "16px",
    overflow: "hidden",
    mb: 3,
    transition: "transform 160ms ease, box-shadow 160ms ease",
    "&:hover": {
      transform: "translateY(-3px)",
      boxShadow: "0 16px 32px rgba(0,0,0,0.07)",
    },
  },
  cardStrip: {
    height: 3,
  },
  cardContent: {
    p: { xs: 2.5, md: 3 },
  },
  cardHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    gap: 2,
    flexWrap: "wrap",
    mb: 2,
  },
  company: {
    fontWeight: 800,
    fontSize: { xs: "1.05rem", md: "1.2rem" },
    color: "#1a1a1a",
    lineHeight: 1.2,
  },
  indexChip: {
    fontSize: "0.72rem",
    fontWeight: 800,
    height: 20,
    border: "1px solid",
  },
  role: {
    fontWeight: 700,
    fontSize: "0.9rem",
    mt: 0.4,
  },
  durationBadge: {
    display: "flex",
    alignItems: "center",
    gap: 0.6,
    backgroundColor: "#f5f5f5",
    border: "1px solid #e8e8e8",
    borderRadius: "8px",
    px: 1.5,
    py: 0.6,
    flexShrink: 0,
  },
  duration: {
    fontSize: "0.8rem",
    color: "#666666",
    fontWeight: 600,
    whiteSpace: "nowrap",
  },
  list: {
    listStyle: "none",
    p: 0,
    m: 0,
    display: "flex",
    flexDirection: "column",
    gap: 1,
  },
  listItem: {
    display: "flex",
    alignItems: "flex-start",
    gap: 1.2,
  },
  bullet: {
    width: 6,
    height: 6,
    borderRadius: "50%",
    flexShrink: 0,
    mt: 0.7,
  },
  listText: {
    fontSize: "0.9rem",
    color: "#444444",
    lineHeight: 1.6,
  },
  techChip: {
    backgroundColor: "#f5f5f5",
    color: "#444444",
    border: "1px solid #e0e0e0",
    fontWeight: 600,
    fontSize: "0.78rem",
    borderRadius: "6px",
  },
  docLink: {
    display: "inline-flex",
    alignItems: "center",
    fontSize: "0.85rem",
    fontWeight: 700,
    textDecoration: "none",
    "&:hover": {
      textDecoration: "underline",
    },
  },
};

export default Internships;
