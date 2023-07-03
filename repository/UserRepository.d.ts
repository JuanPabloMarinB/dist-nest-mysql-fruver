import { Repository } from 'typeorm';
import { Usuario } from '../entities/Usuario.entity';
export declare class UserRepository extends Repository<Usuario> {
    findByEmail(email: string): Promise<Usuario>;
}
