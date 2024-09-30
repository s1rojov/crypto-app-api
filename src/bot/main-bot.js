import { Telegraf, Markup } from 'telegraf';
import IdentifyCommand from './commands/identify.js';
import InfoCommand from './commands/info.js';

const mainBotToken='7579349147:AAH7gIfoaRqUqeaJ5_TKo8VgPIYvpx9C_Dg'

const bot = new Telegraf(mainBotToken);

// /start komandasi uchun handler
bot.start((ctx) => {
    ctx.reply(`Assalomu alaykum ${ctx.message.from.first_name}`, {
        reply_markup: {
            keyboard: [
                [
                    { text: "Identify" },
                    { text: "Info" },
                ]
            ],
            resize_keyboard: true, // Tugmalarni ekranga moslashtirish
            one_time_keyboard: true // Bir marta bosilgandan keyin yo'qoladi
        }
    });
});



//bot commands
IdentifyCommand(bot)
InfoCommand(bot)

bot.hears("Info", (ctx) => {
    ctx.reply("Info");
});

// Botni ishga tushirish
bot.launch();

// Xatolarni ushlash va loglash (ixtiyoriy)
bot.catch((err) => {
    console.log('Xatolik: ', err);
});

export default bot;
