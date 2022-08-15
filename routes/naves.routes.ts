import { Router } from "express";
import { check } from "express-validator";
import { consultarCategoriaNave, consultarMisiones, consultarNombreNave, crearMision, crearNave, crearNaveLanzaderas, crearNaveTripulada, getNave, verNave } from "../controller/naves/naves.controller";
import { Campos, validarCamposCorrectos } from "../middlewares/validarcampos";

const router = Router();

router.get('/', getNave );
router.post('/createnave', Campos(), [      
    check('ObjetivoEstudio', 'El objetivo de estudio es necesaria').not().isEmpty(),
    check('CeldasFotovoltaicas', 'Las celdas fotovoltaicas de la nave es necesario').isNumeric(),
    validarCamposCorrectos
],crearNave);

router.post('/createnavetripulada', Campos(), [      
    check('CapacidadPersonas', 'La capacidad de personaes es necesaria').isNumeric(),
    check('KMDistanciaOrbita', 'Los km en orbita de la nave es necesario').isNumeric(),
    validarCamposCorrectos
], crearNaveTripulada);

router.post('/createnavelanzadera', Campos(), [  
    check('AlturaMetros', 'La altura en metros de la nave es necesario').isNumeric(),
    check('IDNaveLanzada', 'El id de la nave lanzada es necesaria').isNumeric(),

    validarCamposCorrectos
], crearNaveLanzaderas);

router.post('/crearmision', [
    check('Mision', 'La mision de la nave es necesario').not().isEmpty(),
    check('FechaLanzamiento', 'La fecha de lanzamiento es necesaria').not().isEmpty(),
    check('tblNaveId', 'El id de la nave lanzada es necesaria').isNumeric(),
    validarCamposCorrectos
], crearMision);

router.get('/consultarmisiones', [
    check('IDNave', 'El id de la nave lanzada es necesaria').isNumeric(),
    validarCamposCorrectos
], consultarMisiones);

router.post('/buscarnavespornombre',[
    check('Nombre', 'El nombre la nave  es necesaria').not().isEmpty(),
    validarCamposCorrectos
], consultarNombreNave
)

router.get('/buscarporcategoria',[
    check('idTipo', 'El nombre la nave  es necesaria').isNumeric(),
    validarCamposCorrectos
], consultarCategoriaNave
)

router.get('/vernave',[
    check('id', 'El id la nave  es necesaria').isNumeric(),
    check('idTipo', 'El tipo de la nave  es necesaria').isNumeric(),
    validarCamposCorrectos
], verNave
)
export default router;