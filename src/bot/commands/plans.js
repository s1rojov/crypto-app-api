import { Telegraf, Markup } from 'telegraf';
const PlansCommand = (bot) => {
    bot.hears("📢 Obuna bo‘lish", (ctx) => {
        ctx.reply("O'zingizga qulay ta'rifni tanlang:", Markup.inlineKeyboard([
            [(Markup.button.callback("1 oy - 197000 so'm", "oneMonth")),(Markup.button.callback("3 oy - 397000 so'm", "threeMonth"))]
        ]));
    });
    bot.action("oneMonth", (ctx) => {
        ctx.answerCbQuery();
        ctx.reply(`
            Toʻlov qilgandan soʻng chek yuboring 

Karta : 5614682217472234

Karta ism familiya : Ilhomjon Ibrohimov
            `);
    });
    
    bot.action("threeMonth", (ctx) => {
        ctx.answerCbQuery();
        ctx.reply(`
            Toʻlov qilgandan soʻng chek yuboring 

Karta : 5614682217472234

Karta ism familiya : Ilhomjon Ibrohimov`);
    });
};

export default PlansCommand;
