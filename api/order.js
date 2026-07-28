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
      orderItems = '',
      total = '',
    } = req.body || {};

    const cleanName = String(name).trim();
    const cleanEmail = String(email).trim();
    const cleanPhone = String(phone).trim();
    const cleanDeliveryMethod = String(deliveryMethod).trim();
    const cleanDeliveryDetails = String(deliveryDetails).trim();
    const cleanNotes = String(notes).trim();

    if (!cleanName || !cleanEmail || !cleanPhone || !cleanDeliveryDetails) {
      return res.status(400).json({ success: false, message: 'Completează numele, emailul, telefonul și detaliile de livrare.' });
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

    const ownerHtml = `
      <h2>Comandă nouă — Povești de Acasă</h2>
      <p><strong>Nume:</strong> ${safe.name}</p>
      <p><strong>Email:</strong> ${safe.email}</p>
      <p><strong>Telefon:</strong> ${safe.phone}</p>
      <p><strong>Livrare:</strong> ${safe.deliveryMethod}</p>
      <p><strong>Detalii livrare:</strong><br>${safe.deliveryDetails.replaceAll('\n', '<br>')}</p>
      <p><strong>Observații:</strong><br>${safe.notes.replaceAll('\n', '<br>')}</p>
      <p><strong>Produse:</strong> ${safe.orderItems}</p>
      <p><strong>Total:</strong> ${safe.total}</p>
      <hr>
      <p>Următorul pas: contactează clientul pentru confirmare, apoi pregătește coletul.</p>
    `;

    await sendEmail({
      to: [toEmail],
      from: fromEmail,
      replyTo: cleanEmail,
      subject: `Comandă nouă — ${cleanName}`,
      html: ownerHtml,
    });

    try {
      await sendEmail({
        to: [cleanEmail],
        from: fromEmail,
        replyTo: toEmail,
        subject: 'Am primit cererea ta de comandă — Povești de Acasă',
        html: `
          <h2>Îți mulțumim, ${safe.name}!</h2>
          <p>Am primit cererea ta pentru <strong>${safe.orderItems}</strong>.</p>
          <p>Te vom contacta în curând pentru confirmarea comenzii și a livrării.</p>
          <p><strong>Total:</strong> ${safe.total}</p>
        `,
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
