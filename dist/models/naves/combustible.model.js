"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const config_1 = __importDefault(require("../../db/config"));
class clsCombustibleModel extends sequelize_1.Model {
}
clsCombustibleModel.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
    },
    Combustible: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
}, {
    timestamps: false,
    sequelize: config_1.default,
    paranoid: true,
    modelName: 'tblcombustibles',
    createdAt: false,
    updatedAt: false,
    deletedAt: false,
});
exports.default = clsCombustibleModel;
//# sourceMappingURL=combustible.model.js.map