CREATE TABLE crypto (
    id SERIAL PRIMARY KEY,
    chat_id BIGINT NOT NULL,
    name varchar(255) not null,
    status varchar,
    description TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
