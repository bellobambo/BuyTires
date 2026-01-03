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

// Add timeout configuration
transporter.set('timeout', 10000); // 10 second timeout

app.post('/send-lead', async (req, res) => {
  const { name, email, phone, address, searchType, vehicleInfo, tireSize, season } = req.body;

  // Validation
  if (!name || !email || !phone) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  const mailOptions = {
    from: `"Tire Lead: ${name}" <bellobambo21@gmail.com>`,
    to: 'phashdigital@gmail.com',
    replyTo: email,
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
        <hr>
        <p><small>Received: ${new Date().toLocaleString()}</small></p>
      </div>
    `
  };

  try {
    // Add timeout for email sending
    const timeoutPromise = new Promise((_, reject) => {
      setTimeout(() => reject(new Error('Email sending timeout')), 10000);
    });

    const sendEmailPromise = transporter.sendMail(mailOptions);
    
    await Promise.race([sendEmailPromise, timeoutPromise]);
    
    console.log(`Email sent successfully for ${name}`);
    res.status(200).json({ success: true, message: 'Lead sent successfully' });
    
  } catch (error) {
    console.error("Email sending error:", error);
    res.status(500).json({ 
      success: false, 
      error: error.message || 'Error sending email' 
    });
  }
});

// Health check endpoint
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok', timestamp: new Date().toISOString() });
});

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
  console.log('Health check: http://localhost:3000/health');
});