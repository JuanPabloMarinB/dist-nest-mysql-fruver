import { Rol } from '../enums/Rol';
export declare class Usuario {
    id: number;
    nombre: string;
    apellido: string;
    email: string;
    password: string;
    rol: Rol;
    fechaAlta: Date;
    activo: boolean;
    getRol(): Rol;
}
