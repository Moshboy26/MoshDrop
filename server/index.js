import express from 'express';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// --------------------
// Owner credentials
// --------------------
const OWNER_EMAIL = process.env.OWNER_EMAIL;
const OWNER_PASSWORD = process.env.OWNER_PASSWORD;

// --------------------
// Nodemailer setup
// --------------------
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS, // Gmail App Password
  },
});

// --------------------
// Owner login
// --------------------
app.post('/api/login', (req, res) => {
  const { email, password } = req.body;
  if (email === OWNER_EMAIL && password === OWNER_PASSWORD) {
    return res.json({ success: true, token: 'owner-token-123' });
  }
  res.status(401).json({ success: false, message: 'Invalid credentials' });
});

// --------------------
// Send anonymous message
// --------------------
app.post('/api/send-message', async (req, res) => {
  const { text } = req.body;
  if (!text) return res.status(400).json({ error: 'Message cannot be empty.' });

  try {
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER, // all messages go to your Gmail
      subject: `New Anonymous Message`,
      text,
    });
    res.json({ success: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to send email.' });
  }
});

// --------------------
// Start server
// --------------------
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
