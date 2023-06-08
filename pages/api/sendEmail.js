import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const { to, subject, text, name } = req.body;
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

      const recipients = [
        {
          email: to,
          subject,
          content: `<h2>${text}<h2><p>Our services will blow your mind. Get more info about us on www.dipixels.com</p>`,
        },
        {
          email: process.env.EMAIL,
          subject: "User Contacted for some concerns",
          content: `<p>A person ${name}, having email ${to} contacted you for some concerns.</p>`,
        },
      ];
      recipients.forEach((recipient) => {
        const mailOptions = {
          from: process.env.EMAIL,
          to: recipient.email,
          subject: recipient.subject,
          html: recipient.content,
        };

        transporter.sendMail(mailOptions, (error, info) => {
          if (error) {
            console.log(`Error sending email to ${recipient.email}:`, error);
          } else {
            console.log(`Email sent to ${recipient.email}:`, info.response);
          }
        });
      });

      // Send the email
      // await transporter.sendMail({
      //   from: "ssameerkhan525@gmail.com",
      //   to,
      //   subject,
      //   html: `<h2>${text}<h2><p>Our services will blow your mind. Get more info about us on www.dipixels.com</p>`,
      // });

      res.status(200).json({ message: "Email sent successfully" });
    } catch (error) {
      console.error("Error sending email:", error);
      res.status(500).json({ error: "Failed to send email" });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}