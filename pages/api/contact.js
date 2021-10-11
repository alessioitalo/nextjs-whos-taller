require('dotenv').config();
const email = process.env.NEXT_PUBLIC_EMAIL;
const pwd = process.env.NEXT_PUBLIC_PASSWORD;
export default function (req, res) {
  let nodemailer = require('nodemailer');
  const transporter = nodemailer.createTransport({
    port: 465,
    host: 'smtp.gmail.com',
    auth: {
      user: email,
      pass: pwd,
    },
    secure: true,
  });
  console.log(req)
//   const emailData = {
//     from: req.body.email,
//     to: email,
//     subject: `Message from ${req.body.name}`,
//     text: req.body.message,
//     html: <div>{req.body.message}</div>,
//   };

//   transporter.sendMail(emailData, (error, info) => {
//     if (error) {
//       console.log(error);
//     } else {
//       console.log(info);
//     }
//   });

//   res.status(200);
}

console.log(req.body);
