import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import { sendGeneralMessage, sendCourseRegistration } from './emailController.js';

// const express = require('express');
// const cors = require('cors');
// const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

// Routes
app.post('/api/contact', sendGeneralMessage);
app.post('/api/register-course', sendCourseRegistration);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
