require('dotenv').config({ path: '.env.local' });
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

// Create Express App
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  console.error('Please define the MONGODB_URI environment variable inside .env.local');
  process.exit(1);
}

mongoose.connect(MONGODB_URI)
  .then(() => console.log('✅ Connected to MongoDB'))
  .catch((err) => console.error('❌ MongoDB connection error:', err));

// Mongoose Schema & Model for Enquiry
const enquirySchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

// Avoid OverwriteModelError if the model is already defined
const Enquiry = mongoose.models.Enquiry || mongoose.model('Enquiry', enquirySchema);

// POST /api/enquiry
app.post('/api/enquiry', async (req, res) => {
  try {
    const { name, email, phone } = req.body;

    // 1. Validate required fields
    if (!name || !email || !phone) {
      return res.status(400).json({ error: 'Name, email, and phone are required.' });
    }

    // 2. Accept data and save to MongoDB
    const newEnquiry = await Enquiry.create({ name, email, phone });

    // 3. Return success response
    return res.status(201).json({ 
      message: 'Enquiry submitted successfully!',
      data: newEnquiry
    });
  } catch (error) {
    console.error('Error saving enquiry:', error);
    return res.status(500).json({ error: 'An error occurred while processing your request.' });
  }
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Express server running on http://localhost:${PORT}`);
});
