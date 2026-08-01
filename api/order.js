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

function normalizePhone(value = '') {
  return String(value).replace(/[^\d+]/g, '');
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

    const toEmail = process.env.ORDER_TO_EMAIL || process.env.CONTACT_TO_EMAIL;
    const fromEmail = process.env.RESEND_FROM_EMAIL || 'Povești de Acasă <onboarding@resend.dev>';

    if (!toEmail) {
      return res.status(500).json({ success: false, message: 'Adresa pentru comenzi nu este configurată.' });
    }

    const {
      name = '',
      email = '',
      phone = '',
      deliveryMethod = '',
      deliveryDetails = '',
      notes = '',
      website = '',
      orderItems = '',
      total = '',
    } = req.body || {};

    if (String(website).trim()) {
      return res.status(200).json({ success: true });
    }

    const cleanName = String(name).trim();
    const cleanEmail = String(email).trim();
    const cleanPhone = String(phone).trim();
    const cleanDeliveryMethod = String(deliveryMethod).trim();
    const cleanDeliveryDetails = String(deliveryDetails).trim();
    const cleanNotes = String(notes).trim();

    if (!cleanName || !cleanEmail || !cleanPhone || !cleanDeliveryDetails) {
      return res.status(400).json({ success: false, message: 'Completează numele, emailul, telefonul și detaliile de livrare.' });
    }

    if (!isEmail(cleanEmail)) {
      return res.status(400).json({ success: false, message: 'Te rugăm să verifici adresa de email.' });
    }

    if (normalizePhone(cleanPhone).length < 8) {
      return res.status(400).json({ success: false, message: 'Te rugăm să verifici numărul de telefon.' });
    }

    const safe = {
      name: escapeHtml(cleanName),
      email: escapeHtml(cleanEmail),
      phone: escapeHtml(cleanPhone),
      deliveryMethod: escapeHtml(cleanDeliveryMethod),
      deliveryDetails: escapeHtml(cleanDeliveryDetails),
      notes: escapeHtml(cleanNotes || '—'),
      orderItems: escapeHtml(orderItems),
      total: escapeHtml(total),
    };

    const ownerText = [
      'Comandă nouă - Povești de Acasă',
      '',
      `Nume: ${cleanName}`,
      `Email: ${cleanEmail}`,
      `Telefon: ${cleanPhone}`,
      `Livrare: ${cleanDeliveryMethod}`,
      '',
      'Detalii livrare:',
      cleanDeliveryDetails,
      '',
      `Observații: ${cleanNotes || '-'}`,
      `Produse: ${orderItems}`,
      `Total: ${total}`,
      '',
      'Următorul pas: contactează clientul pentru confirmare, apoi pregătește coletul.',
    ].join('\n');

    const ownerHtml = `
      <div style="font-family: Arial, sans-serif; color: #2B1B15; line-height: 1.5;">
        <h2 style="margin: 0 0 16px;">Comandă nouă - Povești de Acasă</h2>
        <table style="width: 100%; border-collapse: collapse; margin-bottom: 18px;">
          <tr><td style="padding: 8px 0; color: #7A6A5F;">Nume</td><td style="padding: 8px 0;"><strong>${safe.name}</strong></td></tr>
          <tr><td style="padding: 8px 0; color: #7A6A5F;">Email</td><td style="padding: 8px 0;">${safe.email}</td></tr>
          <tr><td style="padding: 8px 0; color: #7A6A5F;">Telefon</td><td style="padding: 8px 0;"><strong>${safe.phone}</strong></td></tr>
          <tr><td style="padding: 8px 0; color: #7A6A5F;">Livrare</td><td style="padding: 8px 0;"><strong>${safe.deliveryMethod}</strong></td></tr>
          <tr><td style="padding: 8px 0; color: #7A6A5F;">Produse</td><td style="padding: 8px 0;">${safe.orderItems}</td></tr>
          <tr><td style="padding: 8px 0; color: #7A6A5F;">Total</td><td style="padding: 8px 0;"><strong>${safe.total}</strong></td></tr>
        </table>
        <div style="background: #FAF1E6; border: 1px solid #F1DCC8; border-radius: 14px; padding: 16px; margin-bottom: 16px;">
          <p style="margin: 0 0 8px;"><strong>Detalii livrare</strong></p>
          <p style="margin: 0; white-space: pre-line;">${safe.deliveryDetails}</p>
        </div>
        <div style="background: #FDF8F3; border: 1px solid #F1DCC8; border-radius: 14px; padding: 16px; margin-bottom: 16px;">
          <p style="margin: 0 0 8px;"><strong>Observații client</strong></p>
          <p style="margin: 0; white-space: pre-line;">${safe.notes}</p>
        </div>
        <p style="margin: 0;"><strong>De făcut:</strong> verifică datele, contactează clientul dacă lipsește ceva, apoi pregătește AWB-ul.</p>
      </div>
    `;

    await sendEmail({
      to: [toEmail],
      from: fromEmail,
      replyTo: cleanEmail,
      subject: `Comandă nouă — ${cleanName}`,
      html: ownerHtml,
      text: ownerText,
    });

    try {
      const clientText = [
        `Bună, ${cleanName}!`,
        '',
        'Am primit cererea ta de comandă pentru Povești de Acasă.',
        `Produse: ${orderItems}`,
        `Total: ${total}`,
        `Livrare: ${cleanDeliveryMethod}`,
        '',
        'Detalii livrare:',
        cleanDeliveryDetails,
        '',
        'Te vom contacta în curând pentru confirmare.',
      ].join('\n');

      await sendEmail({
        to: [cleanEmail],
        from: fromEmail,
        replyTo: toEmail,
        subject: 'Am primit cererea ta de comandă — Povești de Acasă',
        html: `
          <div style="font-family: Arial, sans-serif; color: #2B1B15; line-height: 1.5;">
            <h2 style="margin: 0 0 16px;">Îți mulțumim, ${safe.name}!</h2>
            <p>Am primit cererea ta pentru <strong>${safe.orderItems}</strong>.</p>
            <p><strong>Total:</strong> ${safe.total}</p>
            <p><strong>Livrare:</strong> ${safe.deliveryMethod}</p>
            <div style="background: #FAF1E6; border: 1px solid #F1DCC8; border-radius: 14px; padding: 16px; margin: 16px 0;">
              <p style="margin: 0 0 8px;"><strong>Detalii livrare primite</strong></p>
              <p style="margin: 0; white-space: pre-line;">${safe.deliveryDetails}</p>
            </div>
            <p>Te vom contacta în curând pentru confirmarea comenzii și a livrării.</p>
            <p>Dacă ai observat o greșeală în datele de mai sus, răspunde la acest email sau scrie-ne pe WhatsApp la 0741 312 827.</p>
          </div>
        `,
        text: clientText,
      });
    } catch (error) {
      console.error('Confirmarea către client nu a putut fi trimisă:', error);
    }

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error('Order email failed:', error);
    return res.status(502).json({ success: false, message: 'Cererea nu a putut fi trimisă acum. Te rugăm să comanzi direct pe WhatsApp la 0741 312 827.' });
  }
}
