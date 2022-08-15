"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const config_1 = __importDefault(require("../../db/config"));
const tiponave_model_1 = __importDefault(require("./tiponave.model"));
class clsNaveEspacial extends sequelize_1.Model {
}
clsNaveEspacial.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
    },
    Nombre: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    Descripcion: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    Peso: {
        type: sequelize_1.DataTypes.FLOAT,
        allowNull: false
    },
    FechaRetiro: {
        type: sequelize_1.DataTypes.DATE
    },
    EmpujeToneladas: {
        type: sequelize_1.DataTypes.FLOAT,
        allowNull: false
    },
    Propulsion: {
        type: sequelize_1.DataTypes.FLOAT,
        allowNull: false
    },
    VelocidadKMPorSegundos: {
        type: sequelize_1.DataTypes.FLOAT,
        allowNull: false
    },
    CantidadMotores: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false
    },
    tbltiponaveId: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
}, {
    timestamps: true,
    sequelize: config_1.default,
    paranoid: true,
    modelName: 'tblNave'
});
tiponave_model_1.default.hasMany(clsNaveEspacial);
clsNaveEspacial.belongsTo(tiponave_model_1.default);
exports.default = clsNaveEspacial;
// const tblNave =  db.define( 'tblNave', {
//     Nombre: {
//         type: DataTypes.STRING,
//         allowNull: false
//     },
//     Descripcion: {
//         type: DataTypes.STRING,
//         allowNull: false
//     },
//     Peso: {
//         type: DataTypes.FLOAT,
//         allowNull: false
//     },
//     FechaRetiro: {
//         type: DataTypes.DATE
//     },
//     EmpujeToneladas: {
//         type: DataTypes.FLOAT,
//         allowNull: false
//     },
//     Propulsion: {
//         type: DataTypes.FLOAT,
//         allowNull: false
//     },
//     VelocidadKMPorSegundos: {
//         type: DataTypes.FLOAT,
//         allowNull: false
//     },
//     CantidadMotores: {
//         type: DataTypes.INTEGER,
//         allowNull: false
//     }
//     ,
//     idTipo: {
//         type: DataTypes.INTEGER,
//         allowNull: false
//     }
// });
// export default tblNave;
//# sourceMappingURL=naves.model.js.map