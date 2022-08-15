"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const config_1 = __importDefault(require("../../db/config"));
const agencia_model_1 = __importDefault(require("./agencia.model"));
const naves_model_1 = __importDefault(require("./naves.model"));
class clsAgenciaNaves extends sequelize_1.Model {
}
clsAgenciaNaves.init({
    IDNave: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
    },
    IDAgencia: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        primaryKey: false,
    },
}, {
    timestamps: false,
    sequelize: config_1.default,
    paranoid: true,
    modelName: 'tblagencianaves',
    createdAt: false,
    updatedAt: false,
    deletedAt: false,
});
agencia_model_1.default.belongsToMany(naves_model_1.default, { through: clsAgenciaNaves, foreignKey: 'IDAgencia', otherKey: 'IDNave' });
naves_model_1.default.belongsToMany(agencia_model_1.default, { through: clsAgenciaNaves, foreignKey: 'IDNave', otherKey: 'IDAgencia' });
exports.default = clsAgenciaNaves;
//# sourceMappingURL=agencianaves.model.js.map