import { DataTypes, Model } from "sequelize";
import db from "../../db/config";
import { Lanzaderas, navesLanzaderasInput } from "../../interface/nave.interface";
import clsNaveEspacial from "./naves.model";

class clsLanzaderasModel extends Model<Lanzaderas, navesLanzaderasInput> implements Lanzaderas {
    public IDNave!: number;
    public TransporteToneladas!: number;
    public AlturaMetros!: number;
    public IDNaveLanzada !: number;

}

clsLanzaderasModel.init({
    IDNave: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        primaryKey: true,
      
      },
      TransporteToneladas: {
        type: DataTypes.INTEGER,
        allowNull: false     
      },
      
      AlturaMetros: {
        type: DataTypes.INTEGER,
        allowNull: false     
      },
      
    
      IDNaveLanzada: {
        type: DataTypes.INTEGER,
        allowNull: false     
      },

}, 
{
    timestamps: false,
    sequelize: db,
    paranoid: true,
    modelName: 'tbllanzaderas',
    createdAt: false,
    updatedAt: false,
    deletedAt: false
})

clsNaveEspacial.hasMany( clsLanzaderasModel, {
  foreignKey: 'IDNave'
} );
clsLanzaderasModel.belongsTo(clsNaveEspacial, {
  foreignKey: 'IDNave'
});

export default clsLanzaderasModel