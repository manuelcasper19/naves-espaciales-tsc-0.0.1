import {  NextFunction, Request, Response } from "express";
import { check, validationResult } from "express-validator";

export const validarCamposCorrectos = (req: Request, res: Response, next: NextFunction) => {

    const error = validationResult( req );

    if(!error.isEmpty()){
        return res.status(400).json({
            errors: error.mapped()
        });

    }
    next();

}


export const Campos = () => {
    return [
    check('Nombre', 'El nombre de la nave es necesario').not().isEmpty(),
    check('Descripcion', 'La descripción de la nave es necesari').not().isEmpty(),
    check('Peso', 'El peso de la nave es necesario').isNumeric(),
    check('EmpujeToneladas', 'El empuje en toneladas de la nave es necesario').isNumeric(),
    check('Propulsion', 'La propulsión de la nave es necesario').isNumeric(),
    check('VelocidadKMPorSegundos', 'La velocidad de la nave es necesario').isNumeric(),
    check('CantidadMotores', 'La cantidad de motores de la nave es necesario').isNumeric(),
    check('tbltiponaveId', 'El tipo de la nave es necesario').isNumeric(),
    check('IDAgencia', 'El id de la agencia de la nave es necesaria').isNumeric(),
    check('tblcombustibleId', 'El id del combustible es necesaria').isNumeric(),
    ]

   
}