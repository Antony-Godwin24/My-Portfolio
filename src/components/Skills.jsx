import React from "react";
import { Box, Chip, Stack, Typography } from "@mui/material";
import CodeOutlinedIcon from "@mui/icons-material/CodeOutlined";
import WebOutlinedIcon from "@mui/icons-material/WebOutlined";
import StorageOutlinedIcon from "@mui/icons-material/StorageOutlined";
import BuildOutlinedIcon from "@mui/icons-material/BuildOutlined";
import DnsOutlinedIcon from "@mui/icons-material/DnsOutlined";
import TranslateOutlinedIcon from "@mui/icons-material/TranslateOutlined";

const skillGroups = [
  {
    title: "Languages",
    icon: CodeOutlinedIcon,
    color: "#e84c2b",
    bgColor: "#fef0ed",
    items: ["Java", "JavaScript"],
  },
  {
    title: "Frontend",
    icon: WebOutlinedIcon,
    color: "#2563eb",
    bgColor: "#eff6ff",
    items: ["HTML5", "CSS3", "React.js"],
  },
  {
    title: "Backend",
    icon: DnsOutlinedIcon,
    color: "#00a86b",
    bgColor: "#f0fdf4",
    items: ["Node.js", "Express.js", "Spring Boot", "REST APIs"],
  },
  {
    title: "Database",
    icon: StorageOutlinedIcon,
    color: "#f5a623",
    bgColor: "#fffbeb",
    items: ["MySQL"],
  },
  {
    title: "Tools",
    icon: BuildOutlinedIcon,
    color: "#7c3aed",
    bgColor: "#f5f3ff",
    items: ["Git", "GitHub"],
  },
];

const Skills = ({ skills }) => (
  <Box id="skills" component="section" sx={styles.section}>
    <Box sx={styles.container}>
      {/* Header */}
      <Box sx={styles.header}>
        <span className="section-eyebrow">Skills</span>
        <Typography sx={styles.title}>Technical Capabilities</Typography>
        <Typography sx={styles.subtitle}>
          Core technologies from hands-on project and internship experience.
        </Typography>
      </Box>

      {/* Skills grid */}
      <Box sx={styles.grid}>
        {skillGroups.map((group) => {
          const Icon = group.icon;
          // Use hardcoded items (resume is source of truth), but allow override from loaded data
          const items = skills?.[group.title.toLowerCase()] || skills?.[group.title.toLowerCase() + "s"] || group.items;
          const displayItems = items.length > 0 ? items : group.items;

          return (
            <Box key={group.title} sx={styles.card}>
              <Box sx={styles.cardHeader}>
                <Box sx={{ ...styles.iconBox, backgroundColor: group.bgColor, border: `1px solid ${group.color}22` }}>
                  <Icon sx={{ color: group.color, fontSize: 22 }} />
                </Box>
                <Typography sx={{ ...styles.groupTitle, color: group.color }}>
                  {group.title}
                </Typography>
              </Box>
              <Box sx={styles.chips}>
                {displayItems.map((item) => (
                  <Chip
                    key={item}
                    label={item}
                    sx={{
                      ...styles.chip,
                      "&:hover": {
                        backgroundColor: group.color,
                        color: "#ffffff",
                        borderColor: group.color,
                      },
                    }}
                  />
                ))}
              </Box>
            </Box>
          );
        })}
      </Box>

      {/* AWS cert highlight */}
      <Box sx={styles.certHighlight}>
        <Box sx={styles.certDot} />
        <Typography sx={styles.certText}>
          <strong style={{ color: "#e84c2b" }}>AWS Certified Cloud Practitioner</strong>
          {" "}— Validated cloud fundamentals and foundational AWS services knowledge.
        </Typography>
      </Box>
    </Box>
  </Box>
);

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
    maxWidth: 540,
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
    gridTemplateColumns: { xs: "1fr", sm: "repeat(2, 1fr)", md: "repeat(3, 1fr)" },
    gap: 2.5,
    mb: 4,
  },
  card: {
    backgroundColor: "#ffffff",
    border: "1px solid #e8e8e8",
    borderRadius: "14px",
    p: { xs: 2.5, md: 3 },
    transition: "transform 160ms ease, box-shadow 160ms ease, border-color 160ms ease",
    "&:hover": {
      transform: "translateY(-3px)",
      boxShadow: "0 16px 32px rgba(0,0,0,0.07)",
      borderColor: "#d0d0d0",
    },
  },
  cardHeader: {
    display: "flex",
    alignItems: "center",
    gap: 1.5,
    mb: 2,
  },
  iconBox: {
    width: 40,
    height: 40,
    borderRadius: "10px",
    display: "grid",
    placeItems: "center",
    flexShrink: 0,
  },
  groupTitle: {
    fontWeight: 800,
    fontSize: "0.92rem",
    textTransform: "uppercase",
    letterSpacing: "0.06em",
  },
  chips: {
    display: "flex",
    flexWrap: "wrap",
    gap: 1,
  },
  chip: {
    backgroundColor: "#f5f5f5",
    color: "#333333",
    border: "1px solid #e8e8e8",
    fontWeight: 600,
    fontSize: "0.83rem",
    borderRadius: "6px",
    transition: "all 160ms ease",
    cursor: "default",
  },
  certHighlight: {
    display: "flex",
    alignItems: "center",
    gap: 1.5,
    backgroundColor: "#fef0ed",
    border: "1px solid rgba(232,76,43,0.2)",
    borderRadius: "12px",
    px: 3,
    py: 2,
  },
  certDot: {
    width: 10,
    height: 10,
    borderRadius: "50%",
    backgroundColor: "#e84c2b",
    flexShrink: 0,
  },
  certText: {
    fontSize: "0.9rem",
    color: "#444444",
    lineHeight: 1.6,
  },
};

export default Skills;
