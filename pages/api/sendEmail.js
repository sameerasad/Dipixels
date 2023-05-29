import nodemailer from 'nodemailer'

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const { to, subject, text } = req.body

      // Create a Nodemailer transporter using your SMTP credentials
      const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        secure: false, // Set to true if using a secure connection (e.g., SMTPS)
        auth: {
          user: 'your-email@gmail.com',
          pass: 'your-password',
        },
      })

      // Send the email
      await transporter.sendMail({
        from: 'your-email@gmail.com',
        to,
        subject,
        text,
      })

      res.status(200).json({ message: 'Email sent successfully' })
    } catch (error) {
      console.error('Error sending email:', error)
      res.status(500).json({ error: 'Failed to send email' })
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' })
  }
}
