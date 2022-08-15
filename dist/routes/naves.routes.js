"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const express_validator_1 = require("express-validator");
const naves_controller_1 = require("../controller/naves/naves.controller");
const validarcampos_1 = require("../middlewares/validarcampos");
const router = (0, express_1.Router)();
router.get('/', naves_controller_1.getNave);
router.post('/createnave', (0, validarcampos_1.Campos)(), [
    (0, express_validator_1.check)('ObjetivoEstudio', 'El objetivo de estudio es necesaria').not().isEmpty(),
    (0, express_validator_1.check)('CeldasFotovoltaicas', 'Las celdas fotovoltaicas de la nave es necesario').isNumeric(),
    validarcampos_1.validarCamposCorrectos
], naves_controller_1.crearNave);
router.post('/createnavetripulada', (0, validarcampos_1.Campos)(), [
    (0, express_validator_1.check)('CapacidadPersonas', 'La capacidad de personaes es necesaria').isNumeric(),
    (0, express_validator_1.check)('KMDistanciaOrbita', 'Los km en orbita de la nave es necesario').isNumeric(),
    validarcampos_1.validarCamposCorrectos
], naves_controller_1.crearNaveTripulada);
router.post('/createnavelanzadera', (0, validarcampos_1.Campos)(), [
    (0, express_validator_1.check)('AlturaMetros', 'La altura en metros de la nave es necesario').isNumeric(),
    (0, express_validator_1.check)('IDNaveLanzada', 'El id de la nave lanzada es necesaria').isNumeric(),
    validarcampos_1.validarCamposCorrectos
], naves_controller_1.crearNaveLanzaderas);
router.post('/crearmision', [
    (0, express_validator_1.check)('Mision', 'La mision de la nave es necesario').not().isEmpty(),
    (0, express_validator_1.check)('FechaLanzamiento', 'La fecha de lanzamiento es necesaria').not().isEmpty(),
    (0, express_validator_1.check)('tblNaveId', 'El id de la nave lanzada es necesaria').isNumeric(),
    validarcampos_1.validarCamposCorrectos
], naves_controller_1.crearMision);
router.get('/consultarmisiones', [
    (0, express_validator_1.check)('IDNave', 'El id de la nave lanzada es necesaria').isNumeric(),
    validarcampos_1.validarCamposCorrectos
], naves_controller_1.consultarMisiones);
router.post('/buscarnavespornombre', [
    (0, express_validator_1.check)('Nombre', 'El nombre la nave  es necesaria').not().isEmpty(),
    validarcampos_1.validarCamposCorrectos
], naves_controller_1.consultarNombreNave);
router.get('/buscarporcategoria', [
    (0, express_validator_1.check)('idTipo', 'El nombre la nave  es necesaria').isNumeric(),
    validarcampos_1.validarCamposCorrectos
], naves_controller_1.consultarCategoriaNave);
router.get('/vernave', [
    (0, express_validator_1.check)('id', 'El id la nave  es necesaria').isNumeric(),
    (0, express_validator_1.check)('idTipo', 'El tipo de la nave  es necesaria').isNumeric(),
    validarcampos_1.validarCamposCorrectos
], naves_controller_1.verNave);
exports.default = router;
//# sourceMappingURL=naves.routes.js.map