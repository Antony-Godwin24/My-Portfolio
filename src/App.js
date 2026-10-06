import React, { useEffect, useState } from "react";
import { Box, CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import TerminalRoundedIcon from "@mui/icons-material/TerminalRounded";
import { IconButton, Typography } from "@mui/material";

import theme from "./theme";
import { loadAllData } from "./utils/dataLoader";

import Loader from "./components/Loader/Loader";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Internships from "./components/Internships/Internships";
import Projects from "./components/Projects/Projects";
import Certificates from "./components/Certificates/Certificates";
import Hackathons from "./components/Hackathons/Hackathons";

import "./App.css";

function App() {
  const [data, setData] = useState(null);
  const [error, setError] = useState("");
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    let active = true;

    const initialise = async () => {
      try {
        const portfolioData = await loadAllData();
        if (active) {
          setData(portfolioData);
          // Keep loader visible briefly for the gif to show
          setTimeout(() => {
            if (active) setShowLoader(false);
          }, 800);
        }
      } catch (err) {
        if (active) {
          setError(err.message || "Unable to load portfolio data.");
          setShowLoader(false);
        }
      }
    };

    initialise();
    return () => { active = false; };
  }, []);

  // Smooth hash scroll after data loads
  useEffect(() => {
    if (!data || !window.location.hash) return;
    const id = window.location.hash.replace("#", "");
    const t = window.setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 200);
    return () => window.clearTimeout(t);
  }, [data]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      {/* Loading screen — shows gif only, centered, no text */}
      {showLoader && <Loader />}

      {/* Error state */}
      {error && !showLoader && (
        <Box sx={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", p: 4, textAlign: "center" }}>
          <Box>
            <Typography variant="h5" sx={{ fontWeight: 800, color: "#1a1a1a", mb: 1 }}>
              Failed to load portfolio
            </Typography>
            <Typography sx={{ color: "#666" }}>{error}</Typography>
          </Box>
        </Box>
      )}

      {/* Main content — rendered underneath loader (invisible until loader fades) */}
      {data && (
        <Box
          className="app-shell"
          sx={{
            opacity: showLoader ? 0 : 1,
            transition: "opacity 0.4s ease",
          }}
        >
          <Navbar resumeUrl={data.profile.resumeUrl} />

          <main>
            {/* 1. Hero */}
            <Hero profile={data.profile} />

            {/* 2. Education */}
            <Education />

            {/* 3. Skills */}
            <Skills skills={data.skills} />

            {/* 4. Experience (Internships) */}
            <Internships internships={data.internships} />

            {/* 5. Projects */}
            <Projects projects={data.projects} />

            {/* 6. Certificates */}
            <Certificates certificates={data.certificates} />

            {/* Hackathons & Achievements */}
            <Hackathons hackathons={data.hackathons} />
          </main>

          {/* Executive Corporate Footer */}
          <Box component="footer" className="zoho-footer">
            <Box className="zoho-footer-inner">
              {/* Brand & Overview Column */}
              <Box sx={{ maxWidth: 380 }}>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 1.5 }}>
                  <Box
                    sx={{
                      width: 36,
                      height: 36,
                      borderRadius: "8px",
                      background: "linear-gradient(135deg, #e84c2b 0%, #ff6b4a 100%)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#fff",
                      fontWeight: 900,
                      fontSize: "0.95rem",
                    }}
                  >
                    AG
                  </Box>
                  <Typography className="zoho-footer-brand">ANTONY GODWIN S</Typography>
                </Box>
                <Typography className="zoho-footer-tagline">
                  Computer Science and Engineering graduate specializing in Full Stack Engineering (Java, React, Node, Spring Boot, MySQL). Driven by craftsmanship, robust system design, and clean execution.
                </Typography>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1, mt: 2 }}>
                  <Box sx={{ width: 8, height: 8, borderRadius: "50%", backgroundColor: "#10b981", boxShadow: "0 0 8px #10b981" }} />
                  <Typography sx={{ fontSize: "0.78rem", color: "#9ca3af", fontWeight: 600 }}>
                    Available for Full-time Roles &amp; Engineering Opportunities
                  </Typography>
                </Box>
              </Box>

              {/* Quick Navigation Column */}
              <Box sx={{ minWidth: 160 }}>
                <Typography sx={{ color: "#ffffff", fontWeight: 800, fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "0.08em", mb: 1.8 }}>
                  Navigation
                </Typography>
                <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                  {[
                    { label: "About & Education", href: "#education" },
                    { label: "Technical Skills", href: "#skills" },
                    { label: "Work Experience", href: "#experience" },
                    { label: "Key Projects", href: "#projects" },
                    { label: "Certifications", href: "#certificates" },
                    { label: "Hackathons & Patent", href: "#hackathons" },
                  ].map((link) => (
                    <Typography
                      key={link.label}
                      component="a"
                      href={link.href}
                      sx={{
                        color: "#9ca3af",
                        fontSize: "0.84rem",
                        textDecoration: "none",
                        transition: "color 140ms ease",
                        "&:hover": { color: "#e84c2b" },
                      }}
                    >
                      {link.label}
                    </Typography>
                  ))}
                </Box>
              </Box>

              {/* Direct Contact Column */}
              <Box sx={{ minWidth: 240 }}>
                <Typography sx={{ color: "#ffffff", fontWeight: 800, fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "0.08em", mb: 1.8 }}>
                  Contact &amp; Profiles
                </Typography>
                <Box sx={{ display: "flex", flexDirection: "column", gap: 1.2, mb: 2.5 }}>
                  <Typography sx={{ color: "#9ca3af", fontSize: "0.84rem" }}>
                    📍 Tiruchirappalli, Tamil Nadu, India
                  </Typography>
                  <Typography
                    component="a"
                    href="tel:+919994982519"
                    sx={{ color: "#9ca3af", fontSize: "0.84rem", textDecoration: "none", "&:hover": { color: "#ffffff" } }}
                  >
                    📞 +91 99949 82519
                  </Typography>
                  <Typography
                    component="a"
                    href="mailto:antonygodwin08@gmail.com"
                    sx={{ color: "#e84c2b", fontSize: "0.84rem", fontWeight: 600, textDecoration: "none", "&:hover": { textDecoration: "underline" } }}
                  >
                    ✉️ antonygodwin08@gmail.com
                  </Typography>
                </Box>

                <Box className="zoho-footer-links">
                  <IconButton
                    component="a"
                    href={data.profile.links.github}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="GitHub"
                    size="small"
                  >
                    <GitHubIcon fontSize="small" />
                  </IconButton>
                  <IconButton
                    component="a"
                    href={data.profile.links.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="LinkedIn"
                    size="small"
                  >
                    <LinkedInIcon fontSize="small" />
                  </IconButton>
                  <IconButton
                    component="a"
                    href={data.profile.links.leetcode}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="LeetCode"
                    size="small"
                  >
                    <TerminalRoundedIcon fontSize="small" />
                  </IconButton>
                  <IconButton
                    component="a"
                    href={data.profile.links.email}
                    aria-label="Email"
                    size="small"
                  >
                    <EmailOutlinedIcon fontSize="small" />
                  </IconButton>
                </Box>
              </Box>
            </Box>

            <Box className="zoho-footer-inner" sx={{ pt: 3 }}>
              <Typography className="zoho-footer-copy">
                © {new Date().getFullYear()} ANTONY GODWIN S · Crafted with engineering precision and clean architecture.
              </Typography>
            </Box>
          </Box>
        </Box>
      )}
    </ThemeProvider>
  );
}

export default App;
