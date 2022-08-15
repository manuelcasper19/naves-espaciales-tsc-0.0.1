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
const mision_model_1 = __importDefault(require("../models/naves/mision.model"));
const naves_model_1 = __importDefault(require("../models/naves/naves.model"));
class clsMision {
    crearMision(mision) {
        return __awaiter(this, void 0, void 0, function* () {
            const nave = yield naves_model_1.default.findByPk(mision.tblNaveId);
            if (nave) {
                if (nave.FechaRetiro === null) {
                    const result = yield mision_model_1.default.create(mision);
                    return Promise.resolve(result);
                }
                return Promise.reject('La nave ya no está disponible');
            }
            return Promise.reject('La nave no exite');
        });
    }
    buscarMision(idnave) {
        return __awaiter(this, void 0, void 0, function* () {
            const misiones = yield mision_model_1.default.findAll({
                where: {
                    tblNaveId: idnave
                }
            });
            if (misiones) {
                return misiones;
            }
            return Promise.reject('La nave no tiene misiones');
        });
    }
}
exports.default = clsMision;
//# sourceMappingURL=clsmision.js.map