import React, { useState } from "react";
import { Box, Button, Chip, Dialog, DialogContent, IconButton, Stack, Typography } from "@mui/material";
import VerifiedOutlinedIcon from "@mui/icons-material/VerifiedOutlined";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import OpenInNewRoundedIcon from "@mui/icons-material/OpenInNewRounded";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";

// Chronological order: Java Full Stack (Oct-Nov 2025) → AWS (Mar 2026)
const certStyles = {
  "java-full-stack": {
    color: "#f5a623",
    bg: "#fffbeb",
    borderColor: "rgba(245,166,35,0.3)",
    icon: "#f5a623",
  },
  "aws-cloud-practitioner": {
    color: "#e84c2b",
    bg: "#fef0ed",
    borderColor: "rgba(232,76,43,0.25)",
    icon: "#e84c2b",
  },
};

const Certificates = ({ certificates }) => {
  const [activeImage, setActiveImage] = useState(null);

  return (
    <Box id="certificates" component="section" sx={styles.section}>
      <Box sx={styles.container}>
        {/* Header */}
        <Box sx={styles.header}>
          <span className="section-eyebrow">Certificates</span>
          <Typography sx={styles.title}>Verified Learning</Typography>
          <Typography sx={styles.subtitle}>
            Industry-recognized certifications validating applied technical knowledge.
          </Typography>
        </Box>

        <Box sx={styles.grid}>
          {certificates.map((cert, index) => {
            const cs = certStyles[cert.slug] || certStyles["aws-cloud-practitioner"];
            const media = cert.media?.[0];
            const isPdf = media?.type === "pdf";
            const isImage = media?.type === "image";

            return (
              <Box key={cert.slug} sx={{ ...styles.card, borderLeft: `4px solid ${cs.color}` }}>
                {/* Icon + number */}
                <Box sx={styles.cardTop}>
                  <Box sx={{ ...styles.iconBox, backgroundColor: cs.bg, border: `1px solid ${cs.borderColor}` }}>
                    <VerifiedOutlinedIcon sx={{ color: cs.color, fontSize: 24 }} />
                  </Box>
                  <Typography sx={{ ...styles.certIndex, color: cs.color }}>
                    0{index + 1}
                  </Typography>
                </Box>

                {/* Content */}
                <Typography sx={styles.certTitle}>{cert.title}</Typography>

                <Stack direction="row" alignItems="center" spacing={1} sx={{ mt: 1 }}>
                  <Chip
                    label={cert.issuedBy}
                    size="small"
                    sx={{ ...styles.issuerChip, backgroundColor: cs.bg, color: cs.color, borderColor: cs.borderColor }}
                  />
                </Stack>

                <Box sx={styles.dateRow}>
                  <CalendarTodayOutlinedIcon sx={{ fontSize: 13, color: "#888" }} />
                  <Typography sx={styles.date}>{cert.date}</Typography>
                </Box>

                {cert.summary && (
                  <Typography sx={styles.summary}>{cert.summary}</Typography>
                )}

                {/* CTA */}
                {isPdf && (
                  <Button
                    component="a"
                    href={media.url}
                    target="_blank"
                    rel="noreferrer"
                    variant="outlined"
                    size="small"
                    endIcon={<OpenInNewRoundedIcon sx={{ fontSize: 14 }} />}
                    sx={{ ...styles.certBtn, borderColor: cs.color, color: cs.color, "&:hover": { backgroundColor: cs.bg } }}
                  >
                    View Certificate
                  </Button>
                )}
                {isImage && (
                  <Button
                    variant="outlined"
                    size="small"
                    endIcon={<OpenInNewRoundedIcon sx={{ fontSize: 14 }} />}
                    onClick={() => setActiveImage(media.url)}
                    sx={{ ...styles.certBtn, borderColor: cs.color, color: cs.color, "&:hover": { backgroundColor: cs.bg } }}
                  >
                    Preview
                  </Button>
                )}
              </Box>
            );
          })}
        </Box>
      </Box>

      {/* Image preview dialog */}
      <Dialog
        open={Boolean(activeImage)}
        onClose={() => setActiveImage(null)}
        maxWidth="lg"
        fullWidth
        PaperProps={{ sx: styles.dialogPaper }}
      >
        <DialogContent sx={styles.dialogContent}>
          <IconButton onClick={() => setActiveImage(null)} sx={styles.closeBtn}>
            <CloseRoundedIcon />
          </IconButton>
          {activeImage && (
            <Box component="img" src={activeImage} alt="Certificate" sx={styles.certImage} />
          )}
        </DialogContent>
      </Dialog>
    </Box>
  );
};

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
  grid: {
    display: "grid",
    gridTemplateColumns: { xs: "1fr", md: "repeat(2, 1fr)" },
    gap: 3,
  },
  card: {
    backgroundColor: "#ffffff",
    border: "1px solid #e8e8e8",
    borderRadius: "16px",
    p: { xs: 2.5, md: 3.5 },
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
    alignItems: "center",
    justifyContent: "space-between",
  },
  iconBox: {
    width: 48,
    height: 48,
    borderRadius: "12px",
    display: "grid",
    placeItems: "center",
  },
  certIndex: {
    fontSize: "2rem",
    fontWeight: 900,
    opacity: 0.15,
    lineHeight: 1,
  },
  certTitle: {
    fontWeight: 800,
    fontSize: { xs: "1.05rem", md: "1.2rem" },
    color: "#1a1a1a",
    lineHeight: 1.3,
  },
  issuerChip: {
    fontWeight: 700,
    fontSize: "0.78rem",
    border: "1px solid",
    borderRadius: "6px",
  },
  dateRow: {
    display: "flex",
    alignItems: "center",
    gap: 0.6,
  },
  date: {
    fontSize: "0.82rem",
    color: "#888888",
    fontWeight: 600,
  },
  summary: {
    fontSize: "0.88rem",
    color: "#555555",
    lineHeight: 1.65,
  },
  certBtn: {
    alignSelf: "flex-start",
    borderRadius: "8px",
    fontSize: "0.82rem",
    fontWeight: 700,
    mt: 0.5,
    boxShadow: "none",
    transition: "all 160ms ease",
    "&:hover": { boxShadow: "none" },
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
  certImage: {
    width: "100%",
    maxHeight: "88vh",
    objectFit: "contain",
    borderRadius: "8px",
  },
};

export default Certificates;
