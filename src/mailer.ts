import nodemailer = require('nodemailer')
import { config } from 'dotenv'

export const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: process.env.nodemailer_user, // generated ethereal user
      pass: process.env.nodemailer_pass // generated ethereal password
    },
  });


