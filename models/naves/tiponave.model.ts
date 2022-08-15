import { DataTypes, Model } from "sequelize";
import db from "../../db/config";
import { Tipo, TipoInput } from "../../interface/nave.interface";
import clsNaveEspacial from "./naves.model";

class clsTipoNaveModel extends Model<Tipo, TipoInput> implements Tipo {
   public id?: number | undefined;
   public tipo!: string;

}

clsTipoNaveModel.init({
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        primaryKey: true,
      
      },
    tipo: {
        type: DataTypes.STRING,
        allowNull: false     
      },

}, {
    sequelize: db,
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

 export default clsTipoNaveModel;