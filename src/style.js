const styles = {
  // --- GLOBAL RESETS & SCROLLBAR ---
  "@global": {
    "*, *::before, *::after": {
        boxSizing: "border-box", // Crucial for responsive layouts
    },
    html: {
      scrollBehavior: "smooth",
      width: "100%",
      overflowX: "hidden",
    },
    body: {
      backgroundColor: "#0a192f",
      color: "#8892b0",
      width: "100%",
      overflowX: "hidden",
      margin: 0,
      padding: 0,
    },
    // Ensure all text wraps correctly
    "& p, & h1, & h2, & h3, & h4, & h5, & h6, & span, & div": {
        overflowWrap: "break-word",
        wordWrap: "break-word",
        hyphens: "auto",
    },
    "@keyframes fadeInUp": {
      from: { opacity: 0, transform: "translateY(20px)" },
      to: { opacity: 1, transform: "translateY(0)" },
    },
    "& section": { animation: "$fadeInUp 0.8s ease-out" },
    "::-webkit-scrollbar": {
      width: "10px",
    },
    "::-webkit-scrollbar-track": {
      background: "#0a192f",
    },
    "::-webkit-scrollbar-thumb": {
      background: "#495670",
      borderRadius: "5px",
    },
    "::-webkit-scrollbar-thumb:hover": {
      background: "#64ffda",
    },
  },

  container: {
    fontFamily: "'Inter', 'Segoe UI', sans-serif",
    backgroundColor: "#0a192f",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    overflow: "hidden",
  },
  
  // --- NAVBAR ---
  navbar: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0, // Snap to right edge explicitly
    width: "auto", // Allow left/right to define total width
    zIndex: 1200,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "15px 50px", // Generous padding to prevent clipping
    boxSizing: "border-box", // Double-ensure box-model
    backgroundColor: "rgba(10, 25, 47, 0.85)", 
    backdropFilter: "blur(10px)",
    boxShadow: "0 10px 30px -10px rgba(2,12,27,0.7)",
    transition: "all 0.3s ease",
    "@media (max-width: 768px)": {
       padding: "15px 25px", 
    }
  },
  navLogo: {
    color: "#64ffda",
    fontWeight: 700,
    fontSize: "clamp(1.2rem, 4vw, 1.5rem)",
    fontFamily: "'Fira Code', monospace",
    textDecoration: "none",
    border: "2px solid #64ffda",
    padding: "4px 8px",
    borderRadius: "4px",
    "&:hover": {
      backgroundColor: "rgba(100, 255, 218, 0.1)",
    },
  },
  navLinks: {
    display: "flex",
    gap: "25px",
    alignItems: "center",
    "@media (max-width: 860px)": {
        display: "none", 
    },
  },
  mobileMenuBtn: { 
      display: "none",
      "@media (max-width: 860px)": {
          display: "block",
      }
  },
  navLink: {
    color: "#ccd6f6",
    fontSize: "0.85rem",
    fontWeight: 500,
    fontFamily: "'Fira Code', monospace",
    textDecoration: "none",
    transition: "all 0.25s",
    textTransform: "capitalize",
    "&:hover": {
      color: "#64ffda",
    },
  },

  // --- HERO SECTION ---
  hero: {
    position: "relative",
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    padding: "0 40px", // Increased desktop padding
    maxWidth: "1200px",
    margin: "0 auto",
    width: "100%",
    "@media (max-width: 768px)": {
        padding: "0 30px", // Increased mobile padding to prevent cutoff
    },
    "@media (max-width: 480px)": {
        padding: "0 25px", // Safe padding for small phones
    }
  },
  heroContent: {
    zIndex: 2,
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "40px",
    animation: "fadeInUp 1s ease-out",
    "@media (max-width: 960px)": {
        flexDirection: "column-reverse",
        textAlign: "center",
        justifyContent: "center",
    }
  },
  heroText: {
      flex: 1.5,
      textAlign: "left",
      width: "100%",
      "@media (max-width: 960px)": {
        textAlign: "center",
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        width: "100%",
        marginBottom: "30px",
      }
  },
  heroPrefix: {
    color: "#64ffda",
    fontFamily: "'Fira Code', monospace",
    fontSize: "clamp(14px, 2vw, 16px)",
    marginBottom: "20px",
    fontWeight: 500,
  },
  heroTitle: {
    fontWeight: 800,
    fontSize: "clamp(40px, 8vw, 70px)",
    lineHeight: 1.1,
    color: "#e6f1ff",
    marginBottom: "10px",
    "@media (max-width: 480px)": {
        fontSize: "36px",
    }
  },
  heroSubtitle: {
    fontSize: "clamp(30px, 5vw, 50px)",
    fontWeight: 700,
    color: "#8892b0",
    marginBottom: "25px",
    lineHeight: 1.1,
    "@media (max-width: 480px)": {
        fontSize: "24px", 
    }
  },
  heroDescription: {
    color: "#8892b0",
    maxWidth: "540px",
    fontSize: "1.1rem",
    lineHeight: 1.6,
    marginBottom: "40px",
    "@media (max-width: 480px)": {
        fontSize: "1rem",
    }
  },
  downloadBtn: {
    px: 4,
    py: 1.5,
    borderRadius: "4px",
    fontWeight: 600,
    border: "1px solid #64ffda",
    color: "#64ffda",
    backgroundColor: "transparent",
    fontFamily: "'Fira Code', monospace",
    transition: "all 0.25s cubic-bezier(0.645,0.045,0.355,1)",
    "&:hover": {
      backgroundColor: "rgba(100, 255, 218, 0.1)",
      transform: "translateY(-3px)",
    },
  },
  
  // --- PROFILE AVATAR ---
  avatarContainer: {
    flexShrink: 0,
    position: "relative",
    "@media (max-width: 960px)": {
         marginBottom: "40px",
         width: "100%",
         display: "flex",
         justifyContent: "center",
         alignItems: "center",
    }
  },
  avatar: {
    width: "clamp(250px, 30vw, 350px)",
    height: "auto",
    aspectRatio: "1/1",
    borderRadius: "8px",
    border: "2px solid #64ffda",
    transition: "all 0.3s ease",
    position: "relative",
    objectFit: "cover",
    boxShadow: "15px 15px 0 0 rgba(100, 255, 218, 0.2)",
    "&:hover": {
      transform: "translate(-5px, -5px)",
      boxShadow: "20px 20px 0 0 rgba(100, 255, 218, 0.2)",
    },
    "@media (max-width: 768px)": {
        width: "250px",
        height: "250px",
        boxShadow: "10px 10px 0 0 rgba(100, 255, 218, 0.2)",
        margin: "0 auto",
    }
  },

  // --- GENERAL SECTION STYLES ---
  section: {
    padding: "80px 40px",
    maxWidth: "1200px",
    margin: "0 auto",
    width: "100%",
    "@media (max-width: 960px)": {
        padding: "80px 30px", // More padding for tablet
    },
    "@media (max-width: 768px)": {
        padding: "60px 25px", // Safe padding for mobile
    }
  },
  sectionTitle: {
    display: "flex",
    alignItems: "center",
    position: "relative",
    margin: "10px 0 30px",
    width: "100%",
    fontSize: "clamp(24px, 5vw, 30px)",
    fontWeight: 700,
    color: "#e6f1ff",
    whiteSpace: "normal", // Allow wrapping if needed
    textAlign: "left",
    "&:after": {
      content: '""',
      display: "block",
      position: "relative",
      top: "-5px",
      width: "200px",
      height: "1px",
      marginLeft: "20px",
      backgroundColor: "#233554",
      "@media (max-width: 600px)": {
         display: "none", 
      }
    },
    "@media (max-width: 600px)": {
        justifyContent: "center",
        textAlign: "center",
        marginBottom: "20px",
    }
  },

  // --- GRIDS & CARDS ---
  gridContainer: {
    display: "flex", 
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "30px",
    position: "relative",
    width: "100%",
    marginTop: "20px",
  },
  
  // Projects Specific
  projectCard: {
    backgroundColor: "#112240",
    padding: "1.75rem",
    borderRadius: "8px",
    transition: "all 0.25s cubic-bezier(0.645,0.045,0.355,1)",
    width: "100%", // Fluid width for mobile
    minWidth: "280px", // Minimum accessible width
    flexGrow: 1, // Allow growth
    maxWidth: "450px", // Prevent too wide on large screens
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    boxShadow: "0 10px 30px -15px rgba(2,12,27,0.7)",
    cursor: "pointer",
    "&:hover": {
      transform: "translateY(-7px)",
      backgroundColor: "#1c2e4a",
    },
  },
  projectHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "20px",
  },
  projectFolderIcon: {
    color: "#64ffda",
    fontSize: "40px !important",
  },
  projectLinks: {
    display: "flex",
    gap: "15px",
    "& a": {
      color: "#a8b2d1",
      "&:hover": { color: "#64ffda" },
    },
  },
  projectTitle: {
    color: "#e6f1ff",
    fontSize: "20px",
    fontWeight: 700,
    marginBottom: "10px",
    "&:hover": {
      color: "#64ffda",
    },
  },
  projectDescription: {
    color: "#a8b2d1",
    fontSize: "15px",
    lineHeight: 1.5,
    marginBottom: "20px",
    textAlign: "left",
  },
  techStack: {
    display: "flex",
    flexWrap: "wrap",
    gap: "12px",
    marginTop: "auto",
    fontFamily: "'Fira Code', monospace",
    fontSize: "11px",
    color: "#8892b0",
  },

  // Skills Specific
  skillsGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill, minmax(130px, 1fr))",
      gap: "15px",
      marginTop: "20px",
  },
  techCard: {
      backgroundColor: "rgba(17, 34, 64, 0.7)",
      padding: "15px",
      borderRadius: "4px",
      textAlign: "center",
      transition: "all 0.25s ease",
      border: "1px solid #233554",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      gap: "10px",
      cursor: "default",
      "&:hover": {
          transform: "translateY(-3px)",
          border: "1px solid #64ffda",
          backgroundColor: "rgba(17, 34, 64, 1)",
          boxShadow: "0 5px 15px rgba(100, 255, 218, 0.1)",
      }
  },
  techIcon: {
      width: "40px",
      height: "40px",
      marginBottom: "5px",
  },
  techName: {
      fontFamily: "'Fira Code', monospace",
      fontSize: "12px",
      color: "#ccd6f6",
      fontWeight: 500,
  },

  // --- ABOUT SECTION ---
  aboutText: {
    color: "#8892b0",
    fontSize: "1.25rem",
    lineHeight: 1.6,
    marginBottom: "25px",
    "@media (max-width: 768px)": {
        fontSize: "1.05rem",
    }
  },

  // Experience Cards
  expCard: {
    backgroundColor: "transparent",
    padding: "0 0 25px 20px",
    borderLeft: "2px solid #233554",
    position: "relative",
    marginLeft: "5px",
    "&:last-child": {
        borderLeft: "none",
    },
    "&:before": {
        content: '""',
        position: "absolute",
        left: "-7px",
        top: "5px",
        width: "12px",
        height: "12px",
        borderRadius: "50%",
        backgroundColor: "#64ffda",
        transition: "all 0.3s ease",
    },
    "&:hover:before": {
        backgroundColor: "#e6f1ff",
        transform: "scale(1.2)",
    },
    "@media (max-width: 600px)": {
         padding: "0 0 30px 0",
         borderLeft: "none", // Remove border to fix asymmetry
         marginLeft: 0,
         "&:before": { display: "none" }, // Remove dot
    }
  },
  expTitle: {
    color: "#e6f1ff",
    fontSize: "22px",
    fontWeight: 600,
    marginBottom: "5px",
  },
  expCompany: {
    color: "#64ffda",
  },
  expDuration: {
    marginBottom: "15px",
    color: "#a8b2d1",
    fontFamily: "'Fira Code', monospace",
    fontSize: "14px",
  },
  expPoints: {
     listStyle: "none",
     padding: 0,
     margin: 0,
     textAlign: "left",
     "& li": {
         position: "relative",
         paddingLeft: "25px",
         marginBottom: "12px",
         fontSize: "18px",
         color: "#8892b0",
         "&:before": {
             content: '"▹"',
             position: "absolute",
             left: 0,
             color: "#64ffda",
             fontSize: "20px",
         }
     }
  },

  // Contact Form
  formContainer: {
      maxWidth: "500px",
      margin: "0 auto",
      textAlign: "center",
      backgroundColor: "#112240",
      padding: "40px",
      borderRadius: "8px",
      boxShadow: "0 20px 30px -15px rgba(2,12,27,0.7)",
  },
  inputField: {
      width: "100%",
      marginBottom: "15px",
      "& .MuiOutlinedInput-root": {
          color: "#e6f1ff",
          backgroundColor: "#0a192f",
          "& fieldset": { borderColor: "#233554" },
          "&:hover fieldset": { borderColor: "#64ffda" },
          "&.Mui-focused fieldset": { borderColor: "#64ffda" },
      },
      "& .MuiInputLabel-root": { color: "#8892b0", fontFamily: "'Fira Code', monospace", fontSize: "13px" },
      "& .MuiInputLabel-root.Mui-focused": { color: "#64ffda" },
  },
  submitBtn: {
      marginTop: "10px",
      padding: "12px 25px",
      border: "1px solid #64ffda",
      color: "#64ffda",
      backgroundColor: "transparent",
      fontFamily: "'Fira Code', monospace",
      fontSize: "14px",
      width: "100%",
      fontWeight: 600,
      "&:hover": {
          backgroundColor: "rgba(100,255,218,0.1)",
      }
  },

  // Footer
  footer: {
      textAlign: "center",
      padding: "20px",
      color: "#a8b2d1",
      fontFamily: "'Fira Code', monospace",
      fontSize: "12px",
      marginTop: "30px",
  },
  socialIcons: {
      display: "flex",
      justifyContent: "center",
      gap: "20px",
      marginBottom: "15px",
      "& a svg": {
          color: "#a8b2d1",
          transition: "all 0.25s",
          "&:hover": {
              color: "#64ffda",
              transform: "translateY(-3px)",
          }
      }
  }
};

export default styles;
