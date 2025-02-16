const postVideoUrl = "https://t.me/wydboi_resource/282";

const infoText = `
Assalomu alaykum! 🎉

'Ilhomjon Ibrohimov yopiq hamjamiyat' obuna botiga xush kelibsiz. 

Bu yopiq hamjamiyat sizga Aksiya va Kripto bo‘yicha eng so‘nggi bilim va yangiliklarga ega bo‘lish imkoniyatini beradi. 

A’zo bo‘lish orqali siz quyidagilarga ega bo‘lasiz:  

📚 **Aksiya va Kripto bo‘yicha darslar:**  
    🟢 Fundamental analiz  
    🟢 Texnik analiz  

🎙 **Jonli efir va savol-javoblar**  
📊 **Signal va savdo g‘oyalari**  
💬 **Treyderlar va kuratorlar bilan 24/7 aloqa**  
💸 **Investitsiya qilinayotgan o‘rta va uzoq muddatli coinlar ro‘yxati**  

Shuningdek, yana ko‘plab imkoniyatlar sizni kutmoqda!  

📹 Obuna bo‘lish haqida to‘liq ma’lumot olish uchun quyidagi videoni tomosha qiling: 👇
`;

const InfoCommand = (bot) => {
  bot.hears("ℹ️ Batafsil", (ctx) => {
    ctx.reply(infoText);
    ctx.sendVideo(postVideoUrl);
  });
};

export default InfoCommand;
