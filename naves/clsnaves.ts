
import { Op } from "sequelize";
import { AgenciaNavesInput, CombustibleNavesInput, navesLanzaderasOutput, navesnoTripuladasOuput, navestInput, navestOuput, navesTripuladasOutput, TipoOutput } from "../interface/nave.interface";
import clsAgenciaModel from "../models/naves/agencia.model";
import clsAgenciaNaves from "../models/naves/agencianaves.model";
import clsCombustibleModel from "../models/naves/combustible.model";
import clsCombustibleNave from "../models/naves/combustiblenaves.model";
import clsFinesModel from "../models/naves/fines.model";
import clsLanzaderasModel from "../models/naves/lanzaderas.model";
import clsMisionModel from "../models/naves/mision.model";
import clsNaveEspacial from "../models/naves/naves.model";
import tblNave from "../models/naves/naves.model";
import clsNavenoTripulada from "../models/naves/notripuladas.model";
import clsTipoNaveModel from "../models/naves/tiponave.model";
import clsTripuladasModel from "../models/naves/tripuladas.model";


abstract class clsNaves  {

    public vehiculo  = {}
   

    constructor( naves : navestInput, private agenciaNave : AgenciaNavesInput, private combustibleNaves : CombustibleNavesInput ){
        this.vehiculo = naves;           

    }
    
    async save(): Promise< navestOuput >{
                 
        const result = await tblNave.create( this.vehiculo );
        console.log(this.combustibleNaves.tblcombustibleId)
        this.combustibleNaves.tblcombustibleId?.forEach( async (combustible) => {
            this.combustibleNaves.tblNaveId = result.id;
            this.combustibleNaves.tblcombustibleId = [combustible];
            console.log(combustible)
            await clsCombustibleNave.create( this.combustibleNaves );
        });
        console.log(this.combustibleNaves.tblcombustibleId?.length)

        this.agenciaNave.IDAgencia?.forEach(  async (agencia ) => {
             
             this.agenciaNave.IDNave = result.id;
             this.agenciaNave.IDAgencia = [agencia]
            
            await clsAgenciaNaves.create( this.agenciaNave )
            
        });
       
        return result;
    }

    async buscarPorNombreNave( nombre: string ): Promise<navestOuput[]> {
        const result = await clsNaveEspacial.findAll( {
            limit: 6,
            where: {
                Nombre: {
                    [Op.like] : '%' + nombre + '%',
                    
                }     
          
            },
            
        })
  
        if( result.length >0 ){
            return result;
        }else {
            return Promise.reject(`No existe el termino:  ${ nombre }, intente nuevamente`);
        }
        
    }

    async categoriaNave(idCategoria : number): Promise<navestOuput[] | TipoOutput[]> {
       
        const naves = await clsNaveEspacial.findAll( {
            where: {
                tbltiponaveId: idCategoria
            },
            
            attributes: {
                exclude: ['createdAt', 'updatedAt', 'deletedAt'],
                
            },
            include: {
                model: clsTipoNaveModel,                
                attributes: ['tipo']
              
            }
            
        })
     
        return naves;
    }

    async navedescripcion( idnave: number, idTipo: number): Promise< navesnoTripuladasOuput | navestOuput | navesTripuladasOutput | navesLanzaderasOutput > {
         if( idTipo === 1 ){
            const navenoTripuladas = await clsNaveEspacial.findOne( {
                where: {
                    id: idnave
                },
                
                attributes: {
                    exclude: ['createdAt', 'updatedAt', 'deletedAt'],
                    
                },
                include: [
                    {
                        model: clsNavenoTripulada,
                        //attributes: ['CapacidadPersonas', 'KMDistanciaOrbita'],
                 
                     
                    },
                    {
                        model: clsMisionModel
                        
                    },
                    {
                        model: clsCombustibleModel,
                
                    },
                    {
                        model: clsAgenciaModel
                    }
                ]
           } );
    
        
           return navenoTripuladas as navestOuput | navesnoTripuladasOuput;   
            
         }else if( idTipo === 2){
            const naveTripuladas = await clsNaveEspacial.findOne( {
                where: {
                    id: idnave
                },
                
                attributes: {
                    exclude: ['createdAt', 'updatedAt', 'deletedAt'],
                    
                },
                include: [
                    {
                        model: clsTripuladasModel,
                        attributes: ['CapacidadPersonas', 'KMDistanciaOrbita'],
                        include: [
                            {
                                model: clsFinesModel,
                                attributes: ['Descripcion']
                            }
                        ]
                     
                    },
                    {
                        model: clsMisionModel
                        
                    },
                    {
                        model: clsCombustibleModel,
                
                    },
                    {
                        model: clsAgenciaModel
                    }
                ]
           } );
    
           
           return naveTripuladas as navestOuput | navesTripuladasOutput;
         }else if( idTipo === 3 ){
            const navenoTripuladas = await clsNaveEspacial.findOne( {
                where: {
                    id: idnave
                },
                
                attributes: {
                    exclude: ['createdAt', 'updatedAt', 'deletedAt'],
                    
                },
                include: [
                    {
                        model: clsLanzaderasModel,
                        //attributes: ['CapacidadPersonas', 'KMDistanciaOrbita'],
                 
                     
                    },
                    {
                        model: clsMisionModel
                        
                    },
                    {
                        model: clsCombustibleModel,
                
                    },
                    {
                        model: clsAgenciaModel
                    }
                ]
           } );
    
         
           return navenoTripuladas as navestOuput | navesLanzaderasOutput; 

         }
               
         return Promise.reject(`No existe el termino:  ${ idnave }, intente nuevamente`);         
        
        
    }
    

   abstract crearNave() : Promise< navesnoTripuladasOuput | navestOuput | navesTripuladasOutput | navesLanzaderasOutput >;

  

}


export default clsNaves;