var express = require('express');
var router = express.Router();

//send Email function
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




router.post('/', function(req, res, next) {
    res.send('{}');
  });
// app.post('/email', (req, res) => {
//     const { subject, email, text } = req.body;
//     console.log('data: ', req.body);
//     sendMail(userName, email, item, msg, function (err, data) {
//       if(err) {
//         res.status(500).json({ message: 'Internal Error'});
//       }else {
//         res.json({ message: 'Email Sent! You will hear back from us shortly!'});
//       }
//     });
//   });

  module.exports = router;