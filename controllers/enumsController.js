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
exports.EnumController = void 0;
const common_1 = require("@nestjs/common");
const Medida_1 = require("../enums/Medida");
const CategoriaEnum_1 = require("../enums/CategoriaEnum");
let EnumController = exports.EnumController = class EnumController {
    getMedidaEnum() {
        return Object.values(Medida_1.Medida);
    }
    getCategoriaEnum() {
        return Object.values(CategoriaEnum_1.CategoriaEnum);
    }
};
__decorate([
    (0, common_1.Get)('medida'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], EnumController.prototype, "getMedidaEnum", null);
__decorate([
    (0, common_1.Get)('Categoria'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], EnumController.prototype, "getCategoriaEnum", null);
exports.EnumController = EnumController = __decorate([
    (0, common_1.Controller)('enums')
], EnumController);
//# sourceMappingURL=enumsController.js.map