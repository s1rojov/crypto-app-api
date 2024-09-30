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

export default pool
