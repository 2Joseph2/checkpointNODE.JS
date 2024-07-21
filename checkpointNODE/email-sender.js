const nodemailer = require('nodemailer')

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'bouslimiyoussef9@gmail.com',
      pass: 'sdujiohfoijsopf'
    }
  })
  
  const mailOptions = {
    from: 'bouslimiyoussef9@gmail.com',
    to: 'bouslimiyoussef37@gmail.com',
    subject: 'Sending Email using Node.js',
    text: 'That was easy!'
  }
  
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  })