import express from 'express';
import cors from 'cors';
import { sendGeneralMessage, sendCourseRegistration, sendApplicationForm } from './emailController.js';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use(express.urlencoded({ extended: true }));

// Routes
app.post('/api/contact', sendGeneralMessage);
app.post('/api/register-course', sendCourseRegistration);
app.post('/api/register', sendApplicationForm);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
