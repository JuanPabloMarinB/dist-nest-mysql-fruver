import { Producto } from './Producto.entity';
export declare class Ventas {
    id: number;
    ventaFactura: number;
    fechaVenta: Date;
    productos: Producto[];
    totalAPagar: number;
    efectivo: number;
    cambio: number;
    constructor();
}
