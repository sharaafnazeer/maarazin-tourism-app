const {readFileSync} = require("fs");
const {compile} = require("handlebars");
const {sendMail} = require("./mailer");
const {join} = require("path");

const sendCustomerBookingMail = (reservationInfo) => {
    // Construct the absolute file path to the template file
    const templatePath = join(__dirname, 'templates', 'booking-placed.hbs');
    const templateSource = readFileSync(templatePath, 'utf-8');

    // Compile the Handlebars template
    const template = compile(templateSource);

    // Render the template with the provided data
    const htmlContent = template({
        name: reservationInfo?.customer?.firstName,
        refNumber: reservationInfo?.refNumber,
        email: reservationInfo?.customer?.email
    });

    const mailOptions = {
        from: "", // sender address
        to: reservationInfo?.customer?.email, // receiver email
        subject: "Your Booking is Placed!", // Subject line
        html: htmlContent,
    }

    sendMail(mailOptions, (info) => {
        console.log("Customer email sent successfully");
        console.log("MESSAGE ID: ", info.messageId);
        console.log("DETAILS: ", info.mailDetails);
    }).then(() => console.log("Success"));
}

const sendRegistrationConfirmationMail = (userData, token) => {
    // Construct the absolute file path to the template file
    const templatePath = join(__dirname, 'templates', 'register-confirmation.hbs');
    const templateSource = readFileSync(templatePath, 'utf-8');

    // Compile the Handlebars template
    const template = compile(templateSource);

    // Render the template with the provided data
    const htmlContent = template({
        name: userData?.firstName,
        email: userData?.email,
        url: `${process.env.REGISTER_CONFIRM_URL}${token}`
    });

    const mailOptions = {
        from: "", // sender address
        to: userData?.email, // receiver email
        subject: "Greetings from Rexe Holidays!", // Subject line
        html: htmlContent,
    }

    sendMail(mailOptions, (info) => {
        console.log("Registration email sent successfully");
        console.log("MESSAGE ID: ", info.messageId);
        console.log("DETAILS: ", info.mailDetails);
    }).then(() => console.log("Success"));
}

const sendAdminBookingMail = (recipients = [], reservationInfo) => {

    // Construct the absolute file path to the template file
    const templatePath = join(__dirname, 'templates', 'booking-placed-panel.hbs');
    const templateSource = readFileSync(templatePath, 'utf-8');

    // Compile the Handlebars template
    const template = compile(templateSource);

    // Render the template with the provided data
    const htmlContent = template({
        refNumber: reservationInfo?.refNumber,
        customerEmail: reservationInfo?.customer?.email || "",
        customerContact: reservationInfo?.customer?.phoneNumber || "",
        customerName: `${reservationInfo?.customer?.firstName} ${reservationInfo?.customer?.lastName}`,
    });

    const mailOptions = {
        from: "", // sender address
        to: recipients, // receiver email
        subject: "You have received a new booking!", // Subject line
        html: htmlContent,
    }

    sendMail(mailOptions, (info) => {
        console.log("Admin emails sent successfully");
        console.log("MESSAGE ID: ", info.messageId);
        console.log("DETAILS: ", info.mailDetails);
    }).then(() => console.log("Success"));

}

module.exports = {
    sendAdminBookingMail,
    sendCustomerBookingMail,
    sendRegistrationConfirmationMail
}