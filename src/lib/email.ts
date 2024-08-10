import nodemailer from 'nodemailer'

const transport = nodemailer.createTransport({
  host: process.env.MAILTRAP_HOST,
  port: Number(process.env.MAILTRAP_PORT),
  secure: false,
  auth: {
    user: process.env.MAILTRAP_USER,
    pass: process.env.MAILTRAP_PASS
  }
})

export const sendEmail = async (to: string[], subject: string, html: string): Promise<void> => {
  try {
    await transport.sendMail({
      from: process.env.MAILTRAP_EMAIL,
      to,
      subject,
      html
    })
  } catch (error) {
    console.error(error)
  }
}
