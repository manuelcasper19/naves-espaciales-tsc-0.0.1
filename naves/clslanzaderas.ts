import { AgenciaNavesInput, CombustibleNavesInput, naves, navesLanzaderasInput, navesLanzaderasOutput, navesnoTripuladasOuput, navestInput, navestOuput, navesTripuladasOutput } from "../interface/nave.interface";
import clsLanzaderasModel from "../models/naves/lanzaderas.model";
import clsNaves from "./clsnaves";

class clsLanzaderas extends clsNaves {
   
    public newNave! : navesLanzaderasOutput | navestOuput;
    constructor( nave : navestInput, private lanzaderas : navesLanzaderasInput, agenciasnaves : AgenciaNavesInput,  combustibleNaves : CombustibleNavesInput){
        super( nave, agenciasnaves, combustibleNaves )

    }

    async crearNave(): Promise< navesLanzaderasOutput | navestOuput> {
        const nave = await this.save(); 

        if(nave){
            this.lanzaderas.IDNave = nave.id;
        
            const result = await clsLanzaderasModel.create( this.lanzaderas );  
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
                TransporteToneladas : result.TransporteToneladas,
                AlturaMetros: result.AlturaMetros,

                
                
            }          
    
             return  this.newNave;
        }

        return Promise.reject('Error al guardar, intente nuevamente')
    }
 
    // verNave(idNave: number): Promise<navestOuput | navesnoTripuladasOuput | navesTripuladasOutput | navesLanzaderasOutput> {
    //     throw new Error("Method not implemented.");
    // }




}

export default clsLanzaderas;