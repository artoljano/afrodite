import express from 'express';
import cors from 'cors';
import {
  sendGeneralMessage,
  sendCourseRegistration,
  sendApplicationForm,
  sendBrochureRequest,              
} from './emailController.js';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Simple log so you see requests arrive
app.use((req, _res, next) => { console.log(req.method, req.url); next(); });

// Routes
app.post('/api/contact', sendGeneralMessage);
app.post('/api/register-course', sendCourseRegistration);
app.post('/api/register', sendApplicationForm);
app.post('/api/brochure', sendBrochureRequest);  

app.get('/health', (_req, res) => res.json({ ok: true })); // handy

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
