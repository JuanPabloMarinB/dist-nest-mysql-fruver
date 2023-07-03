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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Ventas = void 0;
const typeorm_1 = require("typeorm");
const Producto_entity_1 = require("./Producto.entity");
let Ventas = exports.Ventas = class Ventas {
    constructor() {
        this.totalAPagar = 0;
    }
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Ventas.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', unique: true }),
    __metadata("design:type", Number)
], Ventas.prototype, "ventaFactura", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP' }),
    __metadata("design:type", Date)
], Ventas.prototype, "fechaVenta", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => Producto_entity_1.Producto),
    (0, typeorm_1.JoinTable)(),
    __metadata("design:type", Array)
], Ventas.prototype, "productos", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Ventas.prototype, "totalAPagar", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Ventas.prototype, "efectivo", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Ventas.prototype, "cambio", void 0);
exports.Ventas = Ventas = __decorate([
    (0, typeorm_1.Entity)(),
    __metadata("design:paramtypes", [])
], Ventas);
//# sourceMappingURL=Ventas.entity.js.map