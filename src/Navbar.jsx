import React from "react";
import { Box, Link } from "@mui/material";
import styles from "./style";

const sections = [
  "skills",
  "achievements",
  "internships",
  "projects",
  "contact",
];

export default function Navbar() {
  return (
    <Box sx={styles.navbar}>
      <Link href="#hero" sx={{ ...styles.navTitle, textDecoration: "none" }}>
        Antony's Portfolio
      </Link>

      <Box sx={styles.navLinks}>
        {sections.map((section, i) => (
          <Link key={i} href={`#${section}`} sx={styles.navLink}>
            {section.charAt(0).toUpperCase() + section.slice(1)}
          </Link>
        ))}
      </Box>
    </Box>
  );
}
