// db.js
import pkg from 'pg';
const { Pool } = pkg;

// PostgreSQL ulanishi
const pool = new Pool({
    user: 'postgres',    // O'z ma'lumotlaringizni kiriting
    host: 'localhost',
    database: 'telegram_data',
    password: '123',
    port: 5432,
});

// Xabarni bazaga saqlash funksiyasi
export const saveMessage = async (chatId, messageText, photoUrl = null) => {
    const query = 'INSERT INTO messages (chat_id, message_text, photo_url) VALUES ($1, $2, $3)';
    await pool.query(query, [chatId, messageText, photoUrl]);
};
