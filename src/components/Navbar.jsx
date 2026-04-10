import React, { useEffect, useState } from "react";
import { AppBar, Box, Button, Drawer, IconButton, Link, Stack, Toolbar, Typography } from "@mui/material";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";

const sections = [
  { id: "about", label: "About" },
  { id: "education", label: "Education" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];

const Navbar = ({ resumeUrl }) => {
  const [elevated, setElevated] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    const onScroll = () => setElevated(window.scrollY > 18);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const updateActiveSection = () => {
      const offset = 140;
      const scrollPosition = window.scrollY + offset;
      let current = sections[0].id;

      sections.forEach((section) => {
        const element = document.getElementById(section.id);
        if (element && scrollPosition >= element.offsetTop) {
          current = section.id;
        }
      });

      setActiveSection(current);
    };

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection);
    window.addEventListener("resize", updateActiveSection);

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, []);

  const goToSection = (event, id) => {
    event.preventDefault();
    setActiveSection(id);
    window.history.replaceState(null, "", `#${id}`);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    setOpen(false);
  };

  const navLinks = (
    <Stack direction={{ xs: "column", md: "row" }} spacing={{ xs: 1, md: 0.5 }} alignItems={{ xs: "flex-start", md: "center" }}>
      {sections.map((section) => (
        <Link
          key={section.id}
          href={`#${section.id}`}
          onClick={(event) => goToSection(event, section.id)}
          sx={{
            ...styles.link,
            ...(activeSection === section.id ? styles.activeLink : {}),
          }}
        >
          {section.label}
        </Link>
      ))}
    </Stack>
  );

  return (
    <AppBar position="sticky" elevation={0} sx={{ ...styles.appBar, ...(elevated ? styles.appBarRaised : {}) }}>
      <Toolbar sx={styles.toolbar}>
        <Link href="#hero" onClick={(event) => goToSection(event, "hero")} sx={styles.brand}>
          <Typography component="span" sx={styles.brandMark}>AG</Typography>
          <Typography component="span" sx={styles.brandText}>Portfolio</Typography>
        </Link>

        <Box sx={styles.desktopNav}>
          {navLinks}
        </Box>

        <Stack direction="row" spacing={1.5} alignItems="center">
          <Button component="a" href={resumeUrl} download="Antony_Godwin_Resume.pdf" variant="contained" sx={styles.resumeButton}>
            Download Resume
          </Button>
          <IconButton onClick={() => setOpen(true)} sx={styles.menuButton} aria-label="Open navigation">
            <MenuRoundedIcon />
          </IconButton>
        </Stack>
      </Toolbar>

      <Drawer anchor="right" open={open} onClose={() => setOpen(false)} PaperProps={{ sx: styles.drawer }}>
        <Box sx={styles.drawerInner}>
          <Typography sx={styles.drawerTitle}>Navigate</Typography>
          {navLinks}
          <Button component="a" href={resumeUrl} download="Antony_Godwin_Resume.pdf" variant="contained" sx={styles.drawerButton}>
            Download Resume
          </Button>
        </Box>
      </Drawer>
    </AppBar>
  );
};

const styles = {
  appBar: {
    backgroundColor: "rgba(248, 250, 252, 0.8)",
    backdropFilter: "blur(12px)",
    borderBottom: "1px solid transparent",
    transition: "background-color 180ms ease, border-color 180ms ease, box-shadow 180ms ease",
  },
  appBarRaised: {
    borderColor: "rgba(148, 163, 184, 0.2)",
    boxShadow: "0 14px 40px rgba(15, 23, 42, 0.06)",
  },
  toolbar: {
    maxWidth: 1280,
    width: "100%",
    margin: "0 auto",
    minHeight: 86,
    px: { xs: 2, md: 3 },
    display: "flex",
    justifyContent: "space-between",
  },
  brand: {
    display: "inline-flex",
    alignItems: "center",
    gap: 1.25,
    textDecoration: "none",
  },
  brandMark: {
    width: 42,
    height: 42,
    borderRadius: "14px",
    display: "grid",
    placeItems: "center",
    backgroundColor: "#0f172a",
    color: "#fff",
    fontWeight: 800,
    letterSpacing: "-0.05em",
  },
  brandText: {
    color: "#0f172a",
    fontWeight: 700,
    fontSize: "0.98rem",
  },
  desktopNav: {
    display: { xs: "none", md: "block" },
  },
  link: {
    px: 1.5,
    py: 1,
    color: "#475569",
    fontSize: "0.95rem",
    borderRadius: 999,
    textDecoration: "none",
    transition: "transform 180ms ease, color 180ms ease, background-color 180ms ease",
    "&:before, &:after": {
      display: "none",
    },
    "&:hover": {
      color: "#0f172a",
      backgroundColor: "#e2e8f0",
      transform: "translateY(-1px)",
      textDecoration: "none",
    },
  },
  activeLink: {
    backgroundColor: "#dbeafe",
    color: "#1d4ed8",
    fontWeight: 700,
  },
  resumeButton: {
    display: { xs: "none", sm: "inline-flex" },
    boxShadow: "none",
    "&:hover": {
      boxShadow: "0 16px 32px rgba(37, 99, 235, 0.18)",
      transform: "translateY(-1px)",
    },
  },
  menuButton: {
    display: { xs: "inline-flex", md: "none" },
    color: "#0f172a",
    border: "1px solid #cbd5e1",
  },
  drawer: {
    width: 300,
    p: 2,
    backgroundColor: "#ffffff",
  },
  drawerInner: {
    display: "grid",
    gap: 1,
    paddingTop: 4,
  },
  drawerTitle: {
    color: "#0f172a",
    fontWeight: 800,
    fontSize: "1.1rem",
    mb: 1,
  },
  drawerButton: {
    mt: 2,
    justifySelf: "start",
  },
};

export default Navbar;
