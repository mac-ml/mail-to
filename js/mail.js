// import required modules
const nodemailer = require('nodemailer');


function sendMail(){

    // SMTP server configuration
    let transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        secure: false,
        auth: {
            user: 'ishesabim21@gmail.com',
            pass: 'deneme'
        }
    });

    // E-mail configuratioın
    let mailOptions = {
        from: 'ishesabim21@gmail.com',
        to: 'mehmetazizcakmak21@gmail.com',
        subject: 'Deneme E-postası',
        text: 'Bu bir deneme e-postasıdır'
    };

    // Send e-mail
    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('E-posta gönderildi: ' + info.response);
        }
    });


}
