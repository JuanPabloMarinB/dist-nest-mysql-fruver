import { VentasService } from './../services/VentaService';
import { Ventas } from 'src/entities/Ventas.entity';
export declare class VentasController {
    private readonly ventasService;
    constructor(ventasService: VentasService);
    getVentas(): Promise<Ventas[]>;
    getVentaId(id: number): Promise<Ventas | import("@nestjs/common").HttpException>;
    registrarVenta(venta: Ventas, cantidadVenta: number[]): Promise<Ventas>;
}
