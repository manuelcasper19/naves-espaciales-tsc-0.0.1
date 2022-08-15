import { DataTypes, Model } from "sequelize";
import db from "../../db/config";
import { AgenciaNaves, AgenciaNavesInput } from "../../interface/nave.interface";
import clsAgenciaModel from "./agencia.model";
import clsNaveEspacial from "./naves.model";


class clsAgenciaNaves extends Model< AgenciaNaves, AgenciaNavesInput> implements AgenciaNaves {
    public IDNave!: number;
    public IDAgencia!: number[];
  
}

clsAgenciaNaves.init({
    IDNave: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      
      },
      IDAgencia: {
        type: DataTypes.INTEGER,
        allowNull: false ,
        primaryKey: false,    
      },
},
{
    timestamps: false,
    sequelize: db,
    paranoid: true,
    modelName: 'tblagencianaves',
    createdAt: false,
    updatedAt: false,
    deletedAt: false,
    
}
)


clsAgenciaModel.belongsToMany(clsNaveEspacial, { through : clsAgenciaNaves, foreignKey: 'IDAgencia', otherKey: 'IDNave' })
clsNaveEspacial.belongsToMany(clsAgenciaModel, { through : clsAgenciaNaves, foreignKey: 'IDNave', otherKey: 'IDAgencia'})

export default clsAgenciaNaves;