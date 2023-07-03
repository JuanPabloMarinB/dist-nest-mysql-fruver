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
exports.VentasXDia = void 0;
const typeorm_1 = require("typeorm");
let VentasXDia = exports.VentasXDia = class VentasXDia {
};
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], VentasXDia.prototype, "totalVentasRealizadas", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], VentasXDia.prototype, "TotalAcumulado", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Date)
], VentasXDia.prototype, "fechaCierreCaja", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], VentasXDia.prototype, "ganancia", void 0);
exports.VentasXDia = VentasXDia = __decorate([
    (0, typeorm_1.Entity)()
], VentasXDia);
//# sourceMappingURL=VentasXDia.js.map