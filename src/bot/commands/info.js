const InfoCommand = (bot) => {
    bot.hears("Info", (ctx) => {
        ctx.reply("Info");
    });
};

export default InfoCommand;
