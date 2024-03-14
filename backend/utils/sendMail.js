const nodemailer = require("nodemailer");

const sendMail = async (options) => {
  const transporter = nodemailer.createTransport({
    host: process.env.SMPT_HOST,
    port: process.env.SMPT_PORT,
    service: process.env.SMPT_SERVICE,
    auth: {
      user: process.env.SMPT_MAIL,
      pass: process.env.SMPT_PASSWORD,
    },
  });
  const mailOptions = {
    from: process.env.SMPT_MAIL, // sender address
    to: options.email, // list of receivers
    subject: options.subject, // Subject
    text: options.message, // activation message
  };
  await transporter.sendMail(mailOptions);
};
module.exports = sendMail;
