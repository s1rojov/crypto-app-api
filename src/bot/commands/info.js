const InfoCommand = (bot) => {
    bot.hears("Batafsil", (ctx) => {
        ctx.reply(`
            
            Endi siz treyding sohasida bilim va tajribangizni oshirish uchun eng to‘g‘ri joydasiz! Bu yerda sizni eksklyuziv materiallar va imkoniyatlar kutmoqda:

💡 Yopiq hamjamiyatimizdegi  imkoniyatlar:

🔹 Treyding asoslari bo‘yicha foydali materiallar
🔹 Ekspertlar bilan onlayn uchrashuvlar 
🔹 Kundalik savdo signallari va tahlillar
🔹 Mehmon spikerlar bilan qiziqarli suhbatlar 

👥 Yopiq chatda fikr almashing, savollar bering va tajriba orttiring. Klubimizda hamma bir maqsadga intiladi – muvaffaqiyatli bozor ishtirokchisiga aylanish!

❗️ Muhim: Har bir materialni o‘qib, signallarni ishlatib, o‘zingizni rivojlantiring. Shunda natijalar uzoq kutdirib qo‘ymaydi!
            `);
    });
};

export default InfoCommand;
