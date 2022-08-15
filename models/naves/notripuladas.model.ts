import {   DataTypes, Model } from "sequelize";
import db from "../../db/config";
import { naveNotripulada, navestnoTripuladasInput } from "../../interface/nave.interface";
import clsNaveEspacial from "./naves.model";

class clsNavenoTripulada extends Model<naveNotripulada, navestnoTripuladasInput> implements naveNotripulada {
    public IDNave!: number
    public CeldasFotovoltaicas!: number
    public ObjetivoEstudio!: string

  }
  
  clsNavenoTripulada.init({
    IDNave: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true,
    
    },
    CeldasFotovoltaicas: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    ObjetivoEstudio: {
      type: DataTypes.STRING,
      allowNull: false,
      
    }, 

  },
   {
    timestamps: false,
    sequelize: db,
    paranoid: true,
    modelName: 'tblnotripulada',
    createdAt: false,
    updatedAt: false,
    deletedAt: false
  }
  )
  
  clsNaveEspacial.hasMany( clsNavenoTripulada, {
    foreignKey: 'IDNave'
  } );
  clsNavenoTripulada.belongsTo(clsNaveEspacial, {
    foreignKey: 'IDNave'
  });

  export default clsNavenoTripulada
  


// const tblNotripulada =  db.define( 'tblnotripulada', {
//     CeldasFotovoltaicas: {
//         type: DataTypes.INTEGER,
//         allowNull: false
//     },
//     ObjetivoEstudio: {
//         type: DataTypes.STRING,
//         allowNull: false
//     }
    

// });

// export default tblNotripulada;

