import React from "react";
import { Box, Typography } from "@mui/material";

const About = ({ about }) => (
  <Box id="about" component="section" sx={styles.section}>
    <Box sx={styles.header}>
      <Typography sx={styles.eyebrow}>About</Typography>
      <Typography sx={styles.title}>System thinking with product-level execution.</Typography>
      <Typography sx={styles.intro}>{about.intro}</Typography>
    </Box>

    <Box sx={styles.grid}>
      {about.narrative.map((paragraph, index) => (
        <Box key={index} sx={styles.card}>
          <Box sx={styles.rowHeader}>
            <Typography sx={styles.cardIndex}>{`0${index + 1}`}</Typography>
            <Box sx={styles.line} />
          </Box>
          <Typography sx={styles.cardText}>{paragraph}</Typography>
        </Box>
      ))}
    </Box>
  </Box>
);

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
    fontSize: { xs: "2rem", md: "3.25rem" },
    lineHeight: 1.05,
    fontWeight: 800,
    color: "#0f172a",
  },
  intro: {
    mt: 2,
    color: "#475569",
    fontSize: { xs: "1rem", md: "1.1rem" },
  },
  grid: {
    display: "grid",
    gap: 2,
  },
  card: {
    padding: { xs: 2.5, md: 3 },
    borderRadius: "20px",
    backgroundColor: "#ffffff",
    border: "1px solid #e2e8f0",
    boxShadow: "0 14px 30px rgba(148, 163, 184, 0.1)",
    transition: "transform 220ms ease, box-shadow 220ms ease, border-color 220ms ease",
    "&:hover": {
      transform: "translateY(-4px)",
      boxShadow: "0 20px 42px rgba(37, 99, 235, 0.16)",
      borderColor: "#bfdbfe",
    },
  },
  rowHeader: {
    display: "flex",
    alignItems: "center",
    gap: 1.2,
    marginBottom: 1.2,
  },
  cardIndex: {
    fontSize: "0.88rem",
    fontWeight: 800,
    color: "#2563eb",
  },
  line: {
    height: 1,
    backgroundColor: "#dbeafe",
    flex: 1,
  },
  cardText: {
    color: "#334155",
    fontSize: { xs: "1rem", md: "1.04rem" },
    lineHeight: 1.7,
  },
};

export default About;
