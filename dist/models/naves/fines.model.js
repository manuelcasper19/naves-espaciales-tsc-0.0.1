"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const config_1 = __importDefault(require("../../db/config"));
const tripuladas_model_1 = __importDefault(require("./tripuladas.model"));
class clsFinesModel extends sequelize_1.Model {
}
clsFinesModel.init({
    IDFines: {
        type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        primaryKey: true,
    },
    Descripcion: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    }
}, {
    timestamps: false,
    sequelize: config_1.default,
    paranoid: true,
    modelName: 'tblfines',
    createdAt: false,
    updatedAt: false,
    deletedAt: false,
});
clsFinesModel.hasMany(tripuladas_model_1.default);
tripuladas_model_1.default.belongsTo(clsFinesModel, {
    foreignKey: 'IDFines'
});
exports.default = clsFinesModel;
//# sourceMappingURL=fines.model.js.map