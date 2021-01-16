const nodemailer = require('nodemailer');
const mailGun = require('nodemailer-mailgun-transport');


const auth = {
    auth: {
        api_key: '11edcb4c10e8d74fc0537e716f559c43-28d78af2-9ce8a1a6',
        domain: 'sandboxed4c489db184488aa000d927b994b171.mailgun.org'
    }
}

const transporter = nodemailer.createTransport(mailGun(auth));

const sendMail = (userName, email, item, msg, cb) => {
    const mailOptions = {
        userName,
        email,
        item,
        msg,
        to: 'Rarencibia@comcast.net',
    };

    transporter.sendMail(mailOptions, function (err,data) {
        if(err) {
            cb(err, null);
        } else{
            cb(null, data);
        }
    });

};



module.exports = sendMail;



