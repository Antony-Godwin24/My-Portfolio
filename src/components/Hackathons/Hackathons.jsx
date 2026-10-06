import React, { useState } from "react";
import { Box, Button, Chip, Dialog, DialogContent, IconButton, Stack, Typography } from "@mui/material";
import EmojiEventsOutlinedIcon from "@mui/icons-material/EmojiEventsOutlined";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";

// Chronological order: AURA'24 → TECHELITE'26 → ZYRON'26
const hackathonColors = {
  "aura-24": { color: "#00a86b", bg: "#f0fdf4", prize: "3rd Place" },
  "techelite-26": { color: "#2563eb", bg: "#eff6ff", prize: "1st Place 🏆" },
  "zyron-26": { color: "#e84c2b", bg: "#fef0ed", prize: "1st Place 🏆" },
};

const Hackathons = ({ hackathons }) => {
  const [activeMediaSet, setActiveMediaSet] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);

  const openMedia = (items) => {
    setActiveMediaSet(items || []);
    setActiveIndex(0);
  };
  const closeMedia = () => {
    setActiveMediaSet([]);
    setActiveIndex(0);
  };
  const activeMedia = activeMediaSet[activeIndex];

  return (
    <Box id="hackathons" component="section" sx={styles.section}>
      <Box sx={styles.container}>
        {/* Header */}
        <Box sx={styles.header}>
          <span className="section-eyebrow">Hackathons & Achievements</span>
          <Typography sx={styles.title}>Competition Record</Typography>
          <Typography sx={styles.subtitle}>
            National-level hackathon wins and a patent application — proof of innovation under pressure.
          </Typography>
        </Box>

        {/* Patent banner */}
        <Box sx={styles.patentBanner}>
          <Box sx={styles.patentDot} />
          <Box>
            <Typography sx={styles.patentTitle}>Patent Application Filed — Nov 2024</Typography>
            <Typography sx={styles.patentDesc}>
              "A System for Enhancing Quality of Water Can through QR Code" — Filed based on the Smart QR Water Can Monitoring System project.
            </Typography>
          </Box>
        </Box>

        {/* Cards */}
        <Box sx={styles.grid}>
          {hackathons.map((hack, index) => {
            const hc = hackathonColors[hack.slug] || { color: "#e84c2b", bg: "#fef0ed", prize: hack.achievement };
            const displayEvent = hack.event || hack.slug;
            return (
              <Box key={hack.slug} sx={{ ...styles.card, borderTop: `3px solid ${hc.color}` }}>
                {/* Prize chip + icon */}
                <Box sx={styles.cardTop}>
                  <Box sx={{ ...styles.iconBox, backgroundColor: hc.bg }}>
                    <EmojiEventsOutlinedIcon sx={{ color: hc.color, fontSize: 22 }} />
                  </Box>
                  <Chip
                    label={hack.achievement || hc.prize}
                    sx={{ ...styles.prizeChip, backgroundColor: hc.bg, color: hc.color, borderColor: `${hc.color}30` }}
                  />
                </Box>

                <Typography sx={styles.eventName}>{displayEvent}</Typography>

                {/* Meta */}
                <Stack spacing={0.8} sx={{ mt: 1 }}>
                  {hack.level && (
                    <Box sx={styles.metaRow}>
                      <Box sx={{ width: 6, height: 6, borderRadius: "50%", backgroundColor: hc.color, flexShrink: 0, mt: 0.3 }} />
                      <Typography sx={styles.metaText}>{hack.level}</Typography>
                    </Box>
                  )}
                  {hack.organizedBy && (
                    <Box sx={styles.metaRow}>
                      <LocationOnOutlinedIcon sx={{ fontSize: 14, color: "#888", flexShrink: 0 }} />
                      <Typography sx={styles.metaText}>{hack.organizedBy}</Typography>
                    </Box>
                  )}
                  {hack.date && (
                    <Box sx={styles.metaRow}>
                      <CalendarTodayOutlinedIcon sx={{ fontSize: 14, color: "#888", flexShrink: 0 }} />
                      <Typography sx={styles.metaText}>{hack.date}</Typography>
                    </Box>
                  )}
                </Stack>

                {hack.project && (
                  <Typography sx={styles.project}>
                    Project: <strong>{hack.project}</strong>
                  </Typography>
                )}

                {hack.summary && (
                  <Typography sx={styles.summary}>{hack.summary}</Typography>
                )}

                {hack.media?.length > 0 && (
                  <Button
                    variant="outlined"
                    size="small"
                    onClick={() => openMedia(hack.media)}
                    sx={{ ...styles.mediaBtn, borderColor: hc.color, color: hc.color, "&:hover": { backgroundColor: hc.bg } }}
                  >
                    {hack.media.length > 1 ? `View Photos (${hack.media.length})` : "View Certificate"}
                  </Button>
                )}
              </Box>
            );
          })}
        </Box>
      </Box>

      {/* Media dialog */}
      <Dialog open={Boolean(activeMedia)} onClose={closeMedia} maxWidth="lg" fullWidth PaperProps={{ sx: styles.dialogPaper }}>
        <DialogContent sx={styles.dialogContent}>
          <IconButton onClick={closeMedia} sx={styles.closeBtn}>
            <CloseRoundedIcon />
          </IconButton>
          {activeMedia && (
            <Box component="img" src={activeMedia.url} alt="Hackathon photo" sx={styles.mediaImg} />
          )}
          {activeMediaSet.length > 1 && (
            <Stack direction="row" spacing={1} sx={{ mt: 1.5, flexWrap: "wrap", gap: 1 }}>
              {activeMediaSet.map((item, i) => (
                <Box
                  key={item.url}
                  component="button"
                  onClick={() => setActiveIndex(i)}
                  sx={{
                    border: i === activeIndex ? "2px solid #e84c2b" : "2px solid rgba(255,255,255,0.2)",
                    borderRadius: "8px",
                    overflow: "hidden",
                    cursor: "pointer",
                    background: "none",
                    p: 0,
                    transition: "border-color 160ms ease",
                  }}
                >
                  <Box component="img" src={item.url} alt={`Photo ${i + 1}`} sx={{ width: 80, height: 54, objectFit: "cover", display: "block" }} />
                </Box>
              ))}
            </Stack>
          )}
        </DialogContent>
      </Dialog>
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
    mb: 4,
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
  patentBanner: {
    display: "flex",
    alignItems: "flex-start",
    gap: 2,
    backgroundColor: "#fffbeb",
    border: "1px solid rgba(245,166,35,0.3)",
    borderLeft: "4px solid #f5a623",
    borderRadius: "12px",
    p: { xs: 2, md: 2.5 },
    mb: 5,
  },
  patentDot: {
    width: 36,
    height: 36,
    borderRadius: "50%",
    backgroundColor: "#f5a623",
    display: "grid",
    placeItems: "center",
    flexShrink: 0,
    fontSize: "1.1rem",
    "&::before": { content: '"⚡"' },
  },
  patentTitle: {
    fontWeight: 800,
    fontSize: "0.95rem",
    color: "#92400e",
  },
  patentDesc: {
    mt: 0.5,
    fontSize: "0.88rem",
    color: "#a16207",
    lineHeight: 1.6,
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
    gap: 1.5,
    transition: "transform 160ms ease, box-shadow 160ms ease",
    "&:hover": {
      transform: "translateY(-4px)",
      boxShadow: "0 20px 40px rgba(0,0,0,0.08)",
    },
  },
  cardTop: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  iconBox: {
    width: 44,
    height: 44,
    borderRadius: "10px",
    display: "grid",
    placeItems: "center",
  },
  prizeChip: {
    fontWeight: 800,
    fontSize: "0.78rem",
    border: "1px solid",
    borderRadius: "6px",
  },
  eventName: {
    fontWeight: 800,
    fontSize: { xs: "1.05rem", md: "1.15rem" },
    color: "#1a1a1a",
    lineHeight: 1.3,
  },
  metaRow: {
    display: "flex",
    alignItems: "flex-start",
    gap: 0.8,
  },
  metaText: {
    fontSize: "0.83rem",
    color: "#666666",
    lineHeight: 1.4,
  },
  project: {
    fontSize: "0.88rem",
    color: "#444444",
    fontWeight: 500,
    "& strong": { fontWeight: 700 },
  },
  summary: {
    fontSize: "0.85rem",
    color: "#555555",
    lineHeight: 1.6,
    flex: 1,
  },
  mediaBtn: {
    borderRadius: "8px",
    fontSize: "0.82rem",
    fontWeight: 700,
    alignSelf: "flex-start",
    mt: "auto",
    boxShadow: "none",
    transition: "all 160ms ease",
  },
  dialogPaper: {
    borderRadius: "16px",
    backgroundColor: "#1a1a1a",
  },
  dialogContent: {
    position: "relative",
    p: 2,
  },
  closeBtn: {
    position: "absolute",
    right: 16,
    top: 16,
    zIndex: 2,
    backgroundColor: "rgba(255,255,255,0.9)",
    "&:hover": { backgroundColor: "#ffffff" },
  },
  mediaImg: {
    width: "100%",
    maxHeight: "80vh",
    objectFit: "contain",
    borderRadius: "8px",
  },
};

export default Hackathons;
