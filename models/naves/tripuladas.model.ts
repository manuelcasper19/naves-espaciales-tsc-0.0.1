import { DataTypes, Model } from "sequelize";
import db from "../../db/config";
import { navesTripuladasInput, tripuladas } from "../../interface/nave.interface";
import clsNaveEspacial from "./naves.model";

class clsTripuladasModel extends Model<tripuladas, navesTripuladasInput> implements tripuladas {
    public tblNaveId!: number;
    public CapacidadPersonas!: number;
    public KMDistanciaOrbita!: number;
    public IDFines!: number;

}

clsTripuladasModel.init({
  tblNaveId: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        primaryKey: true,
      
      },
      CapacidadPersonas: {
        type: DataTypes.INTEGER,
        allowNull: false     
      },
      
      KMDistanciaOrbita: {
        type: DataTypes.INTEGER,
        allowNull: false     
      },
      
    
      IDFines: {
        type: DataTypes.INTEGER,
        allowNull: false     
      },

}, 
{
    timestamps: false,
    sequelize: db,
    paranoid: true,
    modelName: 'tbltripuladas',
    createdAt: false,
    updatedAt: false,
    deletedAt: false,
    
})

clsNaveEspacial.hasMany( clsTripuladasModel );
clsTripuladasModel.belongsTo(clsNaveEspacial);

export default clsTripuladasModel