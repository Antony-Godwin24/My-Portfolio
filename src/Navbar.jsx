import React, { useState, useEffect } from "react";
import { Box, Link, IconButton, Drawer, List, ListItem, ListItemText } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import styles from "./style";
import Resume from "./resumeNew.pdf";

const sections = [
  "about",
  "experience",
  "projects",
  "skills",
  "contact",
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawerContent = (
    <Box sx={{ 
        height: "100%", 
        backgroundColor: "#112240", 
        color: "#ccd6f6",
        textAlign: "center",
        paddingTop: "50px"
    }} onClick={handleDrawerToggle}>
      <List sx={{ width: '100%', paddingLeft: '20px' }}>
        {sections.map((section) => (
          <ListItem key={section} disablePadding sx={{ margin: "15px 0" }}>
            <Link 
              href={`#${section}`} 
              underline="none"
              onClick={handleDrawerToggle}
              sx={{ 
                  ...styles.navLink, 
                  fontSize: "1.5rem", // Larger for touch targets
                  display: "block",
                  textAlign: "left",
                  width: "100%"
              }}
            >
              <span style={{ color: "#64ffda", marginRight: "10px" }}>0{sections.indexOf(section) + 1}.</span>
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </Link>
          </ListItem>
        ))}
         <ListItem disablePadding sx={{ marginTop: "20px" }}>
            <a 
                href={Resume} 
                download="Antony_Godwin_Resume.pdf"
                target="_blank"
                rel="noreferrer"
                style={{ textDecoration: 'none' }}
            >
                <Box component="span" sx={styles.downloadBtn}>
                    Resume
                </Box>
            </a>
         </ListItem>
      </List>
    </Box>
  );

  return (
    <Box 
      sx={{
        ...styles.navbar,
        boxShadow: scrolled ? styles.navbar.boxShadow : "none",
        backgroundColor: scrolled ? styles.navbar.backgroundColor : "transparent",
        backdropFilter: scrolled ? "blur(10px)" : "none",
        padding: scrolled ? "10px clamp(20px, 5vw, 40px)" : "20px clamp(20px, 5vw, 40px)",
      }}
    >
      <Link href="#hero" sx={styles.navLogo}>
        AG.
      </Link>

      {/* Desktop Links */}
      <Box sx={styles.navLinks}>
        {sections.map((section, i) => (
          <Link key={i} href={`#${section}`} sx={styles.navLink}>
            {section.charAt(0).toUpperCase() + section.slice(1)}
          </Link>
        ))}
        <a 
            href={Resume} 
            download="Antony_Godwin_Resume.pdf"
            target="_blank"
            rel="noreferrer"
            style={{ textDecoration: 'none' }}
        >
            <Box component="span" sx={{
                ...styles.downloadBtn,
                padding: "8px 16px !important",
                fontSize: "13px !important",
                marginLeft: "15px",
                display: "inline-block" 
            }}>
                Resume
            </Box>
        </a>
      </Box>

      {/* Mobile Hamburger */}
      <IconButton
        color="inherit"
        aria-label="open drawer"
        edge="start"
        onClick={handleDrawerToggle}
        sx={styles.mobileMenuBtn}
      >
        <MenuIcon sx={{ fontSize: "30px", color: "#64ffda" }} />
      </IconButton>

      {/* Mobile Drawer */}
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: "block", md: "none" },
          "& .MuiDrawer-paper": { 
              boxSizing: "border-box", 
              width: "min(75vw, 300px)", // Responsive width
              backgroundColor: "#112240",
              color: "#ccd6f6",
              borderRight: "1px solid #64ffda"
          }, 
        }}
      >
        {drawerContent}
      </Drawer>
    </Box>
  );
}
