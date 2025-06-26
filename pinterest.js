require('dotenv').config();
import crypto from 'crypto';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { email, phone, value, currency = 'BRL', plano = '' } = req.body;

  if (!email || !phone || !value) {
    return res.status(400).json({ error: 'Parâmetros obrigatórios ausentes: email, phone ou value' });
  }

  const PIXEL_ID = process.env.PIXEL_ID;
  const token = process.env.PINTEREST_TOKEN;

  const hash = (data) =>
    crypto.createHash('sha256').update(data.trim().toLowerCase()).digest('hex');

  const user_data = {
    em: [hash(email)],
    ph: [hash(phone)],
  };

  let event_source_url = 'https://app.monetizze.com.br/r/AFE24474208'; // padrão

  switch (plano) {
    case '1pote':
      event_source_url = 'https://app.monetizze.com.br/r/AFE24474208/?u=YQ70664';
      break;
    case '3potes':
      event_source_url = 'https://app.monetizze.com.br/r/AFE24474208?u=c&pl=UR202157';
      break;
    case '5potes':
      event_source_url = 'https://app.monetizze.com.br/r/AFE24474208?u=c&pl=EU202158';
      break;
    case '10potes':
      event_source_url = 'https://app.monetizze.com.br/r/AFE24474208?u=c&pl=UP202160';
      break;
  }

  const payload = {
    event_name: 'Purchase',
    event_time: Math.floor(Date.now() / 1000),
    action_source: 'website',
    event_source_url,
    user_data,
    custom_data: {
      value: value,
      currency: currency,
    },
  };

  try {
    const pinterestResponse = await fetch(`https://api.pinterest.com/v5/ad_accounts/${PIXEL_ID}/events`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ data: [payload] }),
    });

    const result = await pinterestResponse.json();

    if (!pinterestResponse.ok) {
      return res.status(pinterestResponse.status).json({ success: false, error: result });
    }

    res.status(200).json({ success: true, result });
  } catch (error) {
    console.error('Erro ao enviar evento para o Pinterest:', error);
    res.status(500).json({ error: 'Erro ao enviar evento para o Pinterest' });
  }
}