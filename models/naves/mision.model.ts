import { DataTypes, Model } from "sequelize";
import db from "../../db/config";
import { Mision, MisionInput } from "../../interface/nave.interface";
import clsFinesModel from "./fines.model";
import clsNaveEspacial from "./naves.model";


class clsMisionModel extends Model< Mision, MisionInput > implements Mision {
    public IDMision!: number;
    public Mision!: string;
    public FechaLanzamiento!: Date;
    public FechaLlegada!: Date;
    public CantidadAniosLlegar!: number;
    public tblNaveId!: number;

}

clsMisionModel.init( {
    IDMision: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
      
      },
      Mision: {
        type: DataTypes.STRING,
        allowNull: false     
      },
      
      FechaLanzamiento: {
        type: DataTypes.DATE,
        allowNull: false     
      },
      
      FechaLlegada: {
        type: DataTypes.DATE,
          
      },
      CantidadAniosLlegar: {
        type: DataTypes.INTEGER,
         
      },
      
      tblNaveId: {
        type: DataTypes.INTEGER,
        allowNull: false     
      },
}, 
{

    timestamps: false,
    sequelize: db,
    paranoid: true,
    modelName: 'tblmisions',
    createdAt: false,
    updatedAt: false,
    deletedAt: false
}
)

clsMisionModel.belongsTo(clsNaveEspacial)
clsNaveEspacial.hasMany( clsMisionModel )


export default clsMisionModel;