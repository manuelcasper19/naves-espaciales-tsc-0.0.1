"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const user = process.env.USER;
const database = process.env.DATABASE;
const password = process.env.PASSWORD;
const server = process.env.SERVER;
const db = new sequelize_1.Sequelize(database, user, password, {
    host: server,
    dialect: 'mysql'
});
exports.default = db;
//# sourceMappingURL=config.js.map