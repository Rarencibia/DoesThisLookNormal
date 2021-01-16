var express = require('express');
var router = express.Router();

//send Email function
// const nodemailer = require('nodemailer');
// const mailGun = require('nodemailer-mailgun-transport');

const auth = require('../routes/auth.js');


// const transporter = nodemailer.createTransport(mailGun(auth));
//
// const sendMail = (userName, email, item, msg, cb) => {
//     const mailOptions = {
//         userName,
//         email,
//         item,
//         msg,
//         to: 'Rarencibia@comcast.net',
//     };
//
//     transporter.sendMail(mailOptions, function (err,data) {
//         if(err) {
//             cb(err, null);
//         } else{
//             cb(null, data);
//         }
//     });
//
// };

router.get('/', (req, res) => {
    res.send("{}");
});
router.post('/', (req, res) => {
// console.log('data: ', req.body);
    res.send("hello");
    // const { subject, email, text } = req.body;
    // console.log('data: ', req.body);
    // sendMail(userName, email, item, msg, function (err, data) {
    //   if(err) {
    //     res.status(500).json({ message: 'Internal Error'});
    //     res.send("mail failed");
    //   }else {
    //     res.json({ message: 'Email Sent! You will hear back from us shortly!'});
    //   }
    // });
});

module.exports = router;
