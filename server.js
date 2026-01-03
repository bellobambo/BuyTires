const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors()); 
app.use(bodyParser.json());

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'bellobambo21@gmail.com',
    pass: 'wexi ugls mrrp hhgq'    
  }
});

app.post('/send-lead', (req, res) => {
  const { name, email, phone, address, searchType, vehicleInfo, tireSize, season } = req.body;

  const mailOptions = {
    from: `"Tire Lead: ${name}" <bellobambo21@gmail.com>`, // Must be your authenticated email
    to: 'bellobambo21@gmail.com',
    replyTo: email, // This allows you to reply directly to the customer
    subject: `New Lead: ${name} (${searchType})`,
    html: `
      <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
        <h2 style="color: #1976d2;">New Registration Received</h2>
        <p><strong>Customer Name:</strong> ${name}</p>
        <p><strong>Customer Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Address:</strong> ${address}</p>
        <hr>
        <h3 style="color: #1976d2;">Search Details</h3>
        <p><strong>Search Mode:</strong> ${searchType}</p>
        <p><strong>Vehicle Info:</strong> ${vehicleInfo}</p>
        <p><strong>Tire Size:</strong> ${tireSize}</p>
        <p><strong>Season:</strong> ${season}</p>
      </div>
    `
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Nodemailer Error:", error);
      return res.status(500).send("Error sending email");
    }
    res.status(200).send("Success");
  });
});

app.listen(3000, () => console.log('Server running on http://localhost:3000'));