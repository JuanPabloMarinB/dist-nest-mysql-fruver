import { Repository } from 'typeorm';
import { Producto } from '../entities/Producto.entity';
export declare class productoRepository extends Repository<Producto> {
    findByNombre(nombre: string): Promise<Producto>;
}
