"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const config_1 = __importDefault(require("../../db/config"));
const naves_model_1 = __importDefault(require("./naves.model"));
class clsTripuladasModel extends sequelize_1.Model {
}
clsTripuladasModel.init({
    tblNaveId: {
        type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        primaryKey: true,
    },
    CapacidadPersonas: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false
    },
    KMDistanciaOrbita: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false
    },
    IDFines: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false
    },
}, {
    timestamps: false,
    sequelize: config_1.default,
    paranoid: true,
    modelName: 'tbltripuladas',
    createdAt: false,
    updatedAt: false,
    deletedAt: false,
});
naves_model_1.default.hasMany(clsTripuladasModel);
clsTripuladasModel.belongsTo(naves_model_1.default);
exports.default = clsTripuladasModel;
//# sourceMappingURL=tripuladas.model.js.map