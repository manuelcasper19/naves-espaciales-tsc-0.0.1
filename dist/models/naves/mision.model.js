"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const config_1 = __importDefault(require("../../db/config"));
const naves_model_1 = __importDefault(require("./naves.model"));
class clsMisionModel extends sequelize_1.Model {
}
clsMisionModel.init({
    IDMision: {
        type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
    },
    Mision: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    FechaLanzamiento: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: false
    },
    FechaLlegada: {
        type: sequelize_1.DataTypes.DATE,
    },
    CantidadAniosLlegar: {
        type: sequelize_1.DataTypes.INTEGER,
    },
    tblNaveId: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false
    },
}, {
    timestamps: false,
    sequelize: config_1.default,
    paranoid: true,
    modelName: 'tblmisions',
    createdAt: false,
    updatedAt: false,
    deletedAt: false
});
clsMisionModel.belongsTo(naves_model_1.default);
naves_model_1.default.hasMany(clsMisionModel);
exports.default = clsMisionModel;
//# sourceMappingURL=mision.model.js.map