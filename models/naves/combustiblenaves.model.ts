import { DataTypes, Model } from "sequelize";
import db from "../../db/config";
import { CombustibleNaves, CombustibleNavesInput } from "../../interface/nave.interface";
import clsCombustibleModel from "./combustible.model";
import clsNaveEspacial from "./naves.model";


class clsCombustibleNave extends Model< CombustibleNaves, CombustibleNavesInput> implements CombustibleNaves {
    
    public IDNave!: number;
    public tblcombustibleId!: number[];
  
}

clsCombustibleNave.init({
  tblNaveId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
    
      },
      tblcombustibleId: {
        type: DataTypes.INTEGER,
        allowNull: false,
       
      },
},
{
    timestamps: false,
    sequelize: db,
    paranoid: true,
    modelName: 'tblcombustiblenaves',
    createdAt: false,
    updatedAt: false,
    deletedAt: false,
    
}
)

clsCombustibleModel.belongsToMany(clsNaveEspacial, { through : clsCombustibleNave, foreignKey: 'tblcombustibleId', otherKey: 'tblNaveId' })
clsNaveEspacial.belongsToMany(clsCombustibleModel, { through : clsCombustibleNave, foreignKey: 'tblNaveId', otherKey: 'tblcombustibleId'})

export default clsCombustibleNave;