var express = require('express');
var app = express();

var bodyParser = require('body-parser');

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
var port = process.env.PORT || 8081;        // set our port
var router = express.Router();


var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
   host: 'mail.privateemail.com',
   port: 465,
   secure: true, // true for 465, false for other ports
   auth: {
     user: 'admin@sajjanrajvaidya.com', // your domain email address
     pass: 'SRVadmin2018^' // your password
   }
 });

router.use(function(req, res, next) {
  // do logging
  console.log('Something is happening.');
  next(); // make sure we go to the next routes and don't stop here
});

router.get('/', function(req, res) {
  res.json({ message: 'hooray! welcome to our api!' });   
});

app.use('/api', router);
app.listen(port);
console.log('Magic happens on port ' + port);



router.route('/email')

    .post(function(req, res) {

      
        var name = req.body.name;  
        var email = req.body.email;
        var message = req.body.message;

        var mailOptions = {
          from: '"Sajjan Raj Vaidya" <admin@sajjanrajvaidya.com>',
          to: 'avnvbhatta@gmail.com',
          subject: "Fanmail",
          html : "<b>Sender: </b>"+ name + "<br><b>Email: </b> "+ email + "<br><b>Message: </b>" + message
        };
       
        transporter.sendMail(mailOptions, function (err, info) {
          if (err) {
            console.log(err);
            return ('Error while sending email' + err)
          }
          else {
            console.log("Email sent");
            return ('Email sent')
          }
        });
        

    });

 



 
