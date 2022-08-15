import { DataTypes, Model } from "sequelize";
import db from "../../db/config";
import { Agencia, AgenciaInput } from "../../interface/nave.interface";

class clsAgenciaModel extends Model<Agencia, AgenciaInput> implements Agencia {
   public id?: number;
   public Agencia!: string;
   public Pais!: string;

}

clsAgenciaModel.init( {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
    
      },
      Agencia: {
        type: DataTypes.STRING,
        allowNull: false,
       
      },
      Pais: {
        type: DataTypes.STRING,
        allowNull: false,
       
      },
},
{
    timestamps: false,
    sequelize: db,
    paranoid: true,
    modelName: 'tblagencias',
    createdAt: false,
    updatedAt: false,
    deletedAt: false,
    
})


export default clsAgenciaModel;