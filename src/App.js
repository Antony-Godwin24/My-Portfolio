import React, { useEffect, useState } from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import TerminalRoundedIcon from "@mui/icons-material/TerminalRounded";
import { Box, CircularProgress, CssBaseline, IconButton, Typography } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";
import { loadAllData } from "./utils/dataLoader";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Education from "./components/Education";
import FeaturedProject from "./components/FeaturedProject";
import Projects from "./components/Projects/Projects";
import Internships from "./components/Internships/Internships";
import Hackathons from "./components/Hackathons/Hackathons";
import Certificates from "./components/Certificates/Certificates";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

import "./App.css";

function App() {
  const [data, setData] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    let active = true;

    const initialise = async () => {
      try {
        const portfolioData = await loadAllData();
        if (active) {
          setData(portfolioData);
        }
      } catch (loadError) {
        if (active) {
          setError(loadError.message || "Unable to load portfolio data.");
        }
      }
    };

    initialise();

    return () => {
      active = false;
    };
  }, []);

  useEffect(() => {
    if (!data || !window.location.hash) {
      return;
    }

    const sectionId = window.location.hash.replace("#", "");
    const timer = window.setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 150);

    return () => window.clearTimeout(timer);
  }, [data]);

  if (error) {
    return (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Box className="app-shell app-state">
          <Typography variant="h4">Portfolio failed to load</Typography>
          <Typography>{error}</Typography>
        </Box>
      </ThemeProvider>
    );
  }

  if (!data) {
    return (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Box className="app-shell app-state">
          <CircularProgress />
          <Typography>Loading portfolio content...</Typography>
        </Box>
      </ThemeProvider>
    );
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box className="app-shell">
        <Navbar resumeUrl={data.profile.resumeUrl} />
        <main>
          <Hero profile={data.profile} />
          <About about={data.about} />
          <Education />
          <FeaturedProject project={data.featuredProject} />
          <Projects projects={data.projects} />
          <Internships internships={data.internships} />
          <Hackathons hackathons={data.hackathons} />
          <Certificates certificates={data.certificates} />
          <Skills skills={data.skills} />
          <Contact profile={data.profile} />
        </main>
        <Box component="footer" className="simplest-footer">
          <Box className="simplest-footer-content">
            <Box>
              <Typography className="simplest-footer-name">ANTONY GODWIN S</Typography>
              <Typography className="simplest-footer-desc" sx={{ color: "#64748b", fontStyle: "italic", mt: 0.5 }}>
                "The best professional in this world is useless if no one can find them."
              </Typography>
            </Box>
            <Box className="simplest-footer-links">
              <IconButton component="a" href={data.profile.links.github} target="_blank" rel="noreferrer" aria-label="GitHub" size="small">
                <GitHubIcon fontSize="small" />
              </IconButton>
              <IconButton component="a" href={data.profile.links.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" size="small">
                <LinkedInIcon fontSize="small" />
              </IconButton>
              <IconButton component="a" href={data.profile.links.leetcode} target="_blank" rel="noreferrer" aria-label="LeetCode" size="small">
                <TerminalRoundedIcon fontSize="small" />
              </IconButton>
              <IconButton component="a" href={data.profile.links.email} aria-label="Email" size="small">
                <EmailOutlinedIcon fontSize="small" />
              </IconButton>
            </Box>
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App;
