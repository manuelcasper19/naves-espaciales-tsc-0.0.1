import {  naves, navesTripuladasOutput, navestInput, navesTripuladasInput, AgenciaNavesInput, CombustibleNavesInput, navestOuput, AgenciaNavesOutput, navesLanzaderasOutput, navesnoTripuladasOuput } from '../interface/nave.interface';
import clsAgenciaModel from '../models/naves/agencia.model';
import clsCombustibleModel from '../models/naves/combustible.model';
import clsCombustibleNave from '../models/naves/combustiblenaves.model';
import clsFinesModel from '../models/naves/fines.model';
import clsMisionModel from '../models/naves/mision.model';
import clsNaveEspacial from '../models/naves/naves.model';
import clsTripuladasModel from '../models/naves/tripuladas.model';
import clsNaves from './clsnaves';


class clstripuladas extends clsNaves {


    public newNave! : navesTripuladasOutput | navestOuput;
    constructor( nave? : navestInput, private tripuladas? : navesTripuladasInput, agenciasnaves? : AgenciaNavesInput,  combustibleNaves?: CombustibleNavesInput ){
        super( nave!, agenciasnaves!, combustibleNaves! );
        

    }

    async crearNave(): Promise<navesTripuladasOutput | navestOuput> {
        const nave = await this.save(); 
  

        if(nave){
            this.tripuladas!.tblNaveId = nave.id;
        
            const result = await clsTripuladasModel.create( this.tripuladas );            
            this.newNave = {
                id : nave.id,
                Nombre: nave.Nombre,
                Descripcion: nave.Descripcion,
                Peso: nave.Peso,
                FechaRetiro: nave.FechaRetiro,
                EmpujeToneladas: nave.EmpujeToneladas,
                Propulsion: nave.Propulsion,
                VelocidadKMPorSegundos: nave.Propulsion,
                CantidadMotores:  nave.CantidadMotores,
                tbltiponaveId: nave.tbltiponaveId,
                CapacidadPersonas: result.CapacidadPersonas,
                KMDistanciaOrbita: result.KMDistanciaOrbita,
                IDFines: result.IDFines,
                
                
            }
             return this.newNave;
        }

        return Promise.reject('Error al guardar, intente nuevamente')
    }
//    async verNave(idNave: number): Promise<navestOuput | navesTripuladasOutput> {
//        const naveTripuladas = await clsNaveEspacial.findOne( {
//             where: {
//                 id: idNave
//             },
            
//             attributes: {
//                 exclude: ['createdAt', 'updatedAt', 'deletedAt'],
                
//             },
//             include: [
//                 {
//                     model: clsTripuladasModel,
//                     attributes: ['CapacidadPersonas', 'KMDistanciaOrbita'],
//                     include: [
//                         {
//                             model: clsFinesModel,
//                             attributes: ['Descripcion']
//                         }
//                     ]
                 
//                 },
//                 {
//                     model: clsMisionModel
                    
//                 },
//                 {
//                     model: clsCombustibleModel,
            
//                 },
//                 {
//                     model: clsAgenciaModel
//                 }
//             ]
//        } );

//        console.log( naveTripuladas)
//        return naveTripuladas as navestOuput | navesTripuladasOutput;
//     }

}

export default clstripuladas;