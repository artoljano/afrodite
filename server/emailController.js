// server/emailController.js
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
import path from "path";
import { fileURLToPath } from "url";
dotenv.config();

const __dirname = path.dirname(fileURLToPath(import.meta.url));
dotenv.config({ path: path.join(__dirname, ".env") });


const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,                  // "smtp.gmail.com"
  port: Number(process.env.SMTP_PORT || 465),   // 465
  secure: process.env.SMTP_SECURE === "true",   // true
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
  family: 4,                                    // prefer IPv4 (avoid ::1)
  tls: { servername: process.env.SMTP_HOST },   // proper SNI
});

transporter
  .verify()
  .then(() => console.log("SMTP ready:", process.env.SMTP_HOST, process.env.SMTP_PORT))
  .catch((err) => console.error("SMTP verify failed:", err.message));

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



/** Simple course registration form */
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

/** Full application form (JSON) */
export const sendApplicationForm = async (req, res) => {
  if (!req.body || Object.keys(req.body).length === 0) {
    return res.status(400).json({
      success: false,
      error: 'Body is empty. Make sure you POST JSON (Content-Type: application/json).',
    });
  }

  const {
    firstName,
    lastName,
    birthDate,
    gender,
    city,
    address,
    email,
    phone,
    selectedCourseTitle,
    level,
    schedule,
    startMonth,
    education,
    employed,
    experience,
    heardFrom,
   
  } = req.body;

  const mailOptions = {
    from: `"${firstName} ${lastName}" <${email}>`,
    to: process.env.TO_EMAIL,
    subject: `Aplikim i Ri: ${selectedCourseTitle || "Kurs"}`,
    text: `
--- Të dhënat personale ---
Emri: ${firstName}
Mbiemri: ${lastName}
Datëlindja: ${birthDate || "N/A"}
Gjinia: ${gender || "N/A"}
Qyteti: ${city || "N/A"}
Adresa: ${address || "N/A"}

--- Kontakti ---
Email: ${email}
Telefoni: ${phone}

--- Programi ---
Kursi: ${selectedCourseTitle || "N/A"}
Niveli: ${level || "N/A"}
Orari i preferuar: ${schedule || "N/A"}
Muaji i nisjes: ${startMonth || "N/A"}

--- Edukimi & Puna ---
Arsimi: ${education || "N/A"}
Punësim aktual: ${employed || "N/A"}
Përvoja / Motivimi:
${experience || "N/A"}

--- Marrëdhënia ---
Si na gjeti: ${heardFrom || "N/A"}
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({
      success: true,
      message: "Aplikimi u dërgua me sukses.",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      error: "Dështoi dërgimi i aplikimit.",
    });
  }
};


