
import { AgenciaNavesInput, CombustibleNavesInput, navesnoTripuladasOuput, navestInput, navestnoTripuladasInput, navestOuput, navesTripuladasOutput } from '../interface/nave.interface';
import clsAgenciaModel from '../models/naves/agencia.model';
import clsCombustibleModel from '../models/naves/combustible.model';
import clsMisionModel from '../models/naves/mision.model';
import clsNaveEspacial from '../models/naves/naves.model';
import clsNavenoTripulada from '../models/naves/notripuladas.model';

import clsNaves from "./clsnaves";


class clsNotripuladas extends clsNaves {


    public newNave! : navesnoTripuladasOuput | navestOuput;
    public navenotripulada : navestnoTripuladasInput = {
        IDNave: 0,
        CeldasFotovoltaicas: 0,
        ObjetivoEstudio : ''
    }
    constructor( nave? : navestInput, private notripulada?: navestnoTripuladasInput, agenciasnaves? : AgenciaNavesInput,  combustibleNaves? : CombustibleNavesInput){
        super( nave!, agenciasnaves!, combustibleNaves! );
        this.navenotripulada! = notripulada as navestnoTripuladasInput;

    }

     async crearNave(): Promise<navesnoTripuladasOuput | navestOuput>{
        const nave = await this.save();        

        if(nave){
            this.navenotripulada.IDNave = nave.id;
        
            //console.log( this.navenotripulada );
            const result = await clsNavenoTripulada.create( this.navenotripulada );            
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
                CeldasFotovoltaicas: result.CeldasFotovoltaicas,
                ObjetivoEstudio: result.ObjetivoEstudio
                
                
            }
             return  this.newNave;
        }
        return Promise.reject('Error al guardar, intente nuevamente')
    }


    // async verNave(idNave: number): Promise<navestOuput | navesnoTripuladasOuput> {
    //     const navenoTripuladas = await clsNaveEspacial.findOne( {
    //         where: {
    //             id: idNave
    //         },
            
    //         attributes: {
    //             exclude: ['createdAt', 'updatedAt', 'deletedAt'],
                
    //         },
    //         include: [
    //             {
    //                 model: clsNavenoTripulada,
    //                 //attributes: ['CapacidadPersonas', 'KMDistanciaOrbita'],
             
                 
    //             },
    //             {
    //                 model: clsMisionModel
                    
    //             },
    //             {
    //                 model: clsCombustibleModel,
            
    //             },
    //             {
    //                 model: clsAgenciaModel
    //             }
    //         ]
    //    } );

    //    console.log( navenoTripuladas)
    //    return navenoTripuladas as navestOuput | navesnoTripuladasOuput;          
        
       
    // }
   
    

}

export default clsNotripuladas;