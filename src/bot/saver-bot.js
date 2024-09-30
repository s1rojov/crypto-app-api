import { Telegraf } from 'telegraf';
import pool from "../../config/db.js";


const saverBotToken = '7949209031:AAE2CQfkiEpq1P1fzpoHQF2a_1bfsWFWa00'
const bot = new Telegraf(saverBotToken);

bot.on('channel_post', async (ctx) => {

    console.log(ctx.channelPost)
    const chatId = ctx.channelPost.message_id; // Kanal ID si
    const messageText = ctx.channelPost.caption || ''; // Xabar matnini olish

    // const query = 'INSERT INTO messages (chat_id, message_text, photo_url) VALUES ($1, $2, $3)';
    // await pool.query(query, [chatId, messageText, photo]);
});


bot.launch();