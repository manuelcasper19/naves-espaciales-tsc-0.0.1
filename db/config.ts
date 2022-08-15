import {  Sequelize } from "sequelize";

const user = process.env.USER as string;
const database = process.env.DATABASE as string;
const password = process.env.PASSWORD;
const server = process.env.SERVER;

const db = new Sequelize( database, user, password, {
    host: server,
    dialect: 'mysql'
});


export default db;