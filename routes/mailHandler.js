var express = require('express');
var router = express.Router();

//send Email function
const nodemailer = require('nodemailer');
const mailGun = require('nodemailer-mailgun-transport');

const auth = require('../routes/secretAuth.js');
const transporter = nodemailer.createTransport(mailGun(auth));

const sendMail = (email, userName, item, msg, cb) => {
    const mailOptions = {
        from: email,
        to: 'Rarencibia@comcast.net',
        userName,
        item,
        msg,
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
    var email = "Rarencibia@comcast.net";
    var userName = "userName";
    var item = "item";
    var msg = "msg";

    const {email, userName, item, msg} = req.body;
    console.log('req.body: ', req.body);



    // res.send("hello");
    res.status(500).json({ message: 'test_error'});

    sendMail(email, userName, item, msg, function (err, data) {
        if(err) {
            res.status(500).json({ message: 'Internal Error'});
        }else {
            res.json({ message: 'Email Sent! You will hear back from us shortly!'});
        }
    });
});

module.exports = router;
