"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_config_1 = require("./typeorm.config");
const productModule_1 = require("./productModule");
const userModule_1 = require("./userModule");
const Producto_entity_1 = require("../entities/Producto.entity");
const ProductService_1 = require("../services/ProductService");
const Jwt_auth_guard_1 = require("../modules/Jwt-auth.guard");
const Usuario_entity_1 = require("../entities/Usuario.entity");
const UserService_1 = require("../services/UserService");
const Ventas_entity_1 = require("../entities/Ventas.entity");
const Categoria_entity_1 = require("../entities/Categoria.entity");
const productController_1 = require("../controllers/productController");
const userController_1 = require("../controllers/userController");
const jwt_1 = require("@nestjs/jwt");
const enumsController_1 = require("../controllers/enumsController");
const ventasModule_1 = require("./ventasModule");
const VentaService_1 = require("../services/VentaService");
const ventasController_1 = require("../controllers/ventasController");
let AppModule = exports.AppModule = class AppModule {
};
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forRoot(typeorm_config_1.default),
            typeorm_1.TypeOrmModule.forFeature([
                Producto_entity_1.Producto,
                Usuario_entity_1.Usuario,
                Ventas_entity_1.Ventas,
                Categoria_entity_1.Categoria,
                productModule_1.productModule,
                ventasModule_1.ventasModule,
                userModule_1.userModule,
            ]),
        ],
        controllers: [productController_1.productController, userController_1.userController, enumsController_1.EnumController, ventasController_1.VentasController],
        providers: [ProductService_1.ProductService, Jwt_auth_guard_1.JwtAuthGuard, UserService_1.UserService, jwt_1.JwtService, VentaService_1.VentasService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map