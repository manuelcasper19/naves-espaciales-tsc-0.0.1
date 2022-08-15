import { DataTypes, Model } from "sequelize";
import db from "../../db/config";
import { Combustible, CombustibleInput } from "../../interface/nave.interface";
import clsCombustibleNave from "./combustiblenaves.model";
import clsNaveEspacial from "./naves.model";

class clsCombustibleModel extends Model<Combustible, CombustibleInput> implements Combustible {
   public id?: number;
   public Combustible!: string;

}

clsCombustibleModel.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      
      },
      Combustible: {
        type: DataTypes.STRING,
        allowNull: false,
          
      },
      
},
{
    timestamps: false,
    sequelize: db,
    paranoid: true,
    modelName: 'tblcombustibles',
    createdAt: false,
    updatedAt: false,
    deletedAt: false,
    
}, 
)

export default clsCombustibleModel;