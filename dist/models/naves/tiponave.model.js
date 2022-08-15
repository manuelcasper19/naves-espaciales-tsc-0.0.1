"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const config_1 = __importDefault(require("../../db/config"));
class clsTipoNaveModel extends sequelize_1.Model {
}
clsTipoNaveModel.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        primaryKey: true,
    },
    tipo: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
}, {
    sequelize: config_1.default,
    timestamps: false,
    // paranoid: true,
    modelName: 'tbltiponaves',
    createdAt: false,
    updatedAt: false,
    deletedAt: false
});
// clsTipoNaveModel.hasMany(clsNaveEspacial, {
//   foreignKey: 'idTipo' 
// });
// clsNaveEspacial.belongsTo(clsTipoNaveModel)
exports.default = clsTipoNaveModel;
//# sourceMappingURL=tiponave.model.js.map