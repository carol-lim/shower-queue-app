import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

import queueRoutes from './routes/queueRoutes';

dotenv.config();


const app = express();
const PORT = process.env.PORT || 3000;

// Allow all CORS requests
app.use(cors());

app.use('/queue', queueRoutes);

app.listen(PORT, () => {
  console.log(`Backend is running on http://localhost:${PORT}`);
});