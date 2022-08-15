"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Campos = exports.validarCamposCorrectos = void 0;
const express_validator_1 = require("express-validator");
const validarCamposCorrectos = (req, res, next) => {
    const error = (0, express_validator_1.validationResult)(req);
    if (!error.isEmpty()) {
        return res.status(400).json({
            errors: error.mapped()
        });
    }
    next();
};
exports.validarCamposCorrectos = validarCamposCorrectos;
const Campos = () => {
    return [
        (0, express_validator_1.check)('Nombre', 'El nombre de la nave es necesario').not().isEmpty(),
        (0, express_validator_1.check)('Descripcion', 'La descripción de la nave es necesari').not().isEmpty(),
        (0, express_validator_1.check)('Peso', 'El peso de la nave es necesario').isNumeric(),
        (0, express_validator_1.check)('EmpujeToneladas', 'El empuje en toneladas de la nave es necesario').isNumeric(),
        (0, express_validator_1.check)('Propulsion', 'La propulsión de la nave es necesario').isNumeric(),
        (0, express_validator_1.check)('VelocidadKMPorSegundos', 'La velocidad de la nave es necesario').isNumeric(),
        (0, express_validator_1.check)('CantidadMotores', 'La cantidad de motores de la nave es necesario').isNumeric(),
        (0, express_validator_1.check)('tbltiponaveId', 'El tipo de la nave es necesario').isNumeric(),
        (0, express_validator_1.check)('IDAgencia', 'El id de la agencia de la nave es necesaria').isNumeric(),
        (0, express_validator_1.check)('tblcombustibleId', 'El id del combustible es necesaria').isNumeric(),
    ];
};
exports.Campos = Campos;
//# sourceMappingURL=validarcampos.js.map