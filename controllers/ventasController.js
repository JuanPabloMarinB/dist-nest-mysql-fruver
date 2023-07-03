"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VentasController = void 0;
const common_1 = require("@nestjs/common");
const VentaService_1 = require("./../services/VentaService");
const Ventas_entity_1 = require("../entities/Ventas.entity");
let VentasController = exports.VentasController = class VentasController {
    constructor(ventasService) {
        this.ventasService = ventasService;
    }
    getVentas() {
        return this.ventasService.getVentas();
    }
    getVentaId(id) {
        console.log(id);
        console.log(typeof id);
        return this.ventasService.getVentaId(id);
    }
    registrarVenta(venta, cantidadVenta) {
        return this.ventasService.registrarVenta(venta.productos, venta.efectivo, cantidadVenta);
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], VentasController.prototype, "getVentas", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], VentasController.prototype, "getVentaId", null);
__decorate([
    (0, common_1.Post)('registro-venta'),
    __param(0, (0, common_1.Body)('venta')),
    __param(1, (0, common_1.Body)('cantidadVenta')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Ventas_entity_1.Ventas, Array]),
    __metadata("design:returntype", void 0)
], VentasController.prototype, "registrarVenta", null);
exports.VentasController = VentasController = __decorate([
    (0, common_1.Controller)('venta'),
    __metadata("design:paramtypes", [VentaService_1.VentasService])
], VentasController);
//# sourceMappingURL=ventasController.js.map