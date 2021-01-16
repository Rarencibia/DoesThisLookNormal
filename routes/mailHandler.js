var express = require('express');
var router = express.Router();

//send Email function
const nodemailer = require('nodemailer');
const mailGun = require('nodemailer-mailgun-transport');

const auth = require('../routes/auth.js');
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

router.get('/', (req, res) => {
    res.send("{}");
});

router.post('/', (req, res) => {
    var userName = "userName";
    var item = "item";
    var subject = "subject";
    var email = "email";
    var text = "text";

    console.log('req.body: ', req.body);



    res.send("hello");
    res.status(500).json({ message: 'test_error'});

    sendMail(userName, email, item, text, function (err, data) {
        if(err) {
            res.status(500).json({ message: 'Internal Error'});
        }else {
            res.json({ message: 'Email Sent! You will hear back from us shortly!'});
        }
    });
});

module.exports = router;
