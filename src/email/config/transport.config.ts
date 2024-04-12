import * as nodemailer from 'nodemailer';
import 'dotenv/config';
// Configuración para Hotmail/Outlook
export const transporterHotmail = nodemailer.createTransport({
  host: process.env.HSMTP_HOST,
  port: process.env.HSMTP_PORT,
  secure: false,
  auth: {
    user: process.env.HOTMAIL_USER,
    pass: process.env.HOTMAIL_PASS,
  },
  tls: {
    ciphers: 'SSLv3',
    rejectUnauthorized: false,
  },
});
// Configuración para Gmail
export const transporterGmail = nodemailer.createTransport({
  host: process.env.GSMTP_HOST,
  port: process.env.GSMTP_PORT,
  secure: true,
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_PASS,
  },
});
