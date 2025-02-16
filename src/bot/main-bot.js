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

// MarkdownV2 formatiga moslash uchun maxsus belgilarni ekranga chiqarish
function escapeMarkdownV2(text) {
  return text.replace(/[_*[\]()~`>#\+\-=|{}.!]/g, "\\$&");
}

// /start komandasi uchun handler
bot.start((ctx) => ctx.reply("📲 Iltimos, kontaktingizni yuboring:", contactKeyboard));

bot.on("contact", async (ctx) => {
  const { phone_number } = ctx.message.contact;
  const { id: userId, first_name: firstName, username } = ctx.message.from;
  const usernameDisplay = username ? `@${username}` : "👤 Username yo'q";

  // Yangi foydalanuvchini kanalga jo‘natish (MarkdownV2 bilan formatlangan)
  const messageText = `📢 Yangi foydalanuvchi!\n` +
                      `👤 *Ism:* ${escapeMarkdownV2(firstName || "👤 Ism yo'q")}\n` +
                      `📞 *Telefon:* \`${phone_number}\`\n` +
                      `🔗 *Username:* ${escapeMarkdownV2(usernameDisplay)}\n` +
                      `🆔 *User ID:* \`${userId}\``;

  await ctx.telegram.sendMessage(channelId, messageText, { parse_mode: "MarkdownV2" });

  // Foydalanuvchiga rasm va matn jo‘natish
  await ctx.replyWithPhoto("https://t.me/wydboi_resource/281", {
    caption: `🥳 *"O'zbekistondagi birinchi treyderlar yopiq hamjamiyati"*ga qo'shilish uchun botga xush kelibsiz!\n\n` +
             `Ushbu kanal ekspert Ilhomjon Ibrohimov tomonidan ishlab chiqilgan va treyderlarning rivoji uchun eng muhim qadamlarni o'z ichiga olgan maxsus resursdir!\n\n` +
             `💡 Bu loyiha sizni yuksaltirish va yangi muvaffaqiyatlar sari yo'naltirishga qaratilgan. Biz bilan birga o'rganing, rivojlaning va foyda ko'ring!\n\n` +
             `👇 Obuna bo'lish tugmasini bosish orqali yopiq kanalga qo'shiling.`,
    parse_mode: "MarkdownV2"
  });

  // Foydalanuvchiga video jo‘natish
  await ctx.replyWithVideo(postVideoUrl, subscribeKeyboard);
});

// Bot komandalarini yuklash
PlansCommand(bot);
InfoCommand(bot);

// Botni ishga tushirish
bot.launch();
export default bot;
