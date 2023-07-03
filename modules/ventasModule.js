"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ventasModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const ventasController_1 = require("../controllers/ventasController");
const Ventas_entity_1 = require("../entities/Ventas.entity");
const ventasRepository_1 = require("../repository/ventasRepository");
const VentaService_1 = require("../services/VentaService");
let ventasModule = exports.ventasModule = class ventasModule {
};
exports.ventasModule = ventasModule = __decorate([
    (0, common_1.Module)({
        controllers: [ventasController_1.VentasController],
        providers: [VentaService_1.VentasService, ventasRepository_1.ventasRepository],
        imports: [typeorm_1.TypeOrmModule.forFeature([Ventas_entity_1.Ventas])],
    })
], ventasModule);
//# sourceMappingURL=ventasModule.js.map