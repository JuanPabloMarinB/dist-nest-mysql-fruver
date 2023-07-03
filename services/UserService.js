"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const Usuario_entity_1 = require("../entities/Usuario.entity");
const bcrypt = require("bcrypt");
const NombreInvalidoException_1 = require("../exceptions/user/NombreInvalidoException");
const ApellidoInvalidoException_1 = require("../exceptions/user/ApellidoInvalidoException");
const EmailInvalidoException_1 = require("../exceptions/user/EmailInvalidoException");
const PasswordInvalidoException_1 = require("../exceptions/user/PasswordInvalidoException");
const Password2InvalidoException_1 = require("../exceptions/user/Password2InvalidoException");
const Rol_1 = require("../enums/Rol");
const common_1 = require("@nestjs/common");
let UserService = exports.UserService = class UserService {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    async findAll() {
        return this.userRepository.find();
    }
    async getById(id) {
        return this.userRepository.findOne({ where: { id } });
    }
    async update(user) {
        await this.userRepository.save(user);
    }
    async delete(id) {
        await this.userRepository.delete(id);
    }
    async save(user) {
        return this.userRepository.save(user);
    }
    async registrar(nombre, apellido, email, password, password2) {
        this.validar(nombre, apellido, email, password, password2);
        const usuario = new Usuario_entity_1.Usuario();
        usuario.nombre = nombre;
        usuario.apellido = apellido;
        usuario.email = email;
        usuario.password = await bcrypt.hash(password, 10);
        usuario.rol = Rol_1.Rol.USER;
        await this.userRepository.save(usuario);
    }
    validar(nombre, apellido, email, password, password2) {
        if (!nombre || nombre.trim() === '') {
            throw new NombreInvalidoException_1.NombreInvalidoException();
        }
        if (!apellido || apellido.trim() === '') {
            throw new ApellidoInvalidoException_1.ApellidoInvalidoException();
        }
        if (!email || email.trim() === '') {
            throw new EmailInvalidoException_1.EmailInvalidoException();
        }
        if (!password || password.length <= 5) {
            throw new PasswordInvalidoException_1.PasswordInvalidoException();
        }
        if (password !== password2) {
            throw new Password2InvalidoException_1.Password2InvalidoException();
        }
    }
    async loadUserByUsername(username) {
        const user = await this.userRepository.findOne({
            where: { email: username },
        });
        if (!user) {
            throw new common_1.NotFoundException('Usuario no encontrado');
        }
        const userDetails = {
            sub: user.id.toString(),
            username: user.nombre,
            roles: user.rol,
        };
        return userDetails;
    }
};
exports.UserService = UserService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(Usuario_entity_1.Usuario)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], UserService);
//# sourceMappingURL=UserService.js.map