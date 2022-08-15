"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const config_1 = __importDefault(require("../../db/config"));
class clsAgenciaModel extends sequelize_1.Model {
}
clsAgenciaModel.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
    },
    Agencia: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    Pais: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
}, {
    timestamps: false,
    sequelize: config_1.default,
    paranoid: true,
    modelName: 'tblagencias',
    createdAt: false,
    updatedAt: false,
    deletedAt: false,
});
exports.default = clsAgenciaModel;
//# sourceMappingURL=agencia.model.js.map