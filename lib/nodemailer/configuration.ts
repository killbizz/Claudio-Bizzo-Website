const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  // service: "gmail",
  host: "out.alice.it",
  port: 587,
  auth: {
    user: process.env.NODEMAILER_EMAIL,
    pass: process.env.NODEMAILER_PASSWORD,
  },
});

export default transporter;