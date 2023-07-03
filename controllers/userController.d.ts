import { Request, Response } from 'express';
import { UserService } from '../services/UserService';
export declare class userController {
    private readonly usuarioServicio;
    constructor(usuarioServicio: UserService);
    index(): void;
    register(): void;
    registrarUsuario(req: Request, res: Response): Promise<{
        errorNombre: string;
        errorApellido: string;
        errorEmail: string;
        errorPassword: string;
        errorPassword2: string;
        error: string;
    }>;
    login(req: Request): {
        error: string;
    };
    inicio(session: Record<string, any>, res: Response): void;
}
