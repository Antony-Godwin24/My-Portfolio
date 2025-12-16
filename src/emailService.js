import emailjs from "@emailjs/browser";

// Initialize EmailJS with your public key
emailjs.init("wAcnKiuMydt56B2Fl");

export const sendContactEmail = async (contactData) => {
  try {
    const { name, email, message } = contactData;

    // Parameters mapped to the template's expected fields
    const templateParams = {
      from_name: name || "Portfolio Visitor",
      reply_to: email,
      to_email: "antonygodwin08@gmail.com",
      message: message,    // Assuming 'message' or 'feedback' is used in template
      feedback: message,   // send both just in case
      page: "Portfolio Contact Section",
      timestamp: new Date().toLocaleString(),
      year: new Date().getFullYear()
    };

    // Send email using service and template IDs provided
    const result = await emailjs.send(
      "service_821pire",
      "template_l99xmlt",
      templateParams
    );

    return result;
  } catch (error) {
    console.error("Email sending failed:", error);

    if (error.status === 412 || (error.text && error.text.includes("Invalid grant"))) {
      console.error("CRITICAL: Gmail API Invalid Grant. The admin needs to reconnect the Gmail account in EmailJS dashboard.");
      throw new Error("Email service configuration error. Please contact the administrator.");
    }
    
    throw new Error("Failed to send message. Please try again.");
  }
};
