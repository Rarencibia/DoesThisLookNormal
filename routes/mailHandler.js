var express = require('express');
var router = express.Router();
const sendMail = require('../public/javascripts/mail.js')


/* GET About Us page. */
router.get('/', function(req, res, next) {
  res.render('shop', {});
});





//send Email function
router.get('/', function(req, res, next) {
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