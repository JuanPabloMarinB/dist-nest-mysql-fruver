/// <reference types="multer" />
import { Producto } from '../entities/Producto.entity';
import { ProductService } from '../services/ProductService';
export declare class productController {
    private readonly productoService;
    constructor(productoService: ProductService);
    getAllProductos(): Promise<Producto[]>;
    getProductoById(id: number): Promise<Producto>;
    createProducto(producto: Producto): Promise<Producto>;
    updateProducto(id: number, producto: Producto): Promise<void>;
    deleteProducto(id: number): Promise<void>;
    getHome(): string;
    getCreate(): string;
    saveProducto(producto: Producto): Promise<Producto>;
    editProducto(id: number): string;
    getProducto(id: number): string;
    registerProducto(): string;
    registrarProducto(producto: Producto, imagen: Express.Multer.File): Promise<(nombre: string, costoXunidad: number, cantidadIngresada: number, imagen: Express.Multer.File) => Promise<void>>;
    registrarVenta(): string;
    mostrarInventario(res: any): Promise<void>;
    mostrarProductos(res: any): Promise<void>;
    mostrarVentas(res: any): Promise<void>;
}
