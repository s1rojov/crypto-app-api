import express from 'express';
import dotenv from 'dotenv';

// Environment variablesni yuklaymiz
dotenv.config();

import './src/bot/saver-bot.js';
import './src/bot/main-bot.js';
import router from './src/routes/index.js';

const app = express();

// Middleware - JSON va URL encoded ma'lumotlarni olish uchun
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// API route
app.use('/api', router);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Project is running on port ${PORT}`);
});
