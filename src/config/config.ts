import dotenv from 'dotenv';
dotenv.config();

const MYSQL_HOST = process.env.MYSQL_HOST || '127.0.0.1';
const MYSQL_PORT = Number(process.env.MYSQL_PORT) || 3306;
const MYSQL_USER = process.env.MYSQL_USER || 'root';
const MYSQL_PASS = process.env.MYSQL_PASS || 'password';
const MYSQL_DATABASE = process.env.MYSQL_DATABASE || 'admin-cambly';

const MYSQL = {
    host: MYSQL_HOST,
    port: MYSQL_PORT,
    user: MYSQL_USER,
    pass: MYSQL_PASS,
    database: MYSQL_DATABASE,
};
const CLOUDINARY ={ 
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
};

const config = {
    mysql: MYSQL,
    cloudinary: CLOUDINARY,
};

export default config;