// server/emailController.js
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

/**
 * Handles general contact form (first form)
 */
export const sendGeneralMessage = async (req, res) => {
  const { name, email, phone, subject, interest, message } = req.body;

  const mailOptions = {
    from: `"${name}" <${email}>`,
    to: process.env.TO_EMAIL,
    subject: `Kontakt: ${subject}`,
    text: `
Emri: ${name}
Email: ${email}
Telefoni: ${phone}
Interesimi: ${interest}
Mesazhi:
${message}
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ success: true, message: 'Mesazhi u dërgua me sukses.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: 'Dështoi dërgimi i mesazhit.' });
  }
};

/**
 * Handles course registration form (second form)
 */
export const sendCourseRegistration = async (req, res) => {
  const { fullName, email, phone, selectedCourseTitle } = req.body;

  const mailOptions = {
    from: `"${fullName}" <${email}>`,
    to: process.env.TO_EMAIL,
    subject: `Regjistrim në Kurs`,
    text: `
Emri i plotë: ${fullName}
Email: ${email}
Telefoni: ${phone}
Kursi i Zgjedhur: ${selectedCourseTitle}
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ success: true, message: "Regjistrimi u dërgua me sukses." });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: "Dështoi dërgimi i regjistrimit." });
  }
};

