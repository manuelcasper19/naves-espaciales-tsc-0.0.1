"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const config_1 = __importDefault(require("../../db/config"));
const naves_model_1 = __importDefault(require("./naves.model"));
class clsNavenoTripulada extends sequelize_1.Model {
}
clsNavenoTripulada.init({
    IDNave: {
        type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        primaryKey: true,
    },
    CeldasFotovoltaicas: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false
    },
    ObjetivoEstudio: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
}, {
    timestamps: false,
    sequelize: config_1.default,
    paranoid: true,
    modelName: 'tblnotripulada',
    createdAt: false,
    updatedAt: false,
    deletedAt: false
});
naves_model_1.default.hasMany(clsNavenoTripulada, {
    foreignKey: 'IDNave'
});
clsNavenoTripulada.belongsTo(naves_model_1.default, {
    foreignKey: 'IDNave'
});
exports.default = clsNavenoTripulada;
// const tblNotripulada =  db.define( 'tblnotripulada', {
//     CeldasFotovoltaicas: {
//         type: DataTypes.INTEGER,
//         allowNull: false
//     },
//     ObjetivoEstudio: {
//         type: DataTypes.STRING,
//         allowNull: false
//     }
// });
// export default tblNotripulada;
//# sourceMappingURL=notripuladas.model.js.map