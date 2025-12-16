import React, { useState } from "react";
import { Box, TextField, Button, Snackbar, Alert } from "@mui/material";
import { Send } from "@mui/icons-material";
import styles from "./style";
import { sendContactEmail } from "./emailService";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [loading, setLoading] = useState(false);
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success"
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      await sendContactEmail(formData);
      setSnackbar({
        open: true,
        message: "Message sent successfully!",
        severity: "success"
      });
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      setSnackbar({
        open: true,
        message: error.message || "Failed to send message.",
        severity: "error"
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit}>
      <Box sx={styles.inputField}>
        <TextField
          fullWidth
          label="Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          variant="outlined"
          required
        />
      </Box>
      <Box sx={styles.inputField}>
        <TextField
          fullWidth
          label="Email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          variant="outlined"
          required
        />
      </Box>
      <Box sx={styles.inputField}>
        <TextField
          fullWidth
          label="Message"
          name="message"
          multiline
          rows={4}
          value={formData.message}
          onChange={handleChange}
          variant="outlined"
          required
        />
      </Box>
      
      <Button 
        type="submit" 
        sx={styles.submitBtn} 
        disabled={loading}
        endIcon={<Send />}
      >
        {loading ? "Sending..." : "Send Message"}
      </Button>

      <Snackbar 
        open={snackbar.open} 
        autoHideDuration={6000} 
        onClose={() => setSnackbar({ ...snackbar, open: false })}
      >
        <Alert severity={snackbar.severity} sx={{ width: '100%' }}>
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Box>
  );
}
