export default function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const { email, password } = req.body;

  if (email === process.env.OWNER_EMAIL && password === process.env.OWNER_PASSWORD) {
    return res.status(200).json({ success: true, token: 'owner-token-123' });
  }

  res.status(401).json({ success: false, message: 'Invalid credentials' });
}
