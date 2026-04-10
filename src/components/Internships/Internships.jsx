import React from "react";
import { Box, Chip, Link, Typography } from "@mui/material";

const Internships = ({ internships }) => (
  <Box id="experience" component="section" sx={styles.section}>
    <Typography sx={styles.eyebrow}>Experience</Typography>
    <Typography sx={styles.title}>Execution in real product environments.</Typography>
    <Box sx={styles.timeline}>
      {internships.map((intern) => (
        <Box key={intern.slug} sx={styles.item}>
          <Box sx={styles.marker} />
          <Box sx={styles.card}>
            <Box sx={styles.header}>
              <Typography sx={styles.company}>{intern.company}</Typography>
              <Typography sx={styles.duration}>{intern.duration}</Typography>
            </Box>
            <Typography sx={styles.role}>{intern.role}</Typography>
            <Typography sx={styles.summary}>{intern.summary}</Typography>
            <Box component="ul" sx={styles.list}>
              {intern.highlights.map((line) => (
                <Typography component="li" key={line} sx={styles.listItem}>{line}</Typography>
              ))}
            </Box>
            <Box sx={styles.tags}>
              {intern.tech.map((tool) => (
                <Chip key={tool} label={tool} sx={styles.tag} />
              ))}
            </Box>
            <Box sx={styles.docs}>
              {intern.documents.map((doc) => (
                <Link key={doc.url} href={doc.url} target="_blank" rel="noreferrer" sx={styles.link}>
                  {intern.slug === "zoho" ? "Completion Certificate" : doc.label}
                </Link>
              ))}
            </Box>
          </Box>
        </Box>
      ))}
    </Box>
  </Box>
);

const styles = {
  section: { maxWidth: 1280, margin: "0 auto", padding: { xs: "0 1.25rem 5rem", md: "0 2rem 7rem" } },
  eyebrow: { color: "#2563eb", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", fontSize: "0.82rem" },
  title: { mt: 1.5, mb: 4, fontSize: { xs: "1.9rem", md: "2.8rem" }, fontWeight: 800, color: "#0f172a" },
  timeline: { borderLeft: "2px solid #dbeafe", paddingLeft: { xs: 2, md: 3 }, display: "grid", gap: 3 },
  item: { position: "relative" },
  marker: { position: "absolute", width: 14, height: 14, borderRadius: "50%", backgroundColor: "#2563eb", left: -31, top: 26 },
  card: {
    borderRadius: 5,
    border: "1px solid #dbe3ee",
    backgroundColor: "#ffffff",
    padding: { xs: 2.5, md: 3.5 },
    boxShadow: "0 20px 45px rgba(148, 163, 184, 0.12)",
    transition: "transform 180ms ease, box-shadow 180ms ease",
    "&:hover": { transform: "translateY(-3px) scale(1.01)", boxShadow: "0 28px 50px rgba(37, 99, 235, 0.12)" },
  },
  header: { display: "flex", justifyContent: "space-between", gap: 2, flexWrap: "wrap" },
  company: { fontSize: { xs: "1.2rem", md: "1.35rem" }, fontWeight: 800, color: "#0f172a" },
  duration: { color: "#64748b", fontWeight: 600 },
  role: { marginTop: 0.7, color: "#2563eb", fontWeight: 700 },
  summary: { marginTop: 1.2, color: "#475569" },
  list: { margin: "1rem 0 0", paddingLeft: "1.2rem" },
  listItem: { color: "#475569", marginBottom: 0.8 },
  tags: { marginTop: 1.8, display: "flex", flexWrap: "wrap", gap: 1 },
  tag: { backgroundColor: "#f1f5f9", color: "#334155", border: "1px solid #e2e8f0" },
  docs: { marginTop: 1.5, display: "flex", gap: 1.5, flexWrap: "wrap" },
  link: { color: "#1d4ed8", fontWeight: 700, "&:hover": { transform: "translateY(-1px)" } },
};

export default Internships;
