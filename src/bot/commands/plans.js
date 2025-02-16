import { Markup } from "telegraf";

const paymentInfo = `
Toʻlov qilgandan soʻng chek yuboring 

Karta : 5614682217472234
Karta ism familiya : Ilhomjon Ibrohimov
`;

// Obuna variantlari tugmalari
const subscriptionButtons = Markup.inlineKeyboard([
  [Markup.button.callback("1 oy - 197000 so'm", "oneMonth")],
  [Markup.button.callback("3 oy - 397000 so'm", "threeMonth")],
]);

const PlansCommand = (bot) => {
  bot.hears("📢 Obuna bo‘lish", (ctx) =>
    ctx.reply("O'zingizga qulay ta'rifni tanlang:", subscriptionButtons)
  );

  const sendPaymentInfo = (ctx) => {
    ctx.answerCbQuery();
    ctx.reply(paymentInfo);
  };

  bot.action("oneMonth", sendPaymentInfo);
  bot.action("threeMonth", sendPaymentInfo);
};

export default PlansCommand;
