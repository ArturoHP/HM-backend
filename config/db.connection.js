const { Sequelize } = require('sequelize');
const dotenv = require('dotenv');
dotenv.config();

const mysql_connection = new Sequelize(process.env.MYSQL_DB, process.env.MYSQL_USER, process.env.MYSQL_PASS,
    {
        host: process.env.MYSQL_HOST,
        dialect: 'mysql',
        logging: false
    }
);

module.exports = {
    connection: mysql_connection
}