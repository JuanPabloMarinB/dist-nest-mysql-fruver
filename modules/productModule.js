"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.productModule = void 0;
const common_1 = require("@nestjs/common");
const productController_1 = require("../controllers/productController");
const ProductService_1 = require("../services/ProductService");
const productoRepository_1 = require("../repository/productoRepository");
const Producto_entity_1 = require("../entities/Producto.entity");
const typeorm_1 = require("@nestjs/typeorm");
let productModule = exports.productModule = class productModule {
};
exports.productModule = productModule = __decorate([
    (0, common_1.Module)({
        controllers: [productController_1.productController],
        providers: [ProductService_1.ProductService, productoRepository_1.productoRepository],
        imports: [typeorm_1.TypeOrmModule.forFeature([Producto_entity_1.Producto])],
    })
], productModule);
//# sourceMappingURL=productModule.js.map