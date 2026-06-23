const RESEND_API_URL = 'https://api.resend.com/emails';

function escapeHtml(value = '') {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');
}

async function sendEmail({ to, from, replyTo, subject, html }) {
  const response = await fetch(RESEND_API_URL, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from,
      to,
      reply_to: replyTo,
      subject,
      html,
    }),
  });

  if (!response.ok) {
    const details = await response.text();
    throw new Error(`Resend error ${response.status}: ${details}`);
  }

  return response.json();
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Metodă nepermisă.' });
  }

  if (!process.env.RESEND_API_KEY) {
    return res.status(500).json({ success: false, message: 'RESEND_API_KEY lipsește din configurare.' });
  }

  const toEmail = process.env.CONTACT_TO_EMAIL || process.env.ORDER_TO_EMAIL;
  const fromEmail = process.env.RESEND_FROM_EMAIL || 'Povești de Acasă <onboarding@resend.dev>';

  if (!toEmail) {
    return res.status(500).json({ success: false, message: 'CONTACT_TO_EMAIL lipsește din configurare.' });
  }

  const { name = '', email = '', phone = '', message = '' } = req.body || {};

  if (!name || !email || !message) {
    return res.status(400).json({ success: false, message: 'Completează numele, emailul și mesajul.' });
  }

  const safe = {
    name: escapeHtml(name),
    email: escapeHtml(email),
    phone: escapeHtml(phone || '—'),
    message: escapeHtml(message),
  };

  await sendEmail({
    to: [toEmail],
    from: fromEmail,
    replyTo: email,
    subject: `Mesaj nou — ${name}`,
    html: `
      <h2>Mesaj nou — Povești de Acasă</h2>
      <p><strong>Nume:</strong> ${safe.name}</p>
      <p><strong>Email:</strong> ${safe.email}</p>
      <p><strong>Telefon:</strong> ${safe.phone}</p>
      <p><strong>Mesaj:</strong><br>${safe.message.replaceAll('\n', '<br>')}</p>
    `,
  });

  return res.status(200).json({ success: true });
}
