import { Repository } from 'typeorm';
import { Ventas } from '../entities/Ventas.entity';
export declare class ventasRepository extends Repository<Ventas> {
    findByNombre(id: number): Promise<Ventas>;
}
