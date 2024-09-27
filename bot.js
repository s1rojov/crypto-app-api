// bot.js
import { Telegraf } from 'telegraf';
import { saveMessage } from './db.js';

const bot = new Telegraf('7949209031:AAE2CQfkiEpq1P1fzpoHQF2a_1bfsWFWa00'); // O'z bot tokeningizni kiriting

// Telegram bot kanal postini qabul qilish
bot.on('channel_post', async (ctx) => {

    console.log(ctx.channelPost)
    const chatId = ctx.channelPost.message_id; // Kanal ID si
    const messageText = ctx.channelPost.caption || ''; // Xabar matnini olish
    let photo = null; // Rasm URL manzili uchun o'zgaruvchi

    // // Agar postda rasm bo'lsa
    if (ctx.channelPost.photo.length) {
        photo = JSON.stringify(ctx.channelPost.photo[0])
    }

    // console.log(messageText)
    // // Xabarni bazaga saqlash
    await saveMessage(chatId, messageText, photo);
});


// Botni ishga tushirish
bot.launch();
