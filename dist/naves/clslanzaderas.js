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
const lanzaderas_model_1 = __importDefault(require("../models/naves/lanzaderas.model"));
const clsnaves_1 = __importDefault(require("./clsnaves"));
class clsLanzaderas extends clsnaves_1.default {
    constructor(nave, lanzaderas, agenciasnaves, combustibleNaves) {
        super(nave, agenciasnaves, combustibleNaves);
        this.lanzaderas = lanzaderas;
    }
    crearNave() {
        return __awaiter(this, void 0, void 0, function* () {
            const nave = yield this.save();
            if (nave) {
                this.lanzaderas.IDNave = nave.id;
                const result = yield lanzaderas_model_1.default.create(this.lanzaderas);
                this.newNave = {
                    id: nave.id,
                    Nombre: nave.Nombre,
                    Descripcion: nave.Descripcion,
                    Peso: nave.Peso,
                    FechaRetiro: nave.FechaRetiro,
                    EmpujeToneladas: nave.EmpujeToneladas,
                    Propulsion: nave.Propulsion,
                    VelocidadKMPorSegundos: nave.Propulsion,
                    CantidadMotores: nave.CantidadMotores,
                    tbltiponaveId: nave.tbltiponaveId,
                    TransporteToneladas: result.TransporteToneladas,
                    AlturaMetros: result.AlturaMetros,
                };
                return this.newNave;
            }
            return Promise.reject('Error al guardar, intente nuevamente');
        });
    }
}
exports.default = clsLanzaderas;
//# sourceMappingURL=clslanzaderas.js.map