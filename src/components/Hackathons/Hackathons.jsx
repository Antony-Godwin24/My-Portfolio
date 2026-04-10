import React, { useState } from "react";
import { Box, Button, Chip, Dialog, DialogContent, IconButton, Typography } from "@mui/material";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";

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
      <Typography sx={styles.eyebrow}>Hackathons</Typography>
      <Typography sx={styles.title}>Proof of fast execution under constraints.</Typography>
      <Box sx={styles.grid}>
        {hackathons.map((hack) => (
          <Box key={hack.slug} sx={styles.card}>
            <Typography sx={styles.event}>{hack.slug === "aura-26" ? "AURA'24" : hack.event}</Typography>
            <Chip label={hack.slug === "aura-26" ? "Third Prize" : (hack.achievement || "Finalist")} sx={styles.prize} />
            <Typography sx={styles.meta}>{hack.slug === "aura-26" ? "Technical Hackathon" : hack.level}</Typography>
            <Typography sx={styles.meta}>{hack.slug === "aura-26" ? "2024" : hack.date}</Typography>
            {(hack.slug === "aura-26" || hack.project) && (
              <Typography sx={styles.project}>
                {hack.slug === "aura-26" ? "Smart QR Water Can Monitoring System" : hack.project}
              </Typography>
            )}
            <Typography sx={styles.summary}>
              {hack.slug === "aura-26"
                ? "Patent applied for in 2024. Secured third prize for the Smart QR Water Can Monitoring System and presented the public-health impact model."
                : hack.summary}
            </Typography>
            {hack.media?.length > 0 && (
              <Button onClick={() => openMedia(hack.media)} variant="outlined" sx={styles.previewBtn}>
                {hack.media.length > 1 ? `View Media (${hack.media.length})` : "View Certificate"}
              </Button>
            )}
          </Box>
        ))}
      </Box>

      <Dialog open={Boolean(activeMedia)} onClose={closeMedia} maxWidth="lg" fullWidth PaperProps={{ sx: styles.dialogPaper }}>
        <DialogContent sx={styles.dialogContent}>
          <IconButton onClick={closeMedia} sx={styles.close}>
            <CloseRoundedIcon />
          </IconButton>
          {activeMedia && <Box component="img" src={activeMedia.url} alt="Hackathon Certificate" sx={styles.image} />}
          {activeMediaSet.length > 1 && (
            <Box sx={styles.thumbs}>
              {activeMediaSet.map((item, index) => (
                <Box
                  key={item.url}
                  component="button"
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  sx={{
                    ...styles.thumbButton,
                    ...(index === activeIndex ? styles.thumbActive : {}),
                  }}
                >
                  <Box component="img" src={item.url} alt={`Media ${index + 1}`} sx={styles.thumbImage} />
                </Box>
              ))}
            </Box>
          )}
        </DialogContent>
      </Dialog>
    </Box>
  );
};

const styles = {
  section: { maxWidth: 1280, margin: "0 auto", padding: { xs: "0 1.25rem 5rem", md: "0 2rem 7rem" } },
  eyebrow: { color: "#2563eb", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", fontSize: "0.82rem" },
  title: { mt: 1.5, mb: 4, fontSize: { xs: "1.9rem", md: "2.8rem" }, fontWeight: 800, color: "#0f172a" },
  grid: { display: "grid", gridTemplateColumns: { xs: "1fr", md: "repeat(3, minmax(0, 1fr))" }, gap: 2.5 },
  card: {
    borderRadius: 5,
    border: "1px solid #dbe3ee",
    backgroundColor: "#ffffff",
    padding: { xs: 2.5, md: 3.2 },
    minHeight: 280,
    display: "flex",
    flexDirection: "column",
    gap: 1.2,
    transition: "transform 180ms ease, box-shadow 180ms ease",
    "&:hover": { transform: "translateY(-3px) scale(1.01)", boxShadow: "0 24px 45px rgba(15, 23, 42, 0.09)" },
  },
  event: { fontWeight: 800, fontSize: "1.3rem", color: "#0f172a" },
  prize: { alignSelf: "start", backgroundColor: "#2563eb", color: "#fff", fontWeight: 700 },
  meta: { color: "#64748b", fontSize: "0.94rem" },
  summary: { color: "#475569", marginTop: 1 },
  project: { color: "#1e293b", fontWeight: 700, marginTop: 0.4 },
  previewBtn: {
    marginTop: "auto",
    alignSelf: "flex-start",
    borderColor: "#cbd5e1",
    color: "#0f172a",
    "&:hover": { backgroundColor: "#eff6ff", borderColor: "#2563eb", transform: "scale(1.02)" },
  },
  dialogPaper: { borderRadius: 3, backgroundColor: "#0f172a" },
  dialogContent: { position: "relative", padding: 1.5 },
  close: { position: "absolute", right: 16, top: 16, zIndex: 2, backgroundColor: "rgba(255,255,255,0.9)" },
  image: { width: "100%", maxHeight: "85vh", objectFit: "contain" },
  thumbs: { marginTop: 1.2, display: "flex", gap: 1, flexWrap: "wrap" },
  thumbButton: { border: "1px solid #64748b", padding: 0, background: "transparent", borderRadius: "8px", overflow: "hidden", cursor: "pointer" },
  thumbActive: { borderColor: "#93c5fd" },
  thumbImage: { width: 110, height: 72, objectFit: "cover" },
};

export default Hackathons;
