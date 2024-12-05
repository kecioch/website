"use server";

import nodemailer from "nodemailer";

interface Mail {
  senderEmail: string;
  subject: string;
  message: string;
}

const send = async (mail: Mail) => {
  console.log("SEND MAIL");
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.NODEMAILER_USERNAME,
      pass: process.env.NODEMAILER_PASSWORD,
    },
  });

  const info = await transporter.sendMail({
    from: `"kevincioch.com" <${process.env.NODEMAILER_USERNAME}>`,
    to: process.env.NODEMAILER_SEND_TO,
    priority: "high",
    subject: "Kontaktformular | " + mail.subject,
    text: `E-Mail: ${mail.senderEmail} \nNachricht:\n${mail.message}`,
  });

  console.log("Mail sent: %s", info.messageId);

  return info;
};

export const sendMail = async (mail: Mail) => {
  return await send(mail).catch(console.error);
};
