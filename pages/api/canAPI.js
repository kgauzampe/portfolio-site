var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'mpumelelo.mpe@umuzi.org',
    pass: 'umuzicohort16'
  }
});

var mailOptions = {
  from: 'mpumelelo.mpe@umuzi.org',
  to: 'kgauza.mpe@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
}); 