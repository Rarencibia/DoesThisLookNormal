var express = require('express');
var router = express.Router();

//send Email function
const nodemailer = require('nodemailer');
const mailGun = require('nodemailer-mailgun-transport');

const auth = require('../routes/secretAuth.js');
const transporter = nodemailer.createTransport(mailGun(auth));

const sendMail = (email, userName, item, msg, cb) => {
    const mailOptions = {
        to: 'Rarencibia@comcast.net',
        from: 'Rarencibia@comcast.net',
        subject: "order request: " + item,
        text: "email: " +email + "\n" + "item: " + item + "\n" + "message: " + msg
    };

    transporter.sendMail(mailOptions, function (err,data) {
        if(err) {
            console.log(JSON.stringify(data));
            console.log(err);
            console.log(data);
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
    // var email = "Rarencibia@comcast.net";
    // var userName = "userName";
    // var item = "item";
    // var msg = "msg";

    const {email, userName, item, msg} = req.body;
    console.log('req.body: ', req.body);



    // res.send("hello");
    // res.status(500).json({ message: 'test_error'});

    sendMail(email, userName, item, msg, function (err, data) {
        if(err) {
            console.log(err);
            console.log("Interal Error, the mailer did not work.");
            res.status(500).json({ message: 'Email did not send, try again later.'});
            
        }else {
            console.log("Email Sent, Thank you so much.");
            res.status(200)({ message: 'Email Sent! You will hear back from us shortly!'});
        }
    });
});

module.exports = router;
