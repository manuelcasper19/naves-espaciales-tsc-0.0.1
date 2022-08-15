"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verNave = exports.consultarCategoriaNave = exports.consultarNombreNave = exports.consultarMisiones = exports.crearMision = exports.crearNaveLanzaderas = exports.crearNaveTripulada = exports.crearNave = exports.getNave = void 0;
const naves_model_1 = __importDefault(require("../../models/naves/naves.model"));
const clsnotripuladas_1 = __importDefault(require("../../naves/clsnotripuladas"));
const clstripuladas_1 = __importDefault(require("../../naves/clstripuladas"));
const clslanzaderas_1 = __importDefault(require("../../naves/clslanzaderas"));
const clsmision_1 = __importDefault(require("../../naves/clsmision"));
const getNave = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const naves = yield naves_model_1.default.findAll();
        return res.status(201).json({
            msg: 'Naves',
            naves
        });
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({
            msg: 'Error, favor comuniquese con el administrador del sistema'
        });
    }
});
exports.getNave = getNave;
const crearNave = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { Nombre, Descripcion, Peso, FechaRetiro, EmpujeToneladas, Propulsion, VelocidadKMPorSegundos, CantidadMotores, tbltiponaveId, CeldasFotovoltaicas, ObjetivoEstudio, IDAgencia, tblcombustibleId } = req.body;
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
    };
    const notripuladas = {
        CeldasFotovoltaicas,
        ObjetivoEstudio
    };
    const agenciasNaves = {
        IDAgencia
    };
    const combustibleNaves = {
        tblcombustibleId
    };
    try {
        const notripulada = new clsnotripuladas_1.default(nave, notripuladas, agenciasNaves, combustibleNaves);
        const result = yield notripulada.crearNave();
        return res.status(201).json({
            msg: 'Naves',
            result
        });
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({
            msg: 'Error, favor comuniquese con el administrador del sistema'
        });
    }
});
exports.crearNave = crearNave;
const crearNaveTripulada = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { Nombre, Descripcion, Peso, FechaRetiro, EmpujeToneladas, Propulsion, VelocidadKMPorSegundos, CantidadMotores, tbltiponaveId, CapacidadPersonas, KMDistanciaOrbita, IDFines, IDAgencia, tblcombustibleId } = req.body;
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
    };
    const tripuladas = {
        CapacidadPersonas,
        KMDistanciaOrbita,
        IDFines
    };
    const agenciasNaves = {
        IDAgencia
    };
    const combustibleNaves = {
        tblcombustibleId
    };
    try {
        const tripulada = new clstripuladas_1.default(nave, tripuladas, agenciasNaves, combustibleNaves);
        const result = yield tripulada.crearNave();
        return res.status(201).json({
            msg: 'Naves',
            result
        });
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({
            msg: 'Error, favor comuniquese con el administrador del sistema'
        });
    }
});
exports.crearNaveTripulada = crearNaveTripulada;
const crearNaveLanzaderas = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { Nombre, Descripcion, Peso, FechaRetiro, EmpujeToneladas, Propulsion, VelocidadKMPorSegundos, CantidadMotores, tbltiponaveId, TransporteToneladas, AlturaMetros, IDNaveLanzada, IDAgencia, tblcombustibleId } = req.body;
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
    };
    const lanzaderas = {
        TransporteToneladas,
        AlturaMetros,
        IDNaveLanzada
    };
    const agenciasNaves = {
        IDAgencia
    };
    const combustibleNaves = {
        tblcombustibleId
    };
    try {
        const lanzadera = new clslanzaderas_1.default(nave, lanzaderas, agenciasNaves, combustibleNaves);
        const result = yield lanzadera.crearNave();
        return res.status(201).json({
            msg: 'Naves',
            result
        });
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({
            msg: 'Error, favor comuniquese con el administrador del sistema'
        });
    }
});
exports.crearNaveLanzaderas = crearNaveLanzaderas;
const crearMision = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        //console.log( req.body )
        const mision = new clsmision_1.default();
        const result = yield mision.crearMision(req.body);
        return res.status(201).json({
            msg: 'Naves',
            result
        });
    }
    catch (error) {
        console.log(error);
        if (error) {
            return res.status(400).json({
                msg: error
            });
        }
        return res.status(500).json({
            msg: 'Error, favor comuniquese con el administrador del sistema'
        });
    }
});
exports.crearMision = crearMision;
const consultarMisiones = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { IDNave } = req.body;
        const mision = new clsmision_1.default();
        const result = yield mision.buscarMision(IDNave);
        return res.status(201).json({
            msg: 'Misiones',
            result
        });
    }
    catch (error) {
        console.log(error);
        if (error) {
            return res.status(400).json({
                msg: error
            });
        }
        return res.status(500).json({
            msg: 'Error, favor comuniquese con el administrador del sistema'
        });
    }
});
exports.consultarMisiones = consultarMisiones;
const consultarNombreNave = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { Nombre } = req.body;
        //tenemos una clase abstract 'clsnaves' en ella está el metodo buscarpornombre, 
        //creamos la instancia usando cualquier clase hija
        const notripulada = new clsnotripuladas_1.default();
        const result = yield notripulada.buscarPorNombreNave(Nombre);
        return res.status(201).json({
            msg: 'Naves',
            result
        });
    }
    catch (error) {
        console.log(error);
        if (error) {
            return res.status(400).json({
                msg: error
            });
        }
        return res.status(500).json({
            msg: 'Error, favor comuniquese con el administrador del sistema'
        });
    }
});
exports.consultarNombreNave = consultarNombreNave;
const consultarCategoriaNave = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { idTipo } = req.body;
        //tenemos una clase abstract 'clsnaves' en ella está el metodo buscarpornombre, 
        // //creamos la instancia usando cualquier clase hija
        const navescategoria = new clsnotripuladas_1.default();
        const result = yield navescategoria.categoriaNave(idTipo);
        return res.status(201).json({
            msg: 'Naves',
            result
        });
    }
    catch (error) {
        console.log(error);
        if (error) {
            return res.status(400).json({
                msg: error
            });
        }
        return res.status(500).json({
            msg: 'Error, favor comuniquese con el administrador del sistema'
        });
    }
});
exports.consultarCategoriaNave = consultarCategoriaNave;
const verNave = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id, idTipo } = req.body;
        //tenemos una clase abstract 'clsnaves' en ella está el metodo buscarpornombre, 
        // //creamos la instancia usando cualquier clase hija
        const tripulada = new clstripuladas_1.default();
        const result = yield tripulada.navedescripcion(id, idTipo);
        return res.status(201).json({
            msg: 'Naves',
            result
        });
    }
    catch (error) {
        console.log(error);
        if (error) {
            return res.status(400).json({
                msg: error
            });
        }
        return res.status(500).json({
            msg: 'Error, favor comuniquese con el administrador del sistema'
        });
    }
});
exports.verNave = verNave;
//# sourceMappingURL=naves.controller.js.map