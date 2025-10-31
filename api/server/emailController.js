// server/emailController.js
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
import path from "path";
import { fileURLToPath } from "url";
dotenv.config();

const __dirname = path.dirname(fileURLToPath(import.meta.url));
dotenv.config({ path: path.join(__dirname, ".env") });


const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT || 465),
  secure: process.env.SMTP_SECURE === "true",
  auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
  family: 4,
  tls: { servername: process.env.SMTP_HOST },
});
transporter
  .verify()
  .then(() => console.log("SMTP ready:", process.env.SMTP_HOST, process.env.SMTP_PORT))
  .catch((err) => console.error("SMTP verify failed:", err.message));

/**
 * Handles general contact form (first form)
 */
export const sendGeneralMessage = async (req, res) => {
  try {
    const { name, email, phone, subject, interest, message } = req.body || {};

    if (!name || !email || !subject) {
      return res.status(400).json({ success: false, error: "Fusha të paplota." });
    }

    const esc = (s = "") =>
      String(s)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");

    const ip =
      req.headers["x-forwarded-for"]?.toString().split(",")[0]?.trim() ||
      req.socket?.remoteAddress ||
      "N/A";
    const ua = req.headers["user-agent"] || "N/A";

    const textBody = `
Kontakt i ri:

Emri: ${name}
Email: ${email}
Telefoni: ${phone || "N/A"}
Subjekti: ${subject}
Interesimi: ${interest || "N/A"}

Mesazhi:
${message || "N/A"}

--- Meta ---
IP: ${ip}
UA: ${ua}
    `.trim();

    const htmlBody = `
<!doctype html>
<html lang="sq">
  <head><meta charset="utf-8" /><title>Kontakt: ${esc(subject)}</title></head>
  <body style="margin:0;padding:24px;background:#f7f6fb;font-family:Inter,system-ui,-apple-system,Segoe UI,Roboto,Ubuntu,Cantarell,Noto Sans,sans-serif;color:#3b2f52;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
      <tr><td align="center">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:720px;background:#fff7ff;border:1px solid rgba(162,125,218,0.2);border-radius:16px;box-shadow:0 8px 24px rgba(92,52,146,0.12);overflow:hidden">
          <tr>
            <td style="padding:18px 24px;background:linear-gradient(90deg,#5c3492,#a27dda)">
              <h1 style="margin:0;font-size:18px;color:#fff;">Kontakt: ${esc(subject)}</h1>
              <p style="margin:4px 0 0 0;font-size:13px;color:rgba(255,255,255,0.9)">Mesazh i ri nga forma e kontaktit.</p>
            </td>
          </tr>
          <tr><td style="padding:24px">
            <table role="presentation" width="100%" style="border-collapse:separate;border-spacing:0 12px">
              <tr><td style="width:220px;color:#5c3492;font-weight:600;">Emri</td><td style="background:#fff;border:1px solid rgba(162,125,218,0.2);border-radius:10px;padding:10px 12px;color:#6b5aa0;">${esc(name)}</td></tr>
              <tr><td style="color:#5c3492;font-weight:600;">Email</td><td style="background:#fff;border:1px solid rgba(162,125,218,0.2);border-radius:10px;padding:10px 12px;color:#6b5aa0;">${esc(email)}</td></tr>
              <tr><td style="color:#5c3492;font-weight:600;">Telefoni</td><td style="background:#fff;border:1px solid rgba(162,125,218,0.2);border-radius:10px;padding:10px 12px;color:#6b5aa0;">${esc(phone || "N/A")}</td></tr>
              <tr><td style="color:#5c3492;font-weight:600;">Interesimi</td><td style="background:#fff;border:1px solid rgba(162,125,218,0.2);border-radius:10px;padding:10px 12px;color:#6b5aa0;">${esc(interest || "N/A")}</td></tr>
              <tr><td style="color:#5c3492;font-weight:600;vertical-align:top;">Mesazhi</td><td style="background:#fff;border:1px solid rgba(162,125,218,0.2);border-radius:10px;padding:12px;color:#3b2f52;white-space:pre-wrap;">${esc(message || "N/A")}</td></tr>
            </table>
            <div style="margin-top:18px;background:#ffffff;border:1px solid rgba(162,125,218,0.2);border-radius:12px;padding:12px 14px;">
              <div style="font-weight:600;color:#5c3492;margin-bottom:6px;">Meta</div>
              <div style="color:#6b5aa0;font-size:13px;line-height:1.5;">
                <div><strong>IP:</strong> ${esc(ip)}</div>
                <div><strong>UA:</strong> ${esc(ua)}</div>
              </div>
            </div>
          </td></tr>
          <tr><td style="padding:14px 24px;background:#ffffff;border-top:1px solid rgba(162,125,218,0.15);color:#6b5aa0;font-size:12px;">Ky email u dërgua nga forma e kontaktit.</td></tr>
        </table>
      </td></tr>
    </table>
  </body>
</html>
    `.trim();

    const mailOptions = {
      from: process.env.SMTP_FROM || process.env.SMTP_USER,
      replyTo: `"${name}" <${email}>`,
      to: process.env.TO_EMAIL,
      subject: `Kontakt: ${subject}`,
      text: textBody,
      html: htmlBody,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log("General message email sent:", info.messageId);
    return res.status(200).json({ success: true, message: "Mesazhi u dërgua me sukses." });
  } catch (error) {
    console.error("sendGeneralMessage error:", error);
    return res.status(500).json({ success: false, error: "Dështoi dërgimi i mesazhit." });
  }
};




/** Simple course registration form */
export const sendCourseRegistration = async (req, res) => {
  try {
    const { fullName, email, phone, selectedCourseTitle } = req.body || {};

    if (!fullName || !email || !selectedCourseTitle) {
      return res.status(400).json({ success: false, error: "Fusha të paplota." });
    }

    const esc = (s = "") =>
      String(s)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");

    const ip =
      req.headers["x-forwarded-for"]?.toString().split(",")[0]?.trim() ||
      req.socket?.remoteAddress ||
      "N/A";
    const ua = req.headers["user-agent"] || "N/A";

    const textBody = `
Regjistrim i ri në kurs:

Emri i plotë: ${fullName}
Email: ${email}
Telefoni: ${phone || "N/A"}
Kursi i Zgjedhur: ${selectedCourseTitle}

--- Meta ---
IP: ${ip}
UA: ${ua}
    `.trim();

    const htmlBody = `
<!doctype html>
<html lang="sq">
  <head><meta charset="utf-8" /><title>Regjistrim në Kurs</title></head>
  <body style="margin:0;padding:24px;background:#f7f6fb;font-family:Inter,system-ui,-apple-system,Segoe UI,Roboto,Ubuntu,Cantarell,Noto Sans,sans-serif;color:#3b2f52;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
      <tr><td align="center">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:720px;background:#fff7ff;border:1px solid rgba(162,125,218,0.2);border-radius:16px;box-shadow:0 8px 24px rgba(92,52,146,0.12);overflow:hidden">
          <tr>
            <td style="padding:18px 24px;background:linear-gradient(90deg,#5c3492,#a27dda)">
              <h1 style="margin:0;font-size:18px;color:#fff;">Regjistrim në Kurs</h1>
              <p style="margin:4px 0 0 0;font-size:13px;color:rgba(255,255,255,0.9)">Formular i ri regjistrimi.</p>
            </td>
          </tr>
          <tr><td style="padding:24px">
            <table role="presentation" width="100%" style="border-collapse:separate;border-spacing:0 12px">
              <tr><td style="width:220px;color:#5c3492;font-weight:600;">Emri i plotë</td><td style="background:#fff;border:1px solid rgba(162,125,218,0.2);border-radius:10px;padding:10px 12px;color:#6b5aa0;">${esc(fullName)}</td></tr>
              <tr><td style="color:#5c3492;font-weight:600;">Email</td><td style="background:#fff;border:1px solid rgba(162,125,218,0.2);border-radius:10px;padding:10px 12px;color:#6b5aa0;">${esc(email)}</td></tr>
              <tr><td style="color:#5c3492;font-weight:600;">Telefoni</td><td style="background:#fff;border:1px solid rgba(162,125,218,0.2);border-radius:10px;padding:10px 12px;color:#6b5aa0;">${esc(phone || "N/A")}</td></tr>
              <tr><td style="color:#5c3492;font-weight:600;">Kursi i Zgjedhur</td><td style="background:#fff;border:1px solid rgba(162,125,218,0.2);border-radius:10px;padding:10px 12px;color:#6b5aa0;">${esc(selectedCourseTitle)}</td></tr>
            </table>
            <div style="margin-top:18px;background:#ffffff;border:1px solid rgba(162,125,218,0.2);border-radius:12px;padding:12px 14px;">
              <div style="font-weight:600;color:#5c3492;margin-bottom:6px;">Meta</div>
              <div style="color:#6b5aa0;font-size:13px;line-height:1.5;">
                <div><strong>IP:</strong> ${esc(ip)}</div>
                <div><strong>UA:</strong> ${esc(ua)}</div>
              </div>
            </div>
          </td></tr>
          <tr><td style="padding:14px 24px;background:#ffffff;border-top:1px solid rgba(162,125,218,0.15);color:#6b5aa0;font-size:12px;">Ky email u dërgua nga forma e regjistrimit të kursit.</td></tr>
        </table>
      </td></tr>
    </table>
  </body>
</html>
    `.trim();

    const mailOptions = {
      from: process.env.SMTP_FROM || process.env.SMTP_USER,
      replyTo: `"${fullName}" <${email}>`,
      to: process.env.TO_EMAIL,
      subject: `Regjistrim në Kurs: ${selectedCourseTitle}`,
      text: textBody,
      html: htmlBody,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log("Course registration email sent:", info.messageId);
    return res.status(200).json({ success: true, message: "Regjistrimi u dërgua me sukses." });
  } catch (error) {
    console.error("sendCourseRegistration error:", error);
    return res.status(500).json({ success: false, error: "Dështoi dërgimi i regjistrimit." });
  }
};


/** Full application form (JSON) */
export const sendApplicationForm = async (req, res) => {
  try {
    if (!req.body || Object.keys(req.body).length === 0) {
      return res.status(400).json({
        success: false,
        error: "Body is empty. Make sure you POST JSON (Content-Type: application/json).",
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

    if (!firstName || !lastName || !email || !selectedCourseTitle) {
      return res.status(400).json({ success: false, error: "Fusha të paplota." });
    }

    const esc = (s = "") =>
      String(s)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");

    const ip =
      req.headers["x-forwarded-for"]?.toString().split(",")[0]?.trim() ||
      req.socket?.remoteAddress ||
      "N/A";
    const ua = req.headers["user-agent"] || "N/A";

    const textBody = `
Aplikim i ri:

--- Të dhënat personale ---
Emri: ${firstName}
Mbiemri: ${lastName}
Datëlindja: ${birthDate || "N/A"}
Gjinia: ${gender || "N/A"}
Qyteti: ${city || "N/A"}
Adresa: ${address || "N/A"}

--- Kontakti ---
Email: ${email}
Telefoni: ${phone || "N/A"}

--- Programi ---
Kursi: ${selectedCourseTitle || "N/A"}
Niveli: ${level || "N/A"}
Orari i preferuar: ${schedule || "N/A"}
Muaji i nisjes: ${startMonth || "N/A"}

--- Edukimi & Puna ---
Arsimi: ${education || "N/A"}
Punësim aktual: ${employed || "N/A"}

--- Përvoja / Motivimi ---
${experience || "N/A"}

--- Marrëdhënia ---
Si na gjeti: ${heardFrom || "N/A"}

--- Meta ---
IP: ${ip}
UA: ${ua}
    `.trim();

    const htmlBody = `
<!doctype html>
<html lang="sq">
  <head><meta charset="utf-8" /><title>Aplikim: ${esc(selectedCourseTitle || "Kurs")}</title></head>
  <body style="margin:0;padding:24px;background:#f7f6fb;font-family:Inter,system-ui,-apple-system,Segoe UI,Roboto,Ubuntu,Cantarell,Noto Sans,sans-serif;color:#3b2f52;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
      <tr><td align="center">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:720px;background:#fff7ff;border:1px solid rgba(162,125,218,0.2);border-radius:16px;box-shadow:0 8px 24px rgba(92,52,146,0.12);overflow:hidden">
          <tr>
            <td style="padding:18px 24px;background:linear-gradient(90deg,#5c3492,#a27dda)">
              <h1 style="margin:0;font-size:18px;color:#fff;">Aplikim i Ri: ${esc(selectedCourseTitle || "Kurs")}</h1>
              <p style="margin:4px 0 0 0;font-size:13px;color:rgba(255,255,255,0.9)">Formular i ri aplikimi i plotë.</p>
            </td>
          </tr>
          <tr><td style="padding:24px">
            <!-- Personal -->
            <div style="font-weight:700;color:#5c3492;margin-bottom:8px;">Të dhënat personale</div>
            <table role="presentation" width="100%" style="border-collapse:separate;border-spacing:0 12px">
              <tr><td style="width:220px;color:#5c3492;font-weight:600;">Emri</td><td style="background:#fff;border:1px solid rgba(162,125,218,0.2);border-radius:10px;padding:10px 12px;color:#6b5aa0;">${esc(firstName)}</td></tr>
              <tr><td style="color:#5c3492;font-weight:600;">Mbiemri</td><td style="background:#fff;border:1px solid rgba(162,125,218,0.2);border-radius:10px;padding:10px 12px;color:#6b5aa0;">${esc(lastName)}</td></tr>
              <tr><td style="color:#5c3492;font-weight:600;">Datëlindja</td><td style="background:#fff;border:1px solid rgba(162,125,218,0.2);border-radius:10px;padding:10px 12px;color:#6b5aa0;">${esc(birthDate || "N/A")}</td></tr>
              <tr><td style="color:#5c3492;font-weight:600;">Gjinia</td><td style="background:#fff;border:1px solid rgba(162,125,218,0.2);border-radius:10px;padding:10px 12px;color:#6b5aa0;">${esc(gender || "N/A")}</td></tr>
              <tr><td style="color:#5c3492;font-weight:600;">Qyteti</td><td style="background:#fff;border:1px solid rgba(162,125,218,0.2);border-radius:10px;padding:10px 12px;color:#6b5aa0;">${esc(city || "N/A")}</td></tr>
              <tr><td style="color:#5c3492;font-weight:600;">Adresa</td><td style="background:#fff;border:1px solid rgba(162,125,218,0.2);border-radius:10px;padding:10px 12px;color:#6b5aa0;">${esc(address || "N/A")}</td></tr>
            </table>

            <!-- Contact -->
            <div style="font-weight:700;color:#5c3492;margin:18px 0 8px;">Kontakti</div>
            <table role="presentation" width="100%" style="border-collapse:separate;border-spacing:0 12px">
              <tr><td style="width:220px;color:#5c3492;font-weight:600;">Email</td><td style="background:#fff;border:1px solid rgba(162,125,218,0.2);border-radius:10px;padding:10px 12px;color:#6b5aa0;">${esc(email)}</td></tr>
              <tr><td style="color:#5c3492;font-weight:600;">Telefoni</td><td style="background:#fff;border:1px solid rgba(162,125,218,0.2);border-radius:10px;padding:10px 12px;color:#6b5aa0;">${esc(phone || "N/A")}</td></tr>
            </table>

            <!-- Program -->
            <div style="font-weight:700;color:#5c3492;margin:18px 0 8px;">Programi</div>
            <table role="presentation" width="100%" style="border-collapse:separate;border-spacing:0 12px">
              <tr><td style="width:220px;color:#5c3492;font-weight:600;">Kursi</td><td style="background:#fff;border:1px solid rgba(162,125,218,0.2);border-radius:10px;padding:10px 12px;color:#6b5aa0;">${esc(selectedCourseTitle || "N/A")}</td></tr>
              <tr><td style="color:#5c3492;font-weight:600;">Niveli</td><td style="background:#fff;border:1px solid rgba(162,125,218,0.2);border-radius:10px;padding:10px 12px;color:#6b5aa0;">${esc(level || "N/A")}</td></tr>
              <tr><td style="color:#5c3492;font-weight:600;">Orari i preferuar</td><td style="background:#fff;border:1px solid rgba(162,125,218,0.2);border-radius:10px;padding:10px 12px;color:#6b5aa0;">${esc(schedule || "N/A")}</td></tr>
              <tr><td style="color:#5c3492;font-weight:600;">Muaji i nisjes</td><td style="background:#fff;border:1px solid rgba(162,125,218,0.2);border-radius:10px;padding:10px 12px;color:#6b5aa0;">${esc(startMonth || "N/A")}</td></tr>
            </table>

            <!-- Education & Work -->
            <div style="font-weight:700;color:#5c3492;margin:18px 0 8px;">Edukimi & Puna</div>
            <table role="presentation" width="100%" style="border-collapse:separate;border-spacing:0 12px">
              <tr><td style="width:220px;color:#5c3492;font-weight:600;">Arsimi</td><td style="background:#fff;border:1px solid rgba(162,125,218,0.2);border-radius:10px;padding:10px 12px;color:#6b5aa0;">${esc(education || "N/A")}</td></tr>
              <tr><td style="color:#5c3492;font-weight:600;">Punësim aktual</td><td style="background:#fff;border:1px solid rgba(162,125,218,0.2);border-radius:10px;padding:10px 12px;color:#6b5aa0;">${esc(employed || "N/A")}</td></tr>
            </table>

            <!-- Experience -->
            <div style="font-weight:700;color:#5c3492;margin:18px 0 8px;">Përvoja / Motivimi</div>
            <div style="background:#fff;border:1px solid rgba(162,125,218,0.2);border-radius:10px;padding:12px;color:#3b2f52;white-space:pre-wrap;">
              ${esc(experience || "N/A")}
            </div>

            <!-- Relationship -->
            <div style="font-weight:700;color:#5c3492;margin:18px 0 8px;">Marrëdhënia</div>
            <table role="presentation" width="100%" style="border-collapse:separate;border-spacing:0 12px">
              <tr><td style="width:220px;color:#5c3492;font-weight:600;">Si na gjeti</td><td style="background:#fff;border:1px solid rgba(162,125,218,0.2);border-radius:10px;padding:10px 12px;color:#6b5aa0;">${esc(heardFrom || "N/A")}</td></tr>
            </table>

            <!-- Meta -->
            <div style="margin-top:18px;background:#ffffff;border:1px solid rgba(162,125,218,0.2);border-radius:12px;padding:12px 14px;">
              <div style="font-weight:600;color:#5c3492;margin-bottom:6px;">Meta</div>
              <div style="color:#6b5aa0;font-size:13px;line-height:1.5;">
                <div><strong>IP:</strong> ${esc(ip)}</div>
                <div><strong>UA:</strong> ${esc(ua)}</div>
              </div>
            </div>
          </td></tr>
          <tr><td style="padding:14px 24px;background:#ffffff;border-top:1px solid rgba(162,125,218,0.15);color:#6b5aa0;font-size:12px;">Ky email u dërgua nga forma e aplikimit.</td></tr>
        </table>
      </td></tr>
    </table>
  </body>
</html>
    `.trim();

    const mailOptions = {
      from: process.env.SMTP_FROM || process.env.SMTP_USER,
      replyTo: `"${firstName} ${lastName}" <${email}>`,
      to: process.env.TO_EMAIL,
      subject: `Aplikim i Ri: ${selectedCourseTitle || "Kurs"}`,
      text: textBody,
      html: htmlBody,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log("Application email sent:", info.messageId);
    return res.status(200).json({ success: true, message: "Aplikimi u dërgua me sukses." });
  } catch (error) {
    console.error("sendApplicationForm error:", error);
    return res.status(500).json({ success: false, error: "Dështoi dërgimi i aplikimit." });
  }
};


export const sendBrochureRequest = async (req, res) => {
  try {
    console.log("sendBrochureRequest body:", req.body);

    const {
      fullName,
      email,
      phone,
      hp,                 // honeypot
      brochurePath,       // optional
      marketingConsent,   
    } = req.body || {};

    if (hp) return res.status(200).json({ success: true, message: "OK" });

    if (!fullName || !email || !phone) {
      return res.status(400).json({ success: false, error: "Fusha të paplota." });
    }

    // Basic HTML escape to keep layout safe
    const esc = (s = "") =>
      String(s)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");

    const ip =
      req.headers["x-forwarded-for"]?.toString().split(",")[0]?.trim() ||
      req.socket?.remoteAddress ||
      "N/A";
    const ua = req.headers["user-agent"] || "N/A";

    const brochure = brochurePath || "/Brochure.pdf";
    const consentText = marketingConsent ? "PO (pranon kontaktim)" : "JO (nuk pranon kontaktim)";

    // -------- Plain text (fallback) --------
    const textBody = `
Kërkesë e re për shkarkim broshure:

Emri i plotë: ${fullName}
Email: ${email}
Telefoni: ${phone}
Pëlqim për komunikime: ${consentText}

Broshura: ${brochure}

--- Meta ---
IP: ${ip}
UA: ${ua}
    `.trim();

    // -------- HTML email (Afrodite card style) --------
    const htmlBody = `
<!doctype html>
<html lang="sq">
  <head>
    <meta charset="utf-8" />
    <title>Kërkesë për Broshurë</title>
    <meta name="color-scheme" content="light only" />
  </head>
  <body style="margin:0;padding:24px;background:#f7f6fb;font-family:Inter,system-ui,-apple-system,Segoe UI,Roboto,Ubuntu,Cantarell,Noto Sans,sans-serif;color:#3b2f52;">
    <table role="presentation" cellpadding="0" cellspacing="0" width="100%">
      <tr>
        <td align="center">
          <!-- Card wrapper -->
          <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="max-width:720px;background:#fff7ff;border:1px solid rgba(162,125,218,0.2);border-radius:16px;box-shadow:0 8px 24px rgba(92,52,146,0.12);overflow:hidden">
            <!-- Header (gradient) -->
            <tr>
              <td style="padding:18px 24px;background:linear-gradient(90deg,#5c3492,#a27dda)">
                <h1 style="margin:0;font-size:18px;line-height:1.4;color:#fff;">Kërkesë për Broshurë</h1>
                <p style="margin:4px 0 0 0;font-size:13px;color:rgba(255,255,255,0.9)">
                  Një përdorues ka plotësuar formularin e shkarkimit të broshurës.
                </p>
              </td>
            </tr>

            <!-- Content -->
            <tr>
              <td style="padding:24px">
                <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="border-collapse:separate;border-spacing:0 12px">
                  <tr>
                    <td style="width:220px;color:#5c3492;font-weight:600;">Emri i plotë</td>
                    <td style="background:#ffffff;border:1px solid rgba(162,125,218,0.2);border-radius:10px;padding:10px 12px;color:#6b5aa0;">${esc(fullName)}</td>
                  </tr>
                  <tr>
                    <td style="color:#5c3492;font-weight:600;">Email</td>
                    <td style="background:#ffffff;border:1px solid rgba(162,125,218,0.2);border-radius:10px;padding:10px 12px;color:#6b5aa0;">${esc(email)}</td>
                  </tr>
                  <tr>
                    <td style="color:#5c3492;font-weight:600;">Telefoni</td>
                    <td style="background:#ffffff;border:1px solid rgba(162,125,218,0.2);border-radius:10px;padding:10px 12px;color:#6b5aa0;">${esc(phone)}</td>
                  </tr>
                  <tr>
                    <td style="color:#5c3492;font-weight:600;">Pëlqim për komunikime</td>
                    <td style="background:${marketingConsent ? "rgba(92,52,146,0.06)" : "#ffffff"};border:1px solid rgba(162,125,218,0.25);border-radius:10px;padding:10px 12px;color:${marketingConsent ? "#5c3492" : "#6b5aa0"};">
                      ${marketingConsent ? "PO – pranon kontaktim" : "JO – nuk pranon kontaktim"}
                    </td>
                  </tr>
                  <tr>
                    <td style="color:#5c3492;font-weight:600;">Broshura</td>
                    <td style="background:#ffffff;border:1px solid rgba(162,125,218,0.2);border-radius:10px;padding:10px 12px;">
                      <a href="${esc(brochure)}" style="color:#5c3492;text-decoration:none;border-bottom:1px dashed #a27dda;">${esc(brochure)}</a>
                    </td>
                  </tr>
                </table>

                <!-- Meta card -->
                <div style="margin-top:18px;background:#ffffff;border:1px solid rgba(162,125,218,0.2);border-radius:12px;padding:12px 14px;">
                  <div style="font-weight:600;color:#5c3492;margin-bottom:6px;">Meta</div>
                  <div style="color:#6b5aa0;font-size:13px;line-height:1.5;">
                    <div><strong>IP:</strong> ${esc(ip)}</div>
                    <div><strong>UA:</strong> ${esc(ua)}</div>
                  </div>
                </div>
              </td>
            </tr>

            <!-- Footer note -->
            <tr>
              <td style="padding:14px 24px;background:#ffffff;border-top:1px solid rgba(162,125,218,0.15);color:#6b5aa0;font-size:12px;">
                Ky email u dërgua nga formulari i shkarkimit të broshurës në faqen tuaj.
              </td>
            </tr>
          </table>

          <!-- small spacing -->
          <div style="height:24px;"></div>
        </td>
      </tr>
    </table>
  </body>
</html>
    `.trim();

    const mailOptions = {
      from: process.env.SMTP_FROM || process.env.SMTP_USER,   // authenticated sender
      replyTo: `"${fullName}" <${email}>`,                    // user address for quick reply
      to: process.env.TO_EMAIL,
      subject: `Kërkesë për Broshurë (${fullName})`,
      text: textBody,
      html: htmlBody,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log("Brochure email sent:", info.messageId);

    return res.status(200).json({ success: true, message: "Dërguar me sukses." });
  } catch (error) {
    console.error("sendBrochureRequest error:", error);
    return res.status(500).json({ success: false, error: "Dështoi dërgimi i email-it." });
  }
};




