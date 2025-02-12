import { Telegraf } from 'telegraf';
import PlansCommand from './commands/plans.js';
import InfoCommand from './commands/info.js';

const mainBotToken='7810591719:AAEAU1iYrN_om1vzVKvUrdnqs4YzhRW7rxw'
const postVideoUrl = 'https://t.me/wydboi_resource/280'

const bot = new Telegraf(mainBotToken);

// /start komandasi uchun handler
bot.start(async (ctx) => {
    await ctx.reply(`
        Assalomu Alaykum! 'Ilkhomjon Ibrokhimov yopiq hamjamiyat '  obuna botiga xush kelibsiz.🎉
Ushbu yopiq hamjamiyatda  siz Aksiya va Kripto bo'yicha eng so'ngi bilim va yangiliklarga ega bo'lish imkoniyatini qo'lga kiritasiz. Shu qatori klubga a'zo bo'lish orqali: 
            
📚 Aksiya va Kripto bo'yicha darslar
    🟢Fundamental analiz
    🟢Texnik analiz  
🎙 Jonli efir va savol-javoblar
📊 Signal va savdo g’oyalar 
💬 Yopiq hamjamiyatimiz  treyderlari va kuratorlari bilan 24/7 aloqaga ega bo'lasiz
💸 O'zimiz investitsiya qilib turgan o’rta va uzoq muddatli coinlar ro'yxati 
        
yana boshqa ko'plab imkoniyatlar sizni kutib turibdi!
        
Yopiq hamjamiyatimiz haqida to'liqroq ma'lumot olish va qanday qilib obuna bo'lish haqida bilish uchun quyidagi video orqali bilib oling 👇
        `, {
        reply_markup: {
            keyboard: [
                [
                    { text: "Ta'riflar" },
                    { text: "Batafsil" },
                ]
            ],
            resize_keyboard: true, // Tugmalarni ekranga moslashtirish
            // one_time_keyboard: true // Bir marta bosilgandan keyin yo'qoladi
        }
    });
    await ctx.sendVideo(postVideoUrl)
});



//bot commands
PlansCommand(bot)
InfoCommand(bot)

// Botni ishga tushirish
bot.launch();

export default bot;
