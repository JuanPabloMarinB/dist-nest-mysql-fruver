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
exports.Producto = void 0;
const typeorm_1 = require("typeorm");
const Categoria_entity_1 = require("./Categoria.entity");
const Ventas_entity_1 = require("./Ventas.entity");
const Medida_1 = require("../enums/Medida");
let Producto = exports.Producto = class Producto {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Producto.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', unique: false, default: 1566 }),
    __metadata("design:type", Number)
], Producto.prototype, "codigoBarra", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: "arroz chino" }),
    __metadata("design:type", String)
], Producto.prototype, "nombre", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'enum', enum: Medida_1.Medida, default: Medida_1.Medida.UNIDAD }),
    __metadata("design:type", String)
], Producto.prototype, "medida", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 1500 }),
    __metadata("design:type", Number)
], Producto.prototype, "costoXunidad", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 0 }),
    __metadata("design:type", Number)
], Producto.prototype, "precioVenta", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: "23-06-2022" }),
    __metadata("design:type", String)
], Producto.prototype, "fechaIngreso", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Producto.prototype, "cantidadIngresada", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 0 }),
    __metadata("design:type", Number)
], Producto.prototype, "cantidadActual", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: false }),
    __metadata("design:type", Boolean)
], Producto.prototype, "avisoReposicion", void 0);
__decorate([
    (0, typeorm_1.Column)('longblob', { nullable: true }),
    __metadata("design:type", Buffer)
], Producto.prototype, "imagen", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Categoria_entity_1.Categoria, (categoria) => categoria.productos),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", Categoria_entity_1.Categoria)
], Producto.prototype, "categoria", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => Ventas_entity_1.Ventas, (ventas) => ventas.productos),
    __metadata("design:type", Ventas_entity_1.Ventas)
], Producto.prototype, "ventas", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: true }),
    __metadata("design:type", Boolean)
], Producto.prototype, "activo", void 0);
exports.Producto = Producto = __decorate([
    (0, typeorm_1.Entity)()
], Producto);
//# sourceMappingURL=Producto.entity.js.map