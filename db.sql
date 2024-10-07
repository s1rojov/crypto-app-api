CREATE TABLE crypto (
    id SERIAL PRIMARY KEY,
    fullname varchar(255) not null,
    shortname varchar(255) not null,
    status varchar,
    description TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
