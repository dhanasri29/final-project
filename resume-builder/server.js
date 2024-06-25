const express = require('express');
const bodyParser = require('body-parser');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const { PDFDocument, StandardFonts, rgb } = require('pdf-lib');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 5000;

// MongoDB Connection
mongoose.connect('mongodb://localhost:27017/resume-builder', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => console.log('Connected to MongoDB'));

// Ensure uploads directory exists
if (!fs.existsSync('./uploads')) {
  fs.mkdirSync('./uploads');
}

// Resume Schema
const resumeSchema = new mongoose.Schema({
  firstname: { type: String, required: true },
  middlename: { type: String },
  lastname: { type: String, required: true },
  image: { type: String },
  designation: { type: String, required: true },
  address: { type: String, required: true },
  email: { type: String, required: true },
  phoneno: { type: String, required: true },
  summary: { type: String, required: true },
  achievements: [{
    achieve_title: { type: String, required: true },
    achieve_description: { type: String, required: true },
  }],
  experiences: [{
    exp_title: { type: String, required: true },
    exp_organization: { type: String, required: true },
    exp_location: { type: String, required: true },
    exp_start_date: { type: Date, required: true },
    exp_end_date: { type: Date, required: true },
    exp_description: { type: String, required: true },
  }],
  educations: [{
    edu_school: { type: String, required: true },
    edu_degree: { type: String, required: true },
    edu_city: { type: String, required: true },
    edu_start_date: { type: Date, required: true },
    edu_graduation_date: { type: Date, required: true },
    edu_description: { type: String, required: true },
  }],
  projects: [{
    proj_title: { type: String, required: true },
    proj_link: { type: String, required: true },
    proj_description: { type: String, required: true },
  }],
  skills: [{
    skill: { type: String, required: true },
  }],
});

const Resume = mongoose.model('Resume', resumeSchema);

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Multer configuration for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './uploads'); // Directory to store uploaded files
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); // File naming strategy
  }
});
const upload = multer({ storage });

// Endpoint for handling image uploads
app.post('/api/upload', upload.single('image'), (req, res) => {
  const file = req.file;
  if (!file) {
    return res.status(400).send('No file uploaded.');
  }
  res.status(200).json({ message: 'File uploaded successfully.', filename: file.filename });
});

// Endpoint for handling resume data creation
app.post('/api/resume', async (req, res) => {
  try {
    const resumeData = req.body;
    const newResume = new Resume(resumeData);
    await newResume.save();
    res.status(200).json({ message: 'Resume created successfully.' });
  } catch (error) {
    console.error('Error creating resume:', error);
    res.status(500).json({ message: 'Error creating resume.' });
  }
});

// Endpoint for generating PDF
app.get('/api/download-pdf/:resumeId', async (req, res) => {
  try {
    const resumeId = req.params.resumeId;
    const resume = await Resume.findById(resumeId);
    if (!resume) {
      return res.status(404).json({ message: 'Resume not found.' });
    }

    // Create PDF
    const pdfDoc = await PDFDocument.create();
    const page = pdfDoc.addPage();
    const { width, height } = page.getSize();

    // Add content to PDF
    page.drawText(`Resume for ${resume.firstname} ${resume.lastname}`, {
      x: 50,
      y: height - 50,
      size: 24,
      font: await pdfDoc.embedFont(StandardFonts.Helvetica),
      color: rgb(0, 0, 0),
    });

    // Example: Add more content as needed from resume object

    // Save PDF to buffer
    const pdfBytes = await pdfDoc.save();

    // Set headers for file download
    res.setHeader('Content-Disposition', 'attachment; filename=resume.pdf');
    res.setHeader('Content-Type', 'application/pdf');

    // Send PDF as response
    res.status(200).send(pdfBytes);
  } catch (error) {
    console.error('Error generating PDF:', error);
    res.status(500).json({ message: 'Error generating PDF.' });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
