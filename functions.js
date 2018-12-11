var nodemailer = require('nodemailer');

exports.contactEmail = (name, company, email, phone, message) => {
    var transporter = nodemailer.createTransport({
      service: 'yahoo',
      auth: {
        user: process.env.MAIL_USER || 'jakesclients@yahoo.com',
        pass: process.env.MAIL_PASS || 'X13Bilxzs'
      }
    });
    var mailOptions = {
      from: email,
      to: 'jacobg@overturepromo.com', //hr@overturepromo.com 
      subject: 'You have a new contact request',
      html: `<h4>name:</h4> ${name} <h4>company:</h4> ${company} <h4>email:</h4> ${email} <h4>phone:</h4> ${phone} <h4>message:</h4> ${message}`,
    };
    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log('error is ' + error);
      } else {
        console.log('Email sent: ' + info.response);
      }
    });
  };

  exports.applyEmail = (position, first, last, email, phone, movies, coverLetter, resume) => {
    var transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS
      }
    });
    var mailOptions = {
      from: email,
      to: 'jacobg@overturepromo.com',
      subject: `You have a new application for ${position}`,
      html: `<h4>First:</h4> ${first} 
             <h4>Last:</h4> ${last}
             <h4>Email:</h4> ${email} 
             <h4>Phone:</h4> ${phone} 
             <h4>Movies:</h4> ${movies}
             <h4>Cover Letter</h4> ${coverLetter} `,
      attachments: [{
        href: resume
      }]
    };
    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log('error is ' + error);
      } else {
        console.log('Email sent: ' + info.response);
      }
    });
  };

//   const transporter = nodemailer.createTransport({
    // host: 'smtp.ethereal.email',
    // port: 587,
    // auth: {
    //     user: 'l4ulcdjrietnchxt@ethereal.email',
    //     pass: 'vKRrRj9Jdj63BsUR5c'
    // }
// });


  // service: 'gmail',
  // auth: {
  //   user: auth.USERNAME,
  //   pass: auth.PASSWORD
  // }

  // host: 'mail.overturepromo.com',
  // port: 25,
  // secure: false,
  // ignoreTLS: true

  // attachments: [
  //   {   // file on disk as an attachment
  //     filename: 'beer.jpg',
  //     path: './beer.jpg' // stream this file
  //   },
  // ]  