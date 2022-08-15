import {   DataTypes, Model } from "sequelize";
import db from "../../db/config";

import { naves, navestInput } from "../../interface/nave.interface";
import clsTipoNaveModel from "./tiponave.model";


class clsNaveEspacial extends Model<naves, navestInput> implements naves {
    public id!: number
    public Nombre!: string
    public Descripcion!: string
    public Peso!: number
    public FechaRetiro!: Date
    public EmpujeToneladas!: number;
    public Propulsion!: number
    public VelocidadKMPorSegundos!: number
    public CantidadMotores!: number
    public tbltiponaveId!: number
  
    // timestamps!
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
    public readonly deletedAt!: Date;
  }
  
  clsNaveEspacial.init({
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    Nombre: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Descripcion: {
      type: DataTypes.STRING,
      allowNull: false,
      
    },
    Peso: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    FechaRetiro: {
        type: DataTypes.DATE
    },
    EmpujeToneladas: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    
    Propulsion: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    VelocidadKMPorSegundos: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    CantidadMotores: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
    ,
    tbltiponaveId: {
        type: DataTypes.INTEGER,
        allowNull: false,
 
        
    },
    

  }, {
    
    timestamps: true,
    sequelize: db,
    paranoid: true,
    modelName: 'tblNave'
   
  })

  clsTipoNaveModel.hasMany( clsNaveEspacial )
  clsNaveEspacial.belongsTo(clsTipoNaveModel);

  

  export default clsNaveEspacial
  

// const tblNave =  db.define( 'tblNave', {
//     Nombre: {
//         type: DataTypes.STRING,
//         allowNull: false
//     },
//     Descripcion: {
//         type: DataTypes.STRING,
//         allowNull: false
//     },
//     Peso: {
//         type: DataTypes.FLOAT,
//         allowNull: false
//     },
//     FechaRetiro: {
//         type: DataTypes.DATE
//     },
//     EmpujeToneladas: {
//         type: DataTypes.FLOAT,
//         allowNull: false
//     },
    
//     Propulsion: {
//         type: DataTypes.FLOAT,
//         allowNull: false
//     },
//     VelocidadKMPorSegundos: {
//         type: DataTypes.FLOAT,
//         allowNull: false
//     },
//     CantidadMotores: {
//         type: DataTypes.INTEGER,
//         allowNull: false
//     }
//     ,
//     idTipo: {
//         type: DataTypes.INTEGER,
//         allowNull: false
//     }

    

// });

// export default tblNave;




