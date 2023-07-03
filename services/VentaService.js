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
exports.VentasService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const Producto_entity_1 = require("../entities/Producto.entity");
const Ventas_entity_1 = require("../entities/Ventas.entity");
const Medida_1 = require("../enums/Medida");
const typeorm_2 = require("typeorm");
let VentasService = exports.VentasService = class VentasService {
    constructor(ventasRepository, productoRepository) {
        this.ventasRepository = ventasRepository;
        this.productoRepository = productoRepository;
    }
    async registrarVenta(productos, efectivoVenta, cantidadVenta) {
        console.log("La línea de abajo es del servicio. Soy de la línea 79");
        console.log(productos, efectivoVenta, cantidadVenta);
        const nuevaVenta = new Ventas_entity_1.Ventas();
        nuevaVenta.productos = [];
        for (let i = 0; i < productos.length; i++) {
            const productoEncontrado = await this.productoRepository.findOne({
                where: {
                    nombre: productos[i].nombre,
                    codigoBarra: productos[i].codigoBarra
                },
            });
            if (productoEncontrado) {
                console.log("Soy la línea 93");
                console.log(productoEncontrado);
                if (productoEncontrado.medida === Medida_1.Medida.UNIDAD) {
                    if (cantidadVenta[0] < productoEncontrado.cantidadActual) {
                        const totalPrecioProductos = productoEncontrado.precioVenta * cantidadVenta[0];
                        console.log(totalPrecioProductos);
                        nuevaVenta.totalAPagar += totalPrecioProductos;
                        console.log("Soy la línea 101");
                        console.log(nuevaVenta.totalAPagar);
                        productoEncontrado.cantidadActual -= cantidadVenta[0];
                        console.log("Soy la línea 104");
                        console.log(productoEncontrado.cantidadActual);
                        await this.productoRepository.update(productoEncontrado.id, productoEncontrado);
                        console.log("Soy la línea 106");
                        console.log(productos);
                        nuevaVenta.productos.push(productoEncontrado);
                        console.log("Producto registrado en venta");
                    }
                    else {
                        console.log("La cantidad de productos a vender supera el stock disponible");
                    }
                }
                else if (productoEncontrado.medida === Medida_1.Medida.PESO) {
                    if (cantidadVenta[0] < productoEncontrado.cantidadActual) {
                        const totalPrecioProductos = productoEncontrado.precioVenta * cantidadVenta[0];
                        nuevaVenta.totalAPagar += totalPrecioProductos;
                        productoEncontrado.cantidadActual -= cantidadVenta[0];
                        await this.productoRepository.update(productoEncontrado.id, productoEncontrado);
                        nuevaVenta.productos.push(productoEncontrado);
                        console.log("Producto registrado en venta");
                    }
                    else {
                        console.log("La cantidad de productos a vender supera el stock disponible");
                    }
                }
            }
            else {
                console.log("Este producto no esta registrado en el inventario");
            }
            const ventaFactura = Math.floor(Math.random() * (999999 - 100000 + 1)) + 100000;
            nuevaVenta.ventaFactura = ventaFactura;
            nuevaVenta.efectivo = efectivoVenta;
            nuevaVenta.cambio = efectivoVenta - nuevaVenta.totalAPagar;
            return await this.ventasRepository.save(nuevaVenta);
        }
    }
    getVentas() {
        return this.ventasRepository.find({
            relations: ['productos']
        });
    }
    async getVentaId(id) {
        const ventaEncontrada = await this.ventasRepository.findOne({
            where: {
                id
            },
            relations: ['productos']
        });
        if (!ventaEncontrada) {
            return new common_1.HttpException('User not found', common_1.HttpStatus.NOT_FOUND);
        }
        return ventaEncontrada;
    }
};
exports.VentasService = VentasService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(Ventas_entity_1.Ventas)),
    __param(1, (0, typeorm_1.InjectRepository)(Producto_entity_1.Producto)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], VentasService);
//# sourceMappingURL=VentaService.js.map