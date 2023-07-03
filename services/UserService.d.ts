import { Repository } from 'typeorm';
import { Usuario } from '../entities/Usuario.entity';
import { JwtPayload } from 'jsonwebtoken';
export declare class UserService {
    private userRepository;
    constructor(userRepository: Repository<Usuario>);
    findAll(): Promise<Usuario[]>;
    getById(id: number): Promise<Usuario>;
    update(user: Usuario): Promise<void>;
    delete(id: number): Promise<void>;
    save(user: Usuario): Promise<Usuario>;
    registrar(nombre: string, apellido: string, email: string, password: string, password2: string): Promise<void>;
    private validar;
    loadUserByUsername(username: string): Promise<JwtPayload>;
}
