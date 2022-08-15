
import { Op, where } from "sequelize";
import { MisionInput, MisionOutput } from "../interface/nave.interface";
import clsMisionModel from "../models/naves/mision.model";
import clsNaveEspacial from "../models/naves/naves.model";

class clsMision {
   

    async crearMision( mision : MisionInput) : Promise <MisionOutput>{
     
     const nave =  await clsNaveEspacial.findByPk( mision.tblNaveId )
      
        if(nave){
        if(nave.FechaRetiro === null){
          
          const result = await clsMisionModel.create( mision )
          return Promise.resolve(result);
          
        }
        return Promise.reject('La nave ya no está disponible')
        
      }
      return Promise.reject('La nave no exite')

    }
    async buscarMision(idnave : number ): Promise <MisionOutput[]> {
     const misiones =  await clsMisionModel.findAll( 
        {
          where: {
            tblNaveId :  idnave
          }
        }
       )
       if( misiones) {
        return misiones;
       }
       return Promise.reject('La nave no tiene misiones')
    }
}

export default clsMision;