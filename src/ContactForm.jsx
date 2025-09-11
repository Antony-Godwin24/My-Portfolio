import React from "react";
import { Box, Typography, TextField, Button, Paper } from "@mui/material";
import styles from "./style";

export default function ContactForm() {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/mgvldyja", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (response.ok) {
        alert("🎉 Message sent successfully! We'll get back to you soon.");
        form.reset();
      } else {
        alert(
          "❌ Something went wrong. Please try again or contact us directly."
        );
      }
    } catch (error) {
      alert("❌ Network error. Please check your connection and try again.");
    }
  };

  return (
    <Box
      id="contact"
      sx={styles.sectionWithImage}
      style={{
        backgroundImage: `url(https://images.unsplash.com/photo-1581092334565-5cbfefc5809b?auto=format&fit=crop&w=2000&q=80)`,
      }}
    >
      <Box sx={styles.sectionContent}>
        <Typography variant="h4" sx={styles.sectionTitle}>
          Contact Me
        </Typography>
        <Paper
          elevation={0}
          sx={{
            ...styles.contactFormCard,
            width: "100%",
            maxWidth: "600px",
          }}
        >
          <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 3,
            }}
          >
            <TextField
              name="name"
              label="Your Name"
              variant="outlined"
              fullWidth
              sx={styles.contactFormField}
              required
            />
            <TextField
              name="email"
              label="Your Email"
              type="email"
              variant="outlined"
              fullWidth
              sx={styles.contactFormField}
              required
            />
            <TextField
              name="message"
              label="Message"
              multiline
              rows={4}
              variant="outlined"
              fullWidth
              sx={styles.contactFormField}
              required
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              sx={styles.contactFormButton}
            >
              Send Message
            </Button>
          </Box>
        </Paper>
      </Box>
    </Box>
  );
}
