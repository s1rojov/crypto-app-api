import { Telegraf } from "telegraf";
import PlansCommand from "./commands/plans.js";
import InfoCommand from "./commands/info.js";
import dotenv from "dotenv";

dotenv.config(); // .env faylini yuklash

const bot = new Telegraf(process.env.BOT_TOKEN);
const postVideoUrl = "https://t.me/wydboi_resource/280";
const channelId = "@bot_resource";

// Kontakt so‘rash uchun klaviatura
const contactKeyboard = {
  reply_markup: {
    keyboard: [[{ text: "📞 Kontaktni yuborish", request_contact: true }]],
    resize_keyboard: true,
    one_time_keyboard: true,
  },
};

// Obuna bo‘lish tugmalari
const subscribeKeyboard = {
  reply_markup: {
    keyboard: [["📢 Obuna bo‘lish", "ℹ️ Batafsil"]],
    resize_keyboard: true,
  },
};

// /start komandasi uchun handler
bot.start((ctx) => ctx.reply("📲 Iltimos, kontaktingizni yuboring:", contactKeyboard));

bot.on("contact", async (ctx) => {
  // console.log(ctx.message)
  const { phone_number } = ctx.message.contact;
  const { id: userId, username } = ctx.message.from;
  const usernameDisplay = username ? `@${username}` : "👤 Username yo'q";

  // Yangi foydalanuvchini kanalga jo‘natish
  await ctx.telegram.sendMessage(
    channelId,
    `📢 Yangi foydalanuvchi\n👤 *User ID:* \`${userId}\`\n📞 *Telefon:* \`${phone_number}\`\n🔗 *Username:* ${username ? `${usernameDisplay}` : "👤 Username yo'q"}`,
    { parse_mode: "MarkdownV2" }
  );
  

  // Foydalanuvchiga rasm va matn jo‘natish
  await ctx.replyWithPhoto(
    "https://t.me/wydboi_resource/281",
    {
      caption: `
      🥳 "O'zbekistondagi birinchi treyderlar yopiq hamjamiyati"ga qo'shilish uchun botga xush kelibsiz!

      Ushbu kanal ekspert Ilhomjon Ibrohimov tomonidan ishlab chiqilgan va treyderlarning rivoji uchun eng muhim qadamlarni o'z ichiga olgan maxsus resursdir!

      💡 Bu loyiha sizni yuksaltirish va yangi muvaffaqiyatlar sari yo'naltirishga qaratilgan. Biz bilan birga o'rganing, rivojlaning va foyda ko'ring!

      👇 Obuna bo'lish tugmasini bosish orqali yopiq kanalga qo'shiling.
      `,
    }
  );

  // Foydalanuvchiga video jo‘natish
  await ctx.sendVideo(postVideoUrl, subscribeKeyboard);
});

// Bot komandalarini yuklash
PlansCommand(bot);
InfoCommand(bot);

// Botni ishga tushirish
bot.launch();
export default bot;
