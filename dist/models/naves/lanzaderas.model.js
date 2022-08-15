"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const config_1 = __importDefault(require("../../db/config"));
const naves_model_1 = __importDefault(require("./naves.model"));
class clsLanzaderasModel extends sequelize_1.Model {
}
clsLanzaderasModel.init({
    IDNave: {
        type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        primaryKey: true,
    },
    TransporteToneladas: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false
    },
    AlturaMetros: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false
    },
    IDNaveLanzada: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false
    },
}, {
    timestamps: false,
    sequelize: config_1.default,
    paranoid: true,
    modelName: 'tbllanzaderas',
    createdAt: false,
    updatedAt: false,
    deletedAt: false
});
naves_model_1.default.hasMany(clsLanzaderasModel, {
    foreignKey: 'IDNave'
});
clsLanzaderasModel.belongsTo(naves_model_1.default, {
    foreignKey: 'IDNave'
});
exports.default = clsLanzaderasModel;
//# sourceMappingURL=lanzaderas.model.js.map