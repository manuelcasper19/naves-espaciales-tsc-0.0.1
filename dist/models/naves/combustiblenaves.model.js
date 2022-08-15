"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const config_1 = __importDefault(require("../../db/config"));
const combustible_model_1 = __importDefault(require("./combustible.model"));
const naves_model_1 = __importDefault(require("./naves.model"));
class clsCombustibleNave extends sequelize_1.Model {
}
clsCombustibleNave.init({
    tblNaveId: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
    },
    tblcombustibleId: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
}, {
    timestamps: false,
    sequelize: config_1.default,
    paranoid: true,
    modelName: 'tblcombustiblenaves',
    createdAt: false,
    updatedAt: false,
    deletedAt: false,
});
combustible_model_1.default.belongsToMany(naves_model_1.default, { through: clsCombustibleNave, foreignKey: 'tblcombustibleId', otherKey: 'tblNaveId' });
naves_model_1.default.belongsToMany(combustible_model_1.default, { through: clsCombustibleNave, foreignKey: 'tblNaveId', otherKey: 'tblcombustibleId' });
exports.default = clsCombustibleNave;
//# sourceMappingURL=combustiblenaves.model.js.map