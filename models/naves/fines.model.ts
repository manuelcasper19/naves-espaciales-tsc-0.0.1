import { DataTypes, Model } from "sequelize";
import db from "../../db/config";
import { Fines, FinesInput } from "../../interface/nave.interface";
import clsTripuladasModel from "./tripuladas.model";

class clsFinesModel extends Model<Fines, FinesInput> implements Fines {
   public IDFines?: number;
   public Descripcion!: string;

}


clsFinesModel.init( {
    IDFines: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        primaryKey: true,
      
      },
      Descripcion: {
        type: DataTypes.STRING,
        allowNull: false     
      }
}, 
{
    timestamps: false,
    sequelize: db,
    paranoid: true,
    modelName: 'tblfines',
    createdAt: false,
    updatedAt: false,
    deletedAt: false,

})

clsFinesModel.hasMany( clsTripuladasModel)
clsTripuladasModel.belongsTo( clsFinesModel, {
    foreignKey: 'IDFines'
}  )

export default clsFinesModel;