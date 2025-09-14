import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function MessagePage() {
  const [text, setText] = useState('');
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  async function sendMessage(e) {
    e.preventDefault();
    if (!text.trim()) return setError('Write something fun before sending 😎');

    setLoading(true);
    setError('');
    try {
      const res = await fetch('/api/send-message', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ text }),
});

      const data = await res.json();
      if (data.success) {
        setSent(true);
        setText('');
      } else {
        setError(data.error || 'Failed to send 😢');
      }
    } catch (err) {
      console.error(err);
      setError('Oops! Something went wrong 😬');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-8 flex flex-col items-center">
        <h2 className="text-2xl font-bold text-teal-500 mb-4 text-center">Drop Your Secret Message ✉️</h2>
        <p className="text-gray-500 mb-6 text-center">
          Let it all out! Anonymous vibes only, hosted by Moshboy😎!
        </p>

        <form onSubmit={sendMessage} className="w-full flex flex-col items-center">
          <textarea
            rows="5"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Type your message here..."
            className="w-full p-4 border border-gray-300 rounded-xl focus:ring focus:ring-teal-300 focus:border-teal-500 mb-4 resize-none text-gray-700"
          />
          {error && <p className="text-red-500 text-sm mb-3">{error}</p>}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-teal-500 text-white py-3 rounded-xl hover:bg-teal-600 transition mb-4 shadow-lg"
          >
            {loading ? 'Sending...' : 'Send Message'}
          </button>
        </form>

        {sent && (
          <p className="text-green-500 text-center font-medium mb-4">✅ Your message has been sent!</p>
        )}

        <button
          onClick={() => navigate('/')}
          className="w-full text-teal-500 border border-teal-500 py-3 rounded-xl hover:bg-teal-50 transition"
        >
          ← Back
        </button>
      </div>
    </div>
  );
}
