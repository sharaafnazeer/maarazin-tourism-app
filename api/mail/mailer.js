const nodemailer = require('nodemailer');

// create reusable transporter object using the default SMTP transport
const transporter = nodemailer.createTransport({
    service: "gmail",
    host: process.env.MAIL_HOST,
    port: process.env.MAIL_PORT,
    secure: false,
    auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASSWORD,
    },
});

const sendMail = async (mailDetails, callback) => {
    try {
        const info = await transporter.sendMail(mailDetails)
        callback({...info, mailDetails});
    } catch (error) {
        console.log(error);
    }
};

module.exports = {
    sendMail,
}