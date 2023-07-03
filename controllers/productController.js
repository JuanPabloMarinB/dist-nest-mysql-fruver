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
exports.productController = void 0;
const common_1 = require("@nestjs/common");
const Producto_entity_1 = require("../entities/Producto.entity");
const ProductService_1 = require("../services/ProductService");
const platform_express_1 = require("@nestjs/platform-express");
let productController = exports.productController = class productController {
    constructor(productoService) {
        this.productoService = productoService;
    }
    getAllProductos() {
        return this.productoService.findAll();
    }
    getProductoById(id) {
        return this.productoService.findById(id);
    }
    createProducto(producto) {
        return this.productoService.create(producto);
    }
    updateProducto(id, producto) {
        return this.productoService.update(id, producto);
    }
    deleteProducto(id) {
        return this.productoService.delete(id);
    }
    getHome() {
        return 'index.html';
    }
    getCreate() {
        return 'crear.html';
    }
    saveProducto(producto) {
        return this.productoService.create(producto);
    }
    editProducto(id) {
        return 'index.html';
    }
    getProducto(id) {
        return 'index.html';
    }
    registerProducto() {
        return 'registro.html';
    }
    async registrarProducto(producto, imagen) {
        await this.productoService.registrar(producto.nombre = "productoImagen", producto.costoXunidad = 1500, producto.cantidadIngresada = 100, imagen);
        return this.productoService.registrar;
    }
    registrarVenta() {
        return 'redirect:/index';
    }
    async mostrarInventario(res) {
        const productos = await this.productoService.findAll();
        res.render('inventario', { productos });
    }
    async mostrarProductos(res) {
        const productos = await this.productoService.findAll();
        res.render('index', { producto: productos, mostrarProductos: true });
    }
    async mostrarVentas(res) {
        const productos = await this.productoService.findAll();
        res.render('index', { producto: productos, mostrarVentas: true });
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], productController.prototype, "getAllProductos", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], productController.prototype, "getProductoById", null);
__decorate([
    (0, common_1.Post)('crear'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Producto_entity_1.Producto]),
    __metadata("design:returntype", Promise)
], productController.prototype, "createProducto", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Producto_entity_1.Producto]),
    __metadata("design:returntype", Promise)
], productController.prototype, "updateProducto", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], productController.prototype, "deleteProducto", null);
__decorate([
    (0, common_1.Get)('portal'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], productController.prototype, "getHome", null);
__decorate([
    (0, common_1.Get)('create'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], productController.prototype, "getCreate", null);
__decorate([
    (0, common_1.Post)('save'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Producto_entity_1.Producto]),
    __metadata("design:returntype", void 0)
], productController.prototype, "saveProducto", null);
__decorate([
    (0, common_1.Get)('editar/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", String)
], productController.prototype, "editProducto", null);
__decorate([
    (0, common_1.Get)('producto/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", String)
], productController.prototype, "getProducto", null);
__decorate([
    (0, common_1.Get)('registro'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], productController.prototype, "registerProducto", null);
__decorate([
    (0, common_1.Post)('registro'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('imagen')),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Producto_entity_1.Producto, Object]),
    __metadata("design:returntype", Promise)
], productController.prototype, "registrarProducto", null);
__decorate([
    (0, common_1.Get)('registrar-venta'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], productController.prototype, "registrarVenta", null);
__decorate([
    (0, common_1.Get)('mostrar-inventario'),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], productController.prototype, "mostrarInventario", null);
__decorate([
    (0, common_1.Get)('products'),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], productController.prototype, "mostrarProductos", null);
__decorate([
    (0, common_1.Get)('sales'),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], productController.prototype, "mostrarVentas", null);
exports.productController = productController = __decorate([
    (0, common_1.Controller)('producto'),
    __metadata("design:paramtypes", [ProductService_1.ProductService])
], productController);
//# sourceMappingURL=productController.js.map