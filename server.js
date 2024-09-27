// server.js
import express from 'express';
import dotenv from 'dotenv'; // .env faylini ES Modules bilan import qilish
import './bot.js';


// .env faylini yuklash
dotenv.config();

const app = express();

// Express serverini ishga tushirish
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log('Project is running');
});
