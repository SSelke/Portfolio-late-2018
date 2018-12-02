var express = require('express');
var router = express.Router();
var nodemailer = require("nodemailer");

router.post('/', (req, res) => {
    var output = `
        <p>You have a new contact request</p>
        <h3>Contact Details</h3>
        <ul>
            <li>Name: ${req.body.data.name}</li>
            <li>Email: ${req.body.data.email}</li>
        </ul>
        <h3>Message</h3>
        <p>${req.body.data.message}</p>
    `
   var transporter = nodemailer.createTransport({
       service: 'gmail',
       auth: {
           type: 'OAuth2',
           user: process.env.EMAIL,
           clientId: process.env.CLIENT_ID,
           clientSecret: process.env.CLIENT_SECRET,
           refreshToken: process.env.REFRESH_TOKEN
       }
   })

   var mailOptions = {
       from: 'Scott <inquery.selke@gmail.com>',
       to: 's.w.selke@gmail.com',
       subject: `Job Contact Request from ${req.body.data.name}`,
       html: output
   }

   transporter.sendMail(mailOptions, (err, res) => {
       if(err) {
           console.log(err);
       } else {
           console.log('email sent');
           res.end();
       }
   })
});

module.exports = router;