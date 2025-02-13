import { Telegraf } from 'telegraf';
import PlansCommand from './commands/plans.js';
import InfoCommand from './commands/info.js';

const mainBotToken='7810591719:AAEAU1iYrN_om1vzVKvUrdnqs4YzhRW7rxw'
const postVideoUrl = 'https://t.me/wydboi_resource/280'
const channelId = "@bot_resource"
const bot = new Telegraf(mainBotToken);

// /start komandasi uchun handler
bot.start(async (ctx) => {
    await ctx.reply("📲 Iltimos, kontaktingizni yuboring:", {
        reply_markup: {
            keyboard: [
                [
                    { text: "📞 Kontaktni yuborish", request_contact: true }
                ]
            ],
            resize_keyboard: true,
            one_time_keyboard: true
        },
        
    });
});

bot.on("contact",async (ctx) => {
    console.log(ctx.message)
    const phoneNumber = ctx.message.contact.phone_number;
    const userId = ctx.message.from.id;
    const firstName = ctx.message.from.first_name || "👤 Ism yo'q";
    const username = ctx.message.from.username 
        ? `@${ctx.message.from.username}`
        : "👤 Username yo'q";
        await ctx.telegram.sendMessage(
            channelId,
            `📢 Yangi foydalanuvchi!\n👤 **Ism:** ${firstName}\n📞 **Telefon:** \`${phoneNumber}\`\n🔗  **Username:** ${username}\n🆔 **User ID:** \`${userId}\``,
            { parse_mode: "Markdown" }
        );



        //after clicked start btn
        await ctx.replyWithPhoto("https://t.me/wydboi_resource/281", // Rasmingiz URL yoki fayl ID
    {
      caption: `
      🥳 "O'zbekistondagi birinchi treyderlar yopiq hamjamiyati"ga qo'shilish uchun botga xush kelibsiz!

Ushbu kanal ekspert Ilhomjon Ibrohimov tomonidan ishlab chiqilgan va treyderlarning rivoji uchun eng muhim qadamlarni o'z ichiga olgan maxsus resursdir!

💡 Bu loyiha sizni yuksaltirish va yangi muvaffaqiyatlar sari yo'naltirishga qaratilgan. Biz bilan birga o'rganing, rivojlaning va foyda ko'ring!

👇 Obuna bo'lish tugmasini bosish orqali yopiq kanalga qo'shiling.
      `, // Tagidagi matn
    });
    await ctx.sendVideo(postVideoUrl, 
        {
            reply_markup: {
                keyboard: [
                    [
                        { text: "📢 Obuna bo‘lish" },
                        { text: "ℹ️ Batafsil" },
                    ]
                ],
                resize_keyboard: true, // Tugmalarni ekranga moslashtirish
                // one_time_keyboard: true // Bir marta bosilgandan keyin yo'qoladi
            }
        }
    )
});



//bot commands
PlansCommand(bot)
InfoCommand(bot)

// Botni ishga tushirish
bot.launch();

export default bot;
