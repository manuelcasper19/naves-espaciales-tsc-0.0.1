import { Request, Response } from "express";
import tblNave from "../../models/naves/naves.model";
import clsNotripuladas from "../../naves/clsnotripuladas";
import { navestInput } from '../../interface/nave.interface';
import clstripuladas from "../../naves/clstripuladas";
import clsLanzaderas from "../../naves/clslanzaderas";
import clsMision from "../../naves/clsmision";




export const getNave = async ( req : Request, res: Response ) => {

    try {
        const naves = await tblNave.findAll();

        return res.status(201).json( {
            msg: 'Naves',
            naves
        })
        
    } catch (error) {
        console.log(error);
                
        return res.status(500).json( {
            msg: 'Error, favor comuniquese con el administrador del sistema'
        });
        
    }
}

export const crearNave = async ( req : Request, res: Response ) => {
    
    const { Nombre, 
            Descripcion, 
            Peso, 
            FechaRetiro, 
            EmpujeToneladas, 
            Propulsion, 
            VelocidadKMPorSegundos, 
            CantidadMotores,
            tbltiponaveId,
            CeldasFotovoltaicas,
            ObjetivoEstudio,
            IDAgencia,
            tblcombustibleId
        } = req.body;

    
    const nave = {
        Nombre,
        Descripcion,
        Peso,
        FechaRetiro,
        EmpujeToneladas,
        Propulsion,
        VelocidadKMPorSegundos,
        CantidadMotores,
        tbltiponaveId,
        IDAgencia
    
    }
    
    const notripuladas = {
        CeldasFotovoltaicas,
        ObjetivoEstudio
    }
    const agenciasNaves = {
        IDAgencia
    }

    const combustibleNaves = {
        tblcombustibleId
    }

    try {
        
        const notripulada = new clsNotripuladas(nave as navestInput, notripuladas, agenciasNaves, combustibleNaves);
 
        const result = await notripulada.crearNave();

        return res.status(201).json( {
            msg: 'Naves',
            
            result
        })
        
    } catch (error) {
        console.log(error);
                
        return res.status(500).json( {
            msg: 'Error, favor comuniquese con el administrador del sistema'
        });
        
    }
}

export const crearNaveTripulada = async ( req : Request, res: Response ) => {
    
    const { Nombre, 
            Descripcion, 
            Peso, 
            FechaRetiro, 
            EmpujeToneladas, 
            Propulsion, 
            VelocidadKMPorSegundos, 
            CantidadMotores,
            tbltiponaveId,
            CapacidadPersonas,
            KMDistanciaOrbita,
            IDFines,
            IDAgencia,
            tblcombustibleId 
        } = req.body;

    
    const nave = {
        Nombre,
        Descripcion,
        Peso,
        FechaRetiro,
        EmpujeToneladas,
        Propulsion,
        VelocidadKMPorSegundos,
        CantidadMotores,
        tbltiponaveId
    
    }
    const tripuladas = {
        CapacidadPersonas,
        KMDistanciaOrbita,
        IDFines
    }
    const agenciasNaves = {
        IDAgencia
    }

    const combustibleNaves = {
        tblcombustibleId 
    }

    try {
        
        const tripulada = new clstripuladas(nave as navestInput, tripuladas, agenciasNaves, combustibleNaves);
 
        const result = await tripulada.crearNave();

        return res.status(201).json( {
            msg: 'Naves',
            
            result
        })
        
    } catch (error) {
        console.log(error);
                
        return res.status(500).json( {
            msg: 'Error, favor comuniquese con el administrador del sistema'
        });
        
    }
}

export const crearNaveLanzaderas= async ( req : Request, res: Response ) => {
    
    const { Nombre, 
            Descripcion, 
            Peso, 
            FechaRetiro, 
            EmpujeToneladas, 
            Propulsion, 
            VelocidadKMPorSegundos, 
            CantidadMotores,
            tbltiponaveId,
            TransporteToneladas,
            AlturaMetros,
            IDNaveLanzada,
            IDAgencia,
            tblcombustibleId
        } = req.body;

    
    const nave = {
        Nombre,
        Descripcion,
        Peso,
        FechaRetiro,
        EmpujeToneladas,
        Propulsion,
        VelocidadKMPorSegundos,
        CantidadMotores,
        tbltiponaveId
    
    }
    const lanzaderas = {
        TransporteToneladas,
        AlturaMetros,
        IDNaveLanzada
    }
    const agenciasNaves = {
        IDAgencia
    }

    const combustibleNaves = {
        tblcombustibleId
    }
    try {
        
        const lanzadera = new clsLanzaderas(nave as navestInput, lanzaderas, agenciasNaves, combustibleNaves);
 
        const result = await lanzadera.crearNave();

        return res.status(201).json( {
            msg: 'Naves',
            
            result
        })
        
    } catch (error) {
        console.log(error);
                
        return res.status(500).json( {
            msg: 'Error, favor comuniquese con el administrador del sistema'
        });
        
    }
}

export const crearMision = async (req: Request, res : Response) => {
    try {
        //console.log( req.body )
        const mision = new clsMision(  )
       const result = await mision.crearMision(req.body);
        
        return res.status(201).json( {
            msg: 'Naves',            
            result
        })
        
    } catch (error) {
        console.log(error);
        if(error){
            return res.status(400).json({
                msg: error
            })
        }
                
        return res.status(500).json( {
            msg: 'Error, favor comuniquese con el administrador del sistema'
        });
    }
    
}


export const consultarMisiones = async (req: Request, res : Response) => {
    try {
        const { IDNave } = req.body;
        const mision = new clsMision()
       const result = await mision.buscarMision( IDNave );
        
        return res.status(201).json( {
            msg: 'Misiones',            
            result
        })
        
    } catch (error) {
        console.log(error);
        if(error){
            return res.status(400).json({
                msg: error
            })
        }
                
        return res.status(500).json( {
            msg: 'Error, favor comuniquese con el administrador del sistema'
        });
    }
    
}

export const consultarNombreNave = async (req: Request, res : Response) => {
    try {
        const { Nombre } = req.body;
        //tenemos una clase abstract 'clsnaves' en ella está el metodo buscarpornombre, 
        //creamos la instancia usando cualquier clase hija
        const notripulada = new clsNotripuladas();
        const result = await notripulada.buscarPorNombreNave( Nombre )
        
        return res.status(201).json( {
            msg: 'Naves',            
            result
        })
        
    } catch (error) {
        console.log(error);
        if(error){
            return res.status(400).json({
                msg: error
            })
        }
                
        return res.status(500).json( {
            msg: 'Error, favor comuniquese con el administrador del sistema'
        });
    }
    
}

export const consultarCategoriaNave = async (req: Request, res : Response) => {
    try {
        const { idTipo } = req.body;
        //tenemos una clase abstract 'clsnaves' en ella está el metodo buscarpornombre, 
        // //creamos la instancia usando cualquier clase hija
        const navescategoria = new clsNotripuladas();
        const result = await navescategoria.categoriaNave( idTipo )
        
        return res.status(201).json( {
            msg: 'Naves',            
            result
        })
        
    } catch (error) {
        console.log(error);
        if(error){
            return res.status(400).json({
                msg: error
            })
        }
                
        return res.status(500).json( {
            msg: 'Error, favor comuniquese con el administrador del sistema'
        });
    }
    
}


export const verNave = async (req: Request, res : Response) => {
    try {
        const { id, idTipo } = req.body;
        //tenemos una clase abstract 'clsnaves' en ella está el metodo buscarpornombre, 
        // //creamos la instancia usando cualquier clase hija
        const tripulada = new clstripuladas();
        const result = await tripulada.navedescripcion( id, idTipo );
        
        return res.status(201).json( {
            msg: 'Naves',            
            result
        })
        
    } catch (error) {
        console.log(error);
        if(error){
            return res.status(400).json({
                msg: error
            })
        }
                
        return res.status(500).json( {
            msg: 'Error, favor comuniquese con el administrador del sistema'
        });
    }
    
}


