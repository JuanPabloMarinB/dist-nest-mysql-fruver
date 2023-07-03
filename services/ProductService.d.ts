/// <reference types="multer" />
import { Repository } from 'typeorm';
import { Producto } from '../entities/Producto.entity';
export declare class ProductService {
    private productoRepository;
    constructor(productoRepository: Repository<Producto>);
    findAll(): Promise<Producto[]>;
    findById(id: number): Promise<Producto>;
    update(id: number, producto: Producto): Promise<void>;
    create(producto: Producto): Promise<Producto>;
    delete(id: number): Promise<void>;
    save(producto: Producto): Promise<Producto>;
    registrar(nombre: string, costoXunidad: number, cantidadIngresada: number, imagen: Express.Multer.File): Promise<void>;
    private validar;
    mostrarInventario(): Promise<void>;
}
