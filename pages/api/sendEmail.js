import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const { to, subject, text } = req.body;
      // return res.json(req.body);
      // Create a Nodemailer transporter using your SMTP credentials
      const transporter = nodemailer.createTransport({
        // host: "smtp.gmail.com",
        // port: 587,
        // secure: false, // Set to true if using a secure connection (e.g., SMTPS)
        service: "gmail",
        auth: {
          user: process.env.EMAIL,
          pass: process.env.PASSWORD,
        },
      });

      // Send the email
      await transporter.sendMail({
        from: "ssameerkhan525@gmail.com",
        to,
        subject,
        html: `<h2>${text}<h2><p>Our services will blow your mind. Get more info about us on www.dipixels.com</p>`,
      });

      res.status(200).json({ message: "Email sent successfully" });
    } catch (error) {
      console.error("Error sending email:", error);
      res.status(500).json({ error: "Failed to send email" });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}