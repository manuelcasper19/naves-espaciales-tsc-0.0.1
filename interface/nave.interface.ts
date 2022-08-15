import { Optional } from "sequelize/types"

export interface naves {
    id?                     : number,
    Nombre?                  : string,
    Descripcion?             : string,
    Peso?                    : number,
    FechaRetiro?            : Date,
    EmpujeToneladas?         : number,
    Propulsion?              : number,
    VelocidadKMPorSegundos?  : number,
    CantidadMotores?         : number,
    tbltiponaveId?                  : number
}
export interface navestInput extends Optional<naves, 'id'> {}
export interface navestOuput extends Required<naves> {}



export interface naveNotripulada {
    IDNave?             :  number,
    CeldasFotovoltaicas	:  number,
    ObjetivoEstudio     :  string

}

export interface navestnoTripuladasInput extends Optional<naveNotripulada, 'IDNave'> {}
export interface navesnoTripuladasOuput extends Required<naveNotripulada> {}


//interface de naves tripuladas y extension para agregarlas en el model
export interface tripuladas {
    tblNaveId? : number,
    CapacidadPersonas: number,
    KMDistanciaOrbita: number,
    IDFines : number
}

export interface navesTripuladasInput extends Optional< tripuladas, 'tblNaveId'> {}
export interface navesTripuladasOutput extends Required < tripuladas >{}

//interface de naves lanzaderas y extension para agregarlas en el model
export interface Lanzaderas {
    IDNave? : number,
    TransporteToneladas: number,
    AlturaMetros: number,
    IDNaveLanzada : number
}

export interface navesLanzaderasInput extends Optional< Lanzaderas, 'IDNave'> {}
export interface navesLanzaderasOutput extends Required < Lanzaderas >{}


//interface de naves y agencias  para agregarlas en el model
export interface AgenciaNaves {
    IDNave?  : number,
    IDAgencia: number[],
 
}

export interface AgenciaNavesInput extends Optional< AgenciaNaves, 'IDNave' | 'IDAgencia'> {}
export interface AgenciaNavesOutput extends Required < AgenciaNaves >{}


//interface de naves y combustible  para agregarlas en el model
export interface CombustibleNaves {
    tblNaveId?  : number,
    tblcombustibleId : number[],
 
}

export interface CombustibleNavesInput extends Optional< CombustibleNaves, 'tblNaveId' | 'tblcombustibleId'> {}
export interface CombustibleNavesOutput extends Required < CombustibleNaves >{}


//interface mision para agregarla al modelo y mappear la tabla

export interface Mision {
    IDMision? : number,
    Mision: string,
    FechaLanzamiento: Date,
    FechaLlegada: Date,
    CantidadAniosLlegar?: number
    tblNaveId: number
}

export interface MisionInput extends Optional<Mision , 'IDMision'> {}
export interface MisionOutput extends Required<Mision> {}

//interface categoria para agregarla al modelo y mappear la tabla

export interface Tipo {
    id? : number,
    tipo: string,   
}

export interface TipoInput extends Optional<Tipo , 'id'> {}
export interface TipoOutput extends Required<Tipo> {}


//interface fines para agregarla al modelo y mappear la tabla

export interface Fines {
    IDFines? : number,
    Descripcion	: string,   
}

export interface FinesInput extends Optional<Fines , 'IDFines'> {}
export interface FinesOutput extends Required<Fines> {}


//interface combustible para agregarla al modelo y mappear la tabla

export interface Combustible {
    id ? : number,
    Combustible	: string,   
}

export interface CombustibleInput extends Optional<Combustible , 'id'> {}
export interface CombustibleOutput extends Required<Combustible> {}


//interface agencia para agregarla al modelo y mappear la tabla

export interface Agencia {
    id ? : number,
    Agencia	: string,   
    Pais: string
}

export interface AgenciaInput extends Optional<Agencia , 'id'> {}
export interface AgenciaOutput extends Required<Agencia> {}






