const IdentifyCommand = (bot) => {
    bot.hears("Identify", (ctx) => {
        ctx.reply("Identify");
    });
};

export default IdentifyCommand;
