import { JwtPayload } from 'jsonwebtoken';
import { UserService } from '../services/UserService';
declare const JwtStrategy_base: new (...args: any[]) => any;
export declare class JwtStrategy extends JwtStrategy_base {
    private userService;
    constructor(userService: UserService);
    validate(payload: JwtPayload): Promise<any>;
}
export {};
