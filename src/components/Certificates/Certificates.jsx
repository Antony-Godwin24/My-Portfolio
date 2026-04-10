import React, { useState } from "react";
import { Box, Button, Dialog, DialogContent, IconButton, Typography } from "@mui/material";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import OpenInNewRoundedIcon from "@mui/icons-material/OpenInNewRounded";

const Certificates = ({ certificates }) => {
  const [activeImage, setActiveImage] = useState(null);

  return (
    <Box id="certificates" component="section" sx={styles.section}>
      <Typography sx={styles.eyebrow}>Certificates</Typography>
      <Typography sx={styles.title}>Validated learning and applied foundations.</Typography>
      <Box sx={styles.grid}>
        {certificates.map((cert) => {
          const media = cert.media?.[0];
          const isPdf = media?.type === "pdf";
          return (
            <Box key={cert.slug} sx={styles.card}>
              <Typography sx={styles.cardTitle}>{cert.title}</Typography>
              <Typography sx={styles.meta}>{cert.issuedBy}</Typography>
              <Typography sx={styles.meta}>{cert.date}</Typography>
              <Typography sx={styles.description}>{cert.summary}</Typography>
              {media && isPdf && (
                <Button component="a" href={media.url} target="_blank" rel="noreferrer" variant="outlined" endIcon={<OpenInNewRoundedIcon />} sx={styles.action}>
                  Open PDF
                </Button>
              )}
              {media && !isPdf && (
                <Button variant="outlined" onClick={() => setActiveImage(media.url)} sx={styles.action}>
                  Preview
                </Button>
              )}
            </Box>
          );
        })}
      </Box>

      <Dialog open={Boolean(activeImage)} onClose={() => setActiveImage(null)} maxWidth="lg" fullWidth PaperProps={{ sx: styles.dialogPaper }}>
        <DialogContent sx={styles.dialogContent}>
          <IconButton onClick={() => setActiveImage(null)} sx={styles.close}>
            <CloseRoundedIcon />
          </IconButton>
          {activeImage && <Box component="img" src={activeImage} alt="Certificate" sx={styles.image} />}
        </DialogContent>
      </Dialog>
    </Box>
  );
};

const styles = {
  section: { maxWidth: 1280, margin: "0 auto", padding: { xs: "0 1.25rem 5rem", md: "0 2rem 7rem" } },
  eyebrow: { color: "#2563eb", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", fontSize: "0.82rem" },
  title: { mt: 1.5, mb: 4, fontSize: { xs: "1.9rem", md: "2.8rem" }, fontWeight: 800, color: "#0f172a" },
  grid: { display: "grid", gridTemplateColumns: { xs: "1fr", md: "repeat(2, minmax(0, 1fr))" }, gap: 2.5 },
  card: {
    borderRadius: 5,
    border: "1px solid #dbe3ee",
    backgroundColor: "#ffffff",
    padding: { xs: 2.5, md: 3.2 },
    transition: "transform 180ms ease, box-shadow 180ms ease",
    "&:hover": { transform: "translateY(-3px) scale(1.01)", boxShadow: "0 24px 45px rgba(15, 23, 42, 0.09)" },
  },
  cardTitle: { fontWeight: 800, fontSize: "1.2rem", color: "#0f172a" },
  meta: { marginTop: 0.6, color: "#64748b" },
  description: { marginTop: 1.2, color: "#475569" },
  action: {
    marginTop: 2,
    borderColor: "#cbd5e1",
    color: "#0f172a",
    "&:hover": { backgroundColor: "#eff6ff", borderColor: "#2563eb", transform: "scale(1.02)" },
  },
  dialogPaper: { borderRadius: 3, backgroundColor: "#0f172a" },
  dialogContent: { position: "relative", padding: 1.5 },
  close: { position: "absolute", right: 16, top: 16, zIndex: 2, backgroundColor: "rgba(255,255,255,0.9)" },
  image: { width: "100%", maxHeight: "85vh", objectFit: "contain" },
};

export default Certificates;
