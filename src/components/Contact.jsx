import React, { useState } from "react";
import { Alert, Box, Button, IconButton, Snackbar, Stack, TextField, Typography } from "@mui/material";
import SendRoundedIcon from "@mui/icons-material/SendRounded";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import TerminalRoundedIcon from "@mui/icons-material/TerminalRounded";
import { sendContactEmail } from "../emailService";

const Contact = ({ profile }) => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState({ open: false, message: "", severity: "success" });

  const handleChange = (event) => {
    setFormData((current) => ({ ...current, [event.target.name]: event.target.value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    try {
      await sendContactEmail(formData);
      setFormData({ name: "", email: "", message: "" });
      setToast({ open: true, message: "Message sent successfully.", severity: "success" });
    } catch (error) {
      setToast({ open: true, message: error.message || "Unable to send message.", severity: "error" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box id="contact" component="section" sx={styles.section}>
      <Box sx={styles.panel}>
        <Typography sx={styles.eyebrow}>Contact</Typography>
        <Typography sx={styles.title}>Let us build something meaningful.</Typography>
        <Typography sx={styles.subtitle}>
          Open to full-time opportunities and product-focused engineering teams.
        </Typography>

        <Stack direction="row" spacing={1.5} sx={styles.links}>
          <IconButton component="a" href={profile.links.github} target="_blank" rel="noreferrer" sx={styles.iconBtn}><GitHubIcon /></IconButton>
          <IconButton component="a" href={profile.links.linkedin} target="_blank" rel="noreferrer" sx={styles.iconBtn}><LinkedInIcon /></IconButton>
          <IconButton component="a" href={profile.links.leetcode} target="_blank" rel="noreferrer" sx={styles.iconBtn}><TerminalRoundedIcon /></IconButton>
          <IconButton component="a" href={profile.links.email} sx={styles.iconBtn}><EmailOutlinedIcon /></IconButton>
        </Stack>

        <Box component="form" onSubmit={handleSubmit} sx={styles.form}>
          <TextField required label="Name" name="name" value={formData.name} onChange={handleChange} sx={styles.input} />
          <TextField required label="Email" name="email" type="email" value={formData.email} onChange={handleChange} sx={styles.input} />
          <TextField required multiline rows={6} label="Message" name="message" value={formData.message} onChange={handleChange} sx={styles.input} />
          <Button type="submit" variant="contained" disabled={loading} endIcon={<SendRoundedIcon />} sx={styles.button}>
            {loading ? "Sending..." : "Send Message"}
          </Button>
        </Box>
      </Box>

      <Snackbar open={toast.open} autoHideDuration={5000} onClose={() => setToast((v) => ({ ...v, open: false }))}>
        <Alert severity={toast.severity}>{toast.message}</Alert>
      </Snackbar>
    </Box>
  );
};

const styles = {
  section: { maxWidth: 1280, margin: "0 auto", padding: { xs: "0 1.25rem 5rem", md: "0 2rem 7rem" } },
  panel: { borderRadius: 6, border: "1px solid #dbe3ee", backgroundColor: "#ffffff", padding: { xs: 2.5, md: 4 }, boxShadow: "0 24px 45px rgba(15, 23, 42, 0.07)" },
  eyebrow: { color: "#2563eb", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", fontSize: "0.82rem" },
  title: { mt: 1.5, fontSize: { xs: "1.9rem", md: "2.8rem" }, fontWeight: 800, color: "#0f172a" },
  subtitle: { marginTop: 1.2, color: "#475569", maxWidth: 640 },
  links: { marginTop: 2.2 },
  iconBtn: {
    color: "#334155",
    border: "1px solid #cbd5e1",
    "&:hover": { color: "#2563eb", backgroundColor: "#eff6ff", transform: "translateY(-2px) scale(1.02)" },
  },
  form: { marginTop: 2.8, display: "grid", gap: 1.5, maxWidth: 720 },
  input: {
    "& .MuiOutlinedInput-root": {
      backgroundColor: "#fff",
      "& fieldset": { borderColor: "#dbe3ee" },
      "&:hover fieldset": { borderColor: "#2563eb" },
      "&.Mui-focused fieldset": { borderColor: "#2563eb" },
    },
  },
  button: { justifySelf: "start", boxShadow: "0 18px 35px rgba(37, 99, 235, 0.22)", "&:hover": { transform: "translateY(-2px) scale(1.02)" } },
};

export default Contact;
