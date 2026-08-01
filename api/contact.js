const RESEND_API_URL = 'https://api.resend.com/emails';

function escapeHtml(value = '') {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');
}

function isEmail(value = '') {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(value).trim());
}

async function sendEmail({ to, from, replyTo, subject, html, text }) {
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
      text,
    }),
  });

  if (!response.ok) {
    const details = await response.text();
    throw new Error(`Resend error ${response.status}: ${details}`);
  }

  return response.json();
}

export default async function handler(req, res) {
  try {
    if (req.method !== 'POST') {
      return res.status(405).json({ success: false, message: 'Metodă nepermisă.' });
    }

    if (!process.env.RESEND_API_KEY) {
      return res.status(500).json({ success: false, message: 'Serviciul de email nu este configurat.' });
    }

    const toEmail = process.env.CONTACT_TO_EMAIL || process.env.ORDER_TO_EMAIL;
    const fromEmail = process.env.RESEND_FROM_EMAIL || 'Povești de Acasă <onboarding@resend.dev>';

    if (!toEmail) {
      return res.status(500).json({ success: false, message: 'Adresa de contact nu este configurată.' });
    }

    const { name = '', email = '', phone = '', message = '', website = '' } = req.body || {};
    if (String(website).trim()) {
      return res.status(200).json({ success: true });
    }

    const cleanName = String(name).trim();
    const cleanEmail = String(email).trim();
    const cleanPhone = String(phone).trim();
    const cleanMessage = String(message).trim();

    if (!cleanName || !cleanEmail || !cleanMessage) {
      return res.status(400).json({ success: false, message: 'Completează numele, emailul și mesajul.' });
    }

    if (!isEmail(cleanEmail)) {
      return res.status(400).json({ success: false, message: 'Te rugăm să verifici adresa de email.' });
    }

    const safe = {
      name: escapeHtml(cleanName),
      email: escapeHtml(cleanEmail),
      phone: escapeHtml(cleanPhone || '—'),
      message: escapeHtml(cleanMessage),
    };

    await sendEmail({
      to: [toEmail],
      from: fromEmail,
      replyTo: cleanEmail,
      subject: `Mesaj nou — ${cleanName}`,
      html: `
        <div style="font-family: Arial, sans-serif; color: #2B1B15; line-height: 1.5;">
          <h2 style="margin: 0 0 16px;">Mesaj nou - Povești de Acasă</h2>
          <p><strong>Nume:</strong> ${safe.name}</p>
          <p><strong>Email:</strong> ${safe.email}</p>
          <p><strong>Telefon:</strong> ${safe.phone}</p>
          <div style="background: #FAF1E6; border: 1px solid #F1DCC8; border-radius: 14px; padding: 16px; margin-top: 16px;">
            <p style="margin: 0 0 8px;"><strong>Mesaj</strong></p>
            <p style="margin: 0; white-space: pre-line;">${safe.message}</p>
          </div>
        </div>
      `,
      text: [
        'Mesaj nou - Povești de Acasă',
        '',
        `Nume: ${cleanName}`,
        `Email: ${cleanEmail}`,
        `Telefon: ${cleanPhone || '-'}`,
        '',
        cleanMessage,
      ].join('\n'),
    });

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error('Contact email failed:', error);
    return res.status(502).json({ success: false, message: 'Mesajul nu a putut fi trimis acum. Te rugăm să folosești WhatsApp sau emailul afișat pe site.' });
  }
}
