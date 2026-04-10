import React from "react";
import { Box, Chip, Typography } from "@mui/material";

const Skills = ({ skills }) => {
  const groups = [
    { title: "Frontend", items: skills.frontend || [] },
    { title: "Backend", items: skills.backend || [] },
    { title: "Database", items: skills.databases || [] },
    { title: "Cloud", items: skills.cloud || [] },
    { title: "Tools", items: skills.tools || [] },
    { title: "Languages", items: skills.languages || [] },
  ];

  return (
    <Box id="skills" component="section" sx={styles.section}>
      <Typography sx={styles.eyebrow}>Skills</Typography>
      <Typography sx={styles.title}>Cleanly grouped, production-focused capabilities.</Typography>
      <Box sx={styles.grid}>
        {groups.map((group) => (
          <Box key={group.title} sx={styles.card}>
            <Typography sx={styles.cardTitle}>{group.title}</Typography>
            <Box sx={styles.tags}>
              {group.items.map((item) => (
                <Chip key={`${group.title}-${item}`} label={item} sx={styles.tag} />
              ))}
            </Box>
          </Box>
        ))}
      </Box>
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
    padding: { xs: 2.4, md: 3 },
    transition: "transform 180ms ease, box-shadow 180ms ease",
    "&:hover": { transform: "translateY(-3px) scale(1.01)", boxShadow: "0 22px 42px rgba(15, 23, 42, 0.08)" },
  },
  cardTitle: { color: "#0f172a", fontWeight: 800, marginBottom: 1.5 },
  tags: { display: "flex", flexWrap: "wrap", gap: 1 },
  tag: { backgroundColor: "#f1f5f9", color: "#334155", border: "1px solid #e2e8f0", "&:hover": { backgroundColor: "#dbeafe", color: "#1d4ed8" } },
};

export default Skills;
