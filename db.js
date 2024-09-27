// db.js
import pkg from 'pg';
const { Pool } = pkg;

// PostgreSQL ulanishi
const pool = new Pool({
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
});

// Xabarni bazaga saqlash funksiyasi
export const saveMessage = async (chatId, messageText, photoUrl = null) => {
    const query = 'INSERT INTO messages (chat_id, message_text, photo_url) VALUES ($1, $2, $3)';
    await pool.query(query, [chatId, messageText, photoUrl]);
};
