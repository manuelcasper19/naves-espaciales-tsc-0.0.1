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
const sequelize_1 = require("sequelize");
const agencia_model_1 = __importDefault(require("../models/naves/agencia.model"));
const agencianaves_model_1 = __importDefault(require("../models/naves/agencianaves.model"));
const combustible_model_1 = __importDefault(require("../models/naves/combustible.model"));
const combustiblenaves_model_1 = __importDefault(require("../models/naves/combustiblenaves.model"));
const fines_model_1 = __importDefault(require("../models/naves/fines.model"));
const lanzaderas_model_1 = __importDefault(require("../models/naves/lanzaderas.model"));
const mision_model_1 = __importDefault(require("../models/naves/mision.model"));
const naves_model_1 = __importDefault(require("../models/naves/naves.model"));
const naves_model_2 = __importDefault(require("../models/naves/naves.model"));
const notripuladas_model_1 = __importDefault(require("../models/naves/notripuladas.model"));
const tiponave_model_1 = __importDefault(require("../models/naves/tiponave.model"));
const tripuladas_model_1 = __importDefault(require("../models/naves/tripuladas.model"));
class clsNaves {
    constructor(naves, agenciaNave, combustibleNaves) {
        this.agenciaNave = agenciaNave;
        this.combustibleNaves = combustibleNaves;
        this.vehiculo = {};
        this.vehiculo = naves;
    }
    save() {
        var _a, _b, _c;
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield naves_model_2.default.create(this.vehiculo);
            console.log(this.combustibleNaves.tblcombustibleId);
            (_a = this.combustibleNaves.tblcombustibleId) === null || _a === void 0 ? void 0 : _a.forEach((combustible) => __awaiter(this, void 0, void 0, function* () {
                this.combustibleNaves.tblNaveId = result.id;
                this.combustibleNaves.tblcombustibleId = [combustible];
                console.log(combustible);
                yield combustiblenaves_model_1.default.create(this.combustibleNaves);
            }));
            console.log((_b = this.combustibleNaves.tblcombustibleId) === null || _b === void 0 ? void 0 : _b.length);
            (_c = this.agenciaNave.IDAgencia) === null || _c === void 0 ? void 0 : _c.forEach((agencia) => __awaiter(this, void 0, void 0, function* () {
                this.agenciaNave.IDNave = result.id;
                this.agenciaNave.IDAgencia = [agencia];
                yield agencianaves_model_1.default.create(this.agenciaNave);
            }));
            return result;
        });
    }
    buscarPorNombreNave(nombre) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield naves_model_1.default.findAll({
                limit: 6,
                where: {
                    Nombre: {
                        [sequelize_1.Op.like]: '%' + nombre + '%',
                    }
                },
            });
            if (result.length > 0) {
                return result;
            }
            else {
                return Promise.reject(`No existe el termino:  ${nombre}, intente nuevamente`);
            }
        });
    }
    categoriaNave(idCategoria) {
        return __awaiter(this, void 0, void 0, function* () {
            const naves = yield naves_model_1.default.findAll({
                where: {
                    tbltiponaveId: idCategoria
                },
                attributes: {
                    exclude: ['createdAt', 'updatedAt', 'deletedAt'],
                },
                include: {
                    model: tiponave_model_1.default,
                    attributes: ['tipo']
                }
            });
            return naves;
        });
    }
    navedescripcion(idnave, idTipo) {
        return __awaiter(this, void 0, void 0, function* () {
            if (idTipo === 1) {
                const navenoTripuladas = yield naves_model_1.default.findOne({
                    where: {
                        id: idnave
                    },
                    attributes: {
                        exclude: ['createdAt', 'updatedAt', 'deletedAt'],
                    },
                    include: [
                        {
                            model: notripuladas_model_1.default,
                            //attributes: ['CapacidadPersonas', 'KMDistanciaOrbita'],
                        },
                        {
                            model: mision_model_1.default
                        },
                        {
                            model: combustible_model_1.default,
                        },
                        {
                            model: agencia_model_1.default
                        }
                    ]
                });
                return navenoTripuladas;
            }
            else if (idTipo === 2) {
                const naveTripuladas = yield naves_model_1.default.findOne({
                    where: {
                        id: idnave
                    },
                    attributes: {
                        exclude: ['createdAt', 'updatedAt', 'deletedAt'],
                    },
                    include: [
                        {
                            model: tripuladas_model_1.default,
                            attributes: ['CapacidadPersonas', 'KMDistanciaOrbita'],
                            include: [
                                {
                                    model: fines_model_1.default,
                                    attributes: ['Descripcion']
                                }
                            ]
                        },
                        {
                            model: mision_model_1.default
                        },
                        {
                            model: combustible_model_1.default,
                        },
                        {
                            model: agencia_model_1.default
                        }
                    ]
                });
                return naveTripuladas;
            }
            else if (idTipo === 3) {
                const navenoTripuladas = yield naves_model_1.default.findOne({
                    where: {
                        id: idnave
                    },
                    attributes: {
                        exclude: ['createdAt', 'updatedAt', 'deletedAt'],
                    },
                    include: [
                        {
                            model: lanzaderas_model_1.default,
                            //attributes: ['CapacidadPersonas', 'KMDistanciaOrbita'],
                        },
                        {
                            model: mision_model_1.default
                        },
                        {
                            model: combustible_model_1.default,
                        },
                        {
                            model: agencia_model_1.default
                        }
                    ]
                });
                return navenoTripuladas;
            }
            return Promise.reject(`No existe el termino:  ${idnave}, intente nuevamente`);
        });
    }
}
exports.default = clsNaves;
//# sourceMappingURL=clsnaves.js.map