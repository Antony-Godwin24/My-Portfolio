import React, { useEffect, useState } from "react";
import { AppBar, Box, Button, Drawer, IconButton, Link, Stack, Toolbar, Typography } from "@mui/material";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";

const sections = [
  { id: "hero", label: "Home" },
  { id: "education", label: "Education" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "certificates", label: "Certificates" },
];

const Navbar = ({ resumeUrl }) => {
  const [elevated, setElevated] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const onScroll = () => setElevated(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const updateActive = () => {
      const offset = 120;
      const pos = window.scrollY + offset;
      let current = sections[0].id;
      sections.forEach((s) => {
        const el = document.getElementById(s.id);
        if (el && pos >= el.offsetTop) current = s.id;
      });
      setActiveSection(current);
    };
    updateActive();
    window.addEventListener("scroll", updateActive, { passive: true });
    window.addEventListener("resize", updateActive, { passive: true });
    return () => {
      window.removeEventListener("scroll", updateActive);
      window.removeEventListener("resize", updateActive);
    };
  }, []);

  const goTo = (e, id) => {
    e.preventDefault();
    setActiveSection(id);
    window.history.replaceState(null, "", `#${id}`);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    setOpen(false);
  };

  const navLinks = (
    <Stack direction={{ xs: "column", md: "row" }} spacing={{ xs: 0.5, md: 0 }} alignItems={{ xs: "flex-start", md: "center" }}>
      {sections.map((s) => (
        <Link
          key={s.id}
          href={`#${s.id}`}
          onClick={(e) => goTo(e, s.id)}
          sx={{
            ...styles.link,
            ...(activeSection === s.id ? styles.activeLink : {}),
          }}
        >
          {s.label}
        </Link>
      ))}
    </Stack>
  );

  return (
    <AppBar position="sticky" elevation={0} sx={{ ...styles.appBar, ...(elevated ? styles.appBarElevated : {}) }}>
      <Toolbar sx={styles.toolbar}>
        {/* Brand */}
        <Link href="#hero" onClick={(e) => goTo(e, "hero")} sx={styles.brand}>
          <Box sx={styles.brandMark}>
            <Typography sx={styles.brandInitials}>AG</Typography>
          </Box>
          <Box>
            <Typography sx={styles.brandName}>Antony Godwin S</Typography>
            <Typography sx={styles.brandSub}>Software Developer</Typography>
          </Box>
        </Link>

        {/* Desktop nav */}
        <Box sx={{ display: { xs: "none", md: "block" } }}>{navLinks}</Box>

        {/* Actions */}
        <Stack direction="row" spacing={1.5} alignItems="center">
          <Button
            component="a"
            href={resumeUrl}
            download="ANTONY_GODWIN_S_RESUME.pdf"
            variant="contained"
            sx={styles.resumeBtn}
          >
            Download Resume
          </Button>
          <IconButton onClick={() => setOpen(true)} sx={styles.menuBtn} aria-label="Open menu">
            <MenuRoundedIcon />
          </IconButton>
        </Stack>
      </Toolbar>

      {/* Mobile drawer */}
      <Drawer anchor="right" open={open} onClose={() => setOpen(false)} PaperProps={{ sx: styles.drawer }}>
        <Box sx={styles.drawerInner}>
          <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 3 }}>
            <Typography sx={{ fontWeight: 800, fontSize: "1.1rem", color: "#1a1a1a" }}>Menu</Typography>
            <IconButton onClick={() => setOpen(false)} size="small">
              <CloseRoundedIcon />
            </IconButton>
          </Box>
          {navLinks}
          <Button
            component="a"
            href={resumeUrl}
            download="ANTONY_GODWIN_S_RESUME.pdf"
            variant="contained"
            fullWidth
            sx={{ mt: 3, borderRadius: 2 }}
          >
            Download Resume
          </Button>
        </Box>
      </Drawer>
    </AppBar>
  );
};

const styles = {
  appBar: {
    backgroundColor: "rgba(255,255,255,0.95)",
    backdropFilter: "blur(16px)",
    borderBottom: "1px solid transparent",
    transition: "border-color 200ms ease, box-shadow 200ms ease",
    color: "#1a1a1a",
  },
  appBarElevated: {
    borderColor: "#e8e8e8",
    boxShadow: "0 4px 20px rgba(0,0,0,0.06)",
  },
  toolbar: {
    maxWidth: 1200,
    width: "100%",
    margin: "0 auto",
    minHeight: 72,
    px: { xs: 2, md: 3 },
    display: "flex",
    justifyContent: "space-between",
    gap: 2,
  },
  brand: {
    display: "inline-flex",
    alignItems: "center",
    gap: 1.25,
    textDecoration: "none",
    flexShrink: 0,
  },
  brandMark: {
    width: 38,
    height: 38,
    borderRadius: "10px",
    background: "linear-gradient(135deg, #1a1a1a 0%, #333333 100%)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: "0 2px 8px rgba(0,0,0,0.12)",
  },
  brandInitials: {
    color: "#ffffff",
    fontWeight: 900,
    fontSize: "0.95rem",
    letterSpacing: "-0.02em",
  },
  brandName: {
    color: "#1a1a1a",
    fontWeight: 800,
    fontSize: "0.95rem",
    lineHeight: 1.15,
    letterSpacing: "-0.01em",
  },
  brandSub: {
    color: "#777777",
    fontWeight: 500,
    fontSize: "0.72rem",
    letterSpacing: "0.02em",
  },
  link: {
    px: 1.5,
    py: 0.9,
    color: "#555555",
    fontSize: "0.9rem",
    fontWeight: 500,
    borderRadius: "6px",
    textDecoration: "none",
    transition: "color 150ms ease, background-color 150ms ease",
    "&:before, &:after": { display: "none" },
    "&:hover": {
      color: "#1a1a1a",
      backgroundColor: "#f0f0f0",
      textDecoration: "none",
    },
  },
  activeLink: {
    color: "#e84c2b",
    backgroundColor: "rgba(232, 76, 43, 0.06)",
    fontWeight: 700,
  },
  resumeBtn: {
    display: { xs: "none", sm: "inline-flex" },
    backgroundColor: "#e84c2b",
    color: "#fff",
    fontSize: "0.85rem",
    borderRadius: "6px",
    py: 1,
    px: 2.5,
    boxShadow: "none",
    "&:hover": {
      backgroundColor: "#c73d20",
      boxShadow: "0 4px 12px rgba(232,76,43,0.3)",
    },
  },
  menuBtn: {
    display: { xs: "inline-flex", md: "none" },
    color: "#1a1a1a",
    border: "1px solid #e8e8e8",
    borderRadius: "8px",
  },
  drawer: {
    width: 280,
    backgroundColor: "#ffffff",
  },
  drawerInner: {
    p: 3,
    display: "flex",
    flexDirection: "column",
    gap: 0.5,
  },
};

export default Navbar;
