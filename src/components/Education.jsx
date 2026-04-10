import React from "react";
import { Box, Typography, Stack, Divider } from "@mui/material";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";

const Education = () => {
  return (
    <Box id="education" component="section" sx={styles.section}>
      <Box sx={styles.header}>
        <Typography sx={styles.eyebrow}>Education</Typography>
        <Typography sx={styles.title}>Academic Foundation</Typography>
      </Box>

      <Box sx={styles.card}>
        <Stack direction={{ xs: "column", md: "row" }} spacing={4} alignItems="center">
          <Box sx={styles.iconContainer}>
            <SchoolOutlinedIcon sx={styles.mainIcon} />
          </Box>
          
          <Box sx={styles.details}>
            <Typography sx={styles.institution}>
              K. Ramakrishnan College of Engineering (KRCE)
            </Typography>
            <Typography sx={styles.degree}>
              Bachelor of Engineering in Computer Science and Engineering
            </Typography>
            
            <Stack direction={{ xs: "column", sm: "row" }} spacing={3} sx={styles.meta}>
              <Box className="edu-meta-item" sx={styles.metaItem}>
                <LocationOnOutlinedIcon fontSize="small" />
                <Typography>Trichy, Tamil Nadu</Typography>
              </Box>
              <Box className="edu-meta-item" sx={styles.metaItem}>
                <CalendarMonthOutlinedIcon fontSize="small" />
                <Typography>2023 — 2027</Typography>
              </Box>
            </Stack>

            <Divider sx={styles.divider} />
            
            <Typography sx={styles.focus}>
              Focusing on building deep expertise in software systems, full-stack architecture, and AI integration. Actively maintaining strong academic standards while delivering high-impact practical projects and research-oriented innovations.
            </Typography>
          </Box>
        </Stack>
      </Box>
    </Box>
  );
};

const styles = {
  section: {
    maxWidth: 1280,
    margin: "0 auto",
    padding: { xs: "1rem 1.25rem 5rem", md: "2rem 2rem 7rem" },
  },
  header: {
    maxWidth: 760,
    marginBottom: 5,
  },
  eyebrow: {
    color: "#2563eb",
    fontWeight: 700,
    letterSpacing: "0.12em",
    textTransform: "uppercase",
    fontSize: "0.82rem",
  },
  title: {
    mt: 1.5,
    fontSize: { xs: "2.5rem", md: "3.25rem" },
    lineHeight: 1.05,
    fontWeight: 800,
    color: "#0f172a",
  },
  card: {
    padding: { xs: 4, md: 6 },
    borderRadius: "32px",
    backgroundColor: "#ffffff",
    border: "1px solid #e2e8f0",
    boxShadow: "0 25px 50px -12px rgba(15, 23, 42, 0.08)",
    transition: "transform 220ms ease, box-shadow 220ms ease, border-color 220ms ease",
    position: "relative",
    overflow: "hidden",
    "&:hover": {
      transform: "translateY(-4px)",
      boxShadow: "0 35px 60px -15px rgba(37, 99, 235, 0.12)",
      borderColor: "#bfdbfe",
    },
  },
  iconContainer: {
    width: 100,
    height: 100,
    borderRadius: "24px",
    backgroundColor: "#eff6ff",
    display: "grid",
    placeItems: "center",
    flexShrink: 0,
    border: "1px solid #dbeafe",
  },
  mainIcon: {
    fontSize: 48,
    color: "#2563eb",
  },
  details: {
    flex: 1,
  },
  institution: {
    fontSize: { xs: "1.4rem", md: "1.8rem" },
    fontWeight: 800,
    color: "#0f172a",
    lineHeight: 1.2,
  },
  degree: {
    fontSize: { xs: "1rem", md: "1.15rem" },
    fontWeight: 600,
    color: "#2563eb",
    mt: 0.5,
  },
  meta: {
    mt: 2.5,
    color: "#64748b",
  },
  metaItem: {
    display: "flex",
    alignItems: "center",
    gap: 1,
    "& p": {
      fontSize: "0.95rem",
      fontWeight: 500,
    },
  },
  divider: {
    my: 3.5,
    borderColor: "#f1f5f9",
  },
  focus: {
    color: "#475569",
    fontSize: { xs: "1rem", md: "1.05rem" },
    lineHeight: 1.7,
    maxWidth: 800,
  },
};

export default Education;
