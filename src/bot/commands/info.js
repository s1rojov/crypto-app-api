const InfoCommand = (bot) => {
    bot.hears("ℹ️ Batafsil", (ctx) => {
        ctx.reply(`
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
        `
);
    });
};

export default InfoCommand;
