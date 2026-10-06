import React from "react";
import { Box, Chip, Divider, Stack, Typography } from "@mui/material";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import EmojiEventsOutlinedIcon from "@mui/icons-material/EmojiEventsOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";

const educationData = [
  {
    id: "be",
    degree: "B.E. Computer Science & Engineering",
    institution: "K. Ramakrishnan College of Engineering (KRCE)",
    board: "Anna University, Chennai",
    duration: "2023 – 2027",
    location: "Tiruchirappalli, Tamil Nadu",
    score: "8.35 CGPA",
    scoreLabel: "CGPA",
    type: "Full-time",
    current: true,
    color: "#e84c2b",
    dotColor: "#e84c2b",
  },
  {
    id: "hsc",
    degree: "Higher Secondary (12th Grade)",
    institution: "SRV Matric Hr Sec School, Samayapuram",
    board: "Tamil Nadu State Board",
    duration: "Passed 2023",
    location: "Tiruchirappalli, Tamil Nadu",
    score: "90.5%",
    scoreLabel: "Score",
    type: "Full-time",
    current: false,
    color: "#2563eb",
    dotColor: "#2563eb",
  },
  {
    id: "sslc",
    degree: "SSLC (10th Grade)",
    institution: "SRV Matric Hr Sec School, Samayapuram",
    board: "Tamil Nadu State Board",
    duration: "Passed 2021",
    location: "Tiruchirappalli, Tamil Nadu",
    score: "100%",
    scoreLabel: "Score",
    type: "Full-time",
    current: false,
    color: "#00a86b",
    dotColor: "#00a86b",
  },
];

const strongSubjects = [
  "Data Structures & Algorithms",
  "Object-Oriented Programming (OOP)",
  "Database Management Systems (DBMS)",
];

const Education = () => (
  <Box id="education" component="section" sx={styles.section}>
    <Box sx={styles.container}>
      {/* Header */}
      <Box sx={styles.header}>
        <span className="section-eyebrow">Education</span>
        <Typography sx={styles.title}>Academic Foundation</Typography>
        <Typography sx={styles.subtitle}>
          Grounded in computer science fundamentals with consistent academic excellence.
        </Typography>
      </Box>

      {/* Education cards */}
      <Box sx={styles.cardsGrid}>
        {educationData.map((edu) => (
          <Box key={edu.id} sx={styles.card}>
            {/* Colored top bar */}
            <Box sx={{ ...styles.cardTopBar, backgroundColor: edu.color }} />

            <Box sx={styles.cardBody}>
              {/* Icon + degree */}
              <Box sx={styles.cardHeader}>
                <Box sx={{ ...styles.iconBox, backgroundColor: `${edu.color}14`, border: `1px solid ${edu.color}30` }}>
                  <SchoolOutlinedIcon sx={{ color: edu.color, fontSize: 22 }} />
                </Box>
                <Box sx={{ flex: 1 }}>
                  <Stack direction="row" spacing={1} alignItems="center" flexWrap="wrap" gap={1}>
                    <Typography sx={styles.degree}>{edu.degree}</Typography>
                    {edu.current && (
                      <Chip label="Current" size="small" sx={{ ...styles.currentChip, backgroundColor: `${edu.color}15`, color: edu.color, borderColor: `${edu.color}30` }} />
                    )}
                  </Stack>
                  <Typography sx={styles.institution}>{edu.institution}</Typography>
                  <Typography sx={styles.board}>{edu.board}</Typography>
                </Box>
              </Box>

              <Divider sx={styles.divider} />

              {/* Meta row */}
              <Stack direction={{ xs: "column", sm: "row" }} spacing={2} sx={styles.meta}>
                <Box sx={styles.metaItem}>
                  <CalendarMonthOutlinedIcon sx={{ fontSize: 15, color: "#888" }} />
                  <Typography sx={styles.metaText}>{edu.duration}</Typography>
                </Box>
                <Box sx={styles.metaItem}>
                  <LocationOnOutlinedIcon sx={{ fontSize: 15, color: "#888" }} />
                  <Typography sx={styles.metaText}>{edu.location}</Typography>
                </Box>
                <Box sx={styles.metaItem}>
                  <EmojiEventsOutlinedIcon sx={{ fontSize: 15, color: edu.color }} />
                  <Typography sx={{ ...styles.metaText, color: edu.color, fontWeight: 700 }}>
                    {edu.score}
                  </Typography>
                </Box>
              </Stack>
            </Box>
          </Box>
        ))}
      </Box>

      {/* Strong subjects */}
      <Box sx={styles.subjectsBox}>
        <Typography sx={styles.subjectsTitle}>Strong Academic Subjects</Typography>
        <Stack direction="row" spacing={1.5} flexWrap="wrap" gap={1.5}>
          {strongSubjects.map((s) => (
            <Chip
              key={s}
              label={s}
              sx={styles.subjectChip}
            />
          ))}
        </Stack>
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
  cardsGrid: {
    display: "grid",
    gridTemplateColumns: { xs: "1fr", md: "repeat(3, 1fr)" },
    gap: 3,
    mb: 5,
  },
  card: {
    backgroundColor: "#ffffff",
    borderRadius: "16px",
    border: "1px solid #e8e8e8",
    overflow: "hidden",
    transition: "transform 160ms ease, box-shadow 160ms ease",
    "&:hover": {
      transform: "translateY(-4px)",
      boxShadow: "0 20px 40px rgba(0,0,0,0.08)",
    },
  },
  cardTopBar: {
    height: 4,
  },
  cardBody: {
    p: { xs: 2.5, md: 3 },
  },
  cardHeader: {
    display: "flex",
    gap: 1.5,
    alignItems: "flex-start",
  },
  iconBox: {
    width: 44,
    height: 44,
    borderRadius: "10px",
    display: "grid",
    placeItems: "center",
    flexShrink: 0,
    mt: 0.3,
  },
  degree: {
    fontWeight: 800,
    fontSize: { xs: "0.95rem", md: "1rem" },
    color: "#1a1a1a",
    lineHeight: 1.3,
  },
  currentChip: {
    fontSize: "0.72rem",
    fontWeight: 700,
    height: 22,
    border: "1px solid",
    flexShrink: 0,
  },
  institution: {
    fontSize: "0.88rem",
    fontWeight: 600,
    color: "#333333",
    mt: 0.5,
  },
  board: {
    fontSize: "0.8rem",
    color: "#888888",
    mt: 0.25,
  },
  divider: {
    my: 2,
    borderColor: "#f0f0f0",
  },
  meta: {
    color: "#555555",
  },
  metaItem: {
    display: "flex",
    alignItems: "center",
    gap: 0.6,
  },
  metaText: {
    fontSize: "0.82rem",
    color: "#666666",
    fontWeight: 500,
  },
  subjectsBox: {
    backgroundColor: "#ffffff",
    border: "1px solid #e8e8e8",
    borderRadius: "16px",
    p: { xs: 3, md: 4 },
  },
  subjectsTitle: {
    fontWeight: 700,
    fontSize: "0.78rem",
    color: "#1a1a1a",
    mb: 2,
    textTransform: "uppercase",
    letterSpacing: "0.08em",
  },
  subjectChip: {
    backgroundColor: "#f0f0f0",
    color: "#333333",
    fontWeight: 600,
    fontSize: "0.88rem",
    border: "1px solid #e0e0e0",
    borderRadius: "8px",
    "&:hover": {
      backgroundColor: "#e84c2b",
      color: "#ffffff",
      borderColor: "#e84c2b",
    },
    transition: "all 160ms ease",
  },
};

export default Education;
