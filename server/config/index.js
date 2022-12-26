import dotenv from 'dotenv';

dotenv.config();

export const {
    APP_PORT,
    DEBUG_MODE,
    JWT_SECRET,
    APP_URL,
    DB_URL,
    REFRESH_SECRET,
    ON_HEROKU
} = process.env;