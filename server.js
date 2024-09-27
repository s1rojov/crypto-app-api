// server.js
import express from 'express';
import './src/bot/bot.js'; // Botni import qilish

const app = express();

// Express serverini ishga tushirish
app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});
