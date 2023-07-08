const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'some_email@gmail.com',
    pass: 'not_giving_my_password',
  },
});

const mailOptions = {
  from: 'service.client@biat.com.tn',
  to: 'ahmed.yazid@gomycode.com',
  subject: 'You just won 10k TND in our Lottery',
  text: 'Jaddet 3lik ... ',
};

transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.log('Error occurred:', error);
  } else {
    console.log('Email sent:', info.response);
  }
});