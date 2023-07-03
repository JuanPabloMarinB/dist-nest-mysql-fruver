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
exports.Categoria = void 0;
const typeorm_1 = require("typeorm");
const Producto_entity_1 = require("./Producto.entity");
const CategoriaEnum_1 = require("../enums/CategoriaEnum");
let Categoria = exports.Categoria = class Categoria {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Categoria.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'enum', enum: CategoriaEnum_1.CategoriaEnum, default: CategoriaEnum_1.CategoriaEnum.HORTALIZAS }),
    __metadata("design:type", Categoria)
], Categoria.prototype, "nombreCategoria", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => Producto_entity_1.Producto, producto => producto.categoria),
    __metadata("design:type", Array)
], Categoria.prototype, "productos", void 0);
exports.Categoria = Categoria = __decorate([
    (0, typeorm_1.Entity)()
], Categoria);
//# sourceMappingURL=Categoria.entity.js.map