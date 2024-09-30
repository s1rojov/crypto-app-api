
import express from 'express';
import dotenv from 'dotenv';
import './src/bot/saver-bot.js';
import './src/bot/main-bot.js'


dotenv.config();

const app = express();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log('Project is running');
});
