import { HttpException } from "@nestjs/common";
import { Producto } from "src/entities/Producto.entity";
import { Ventas } from "src/entities/Ventas.entity";
import { Repository } from "typeorm";
export declare class VentasService {
    private ventasRepository;
    private productoRepository;
    constructor(ventasRepository: Repository<Ventas>, productoRepository: Repository<Producto>);
    registrarVenta(productos: {
        nombre: string;
        codigoBarra: number;
    }[], efectivoVenta: number, cantidadVenta: number[]): Promise<Ventas>;
    getVentas(): Promise<Ventas[]>;
    getVentaId(id: number): Promise<Ventas | HttpException>;
}
