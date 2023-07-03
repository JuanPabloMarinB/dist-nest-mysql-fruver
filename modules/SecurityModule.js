"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SecurityModule = void 0;
const common_1 = require("@nestjs/common");
const passport_1 = require("@nestjs/passport");
const jwt_1 = require("@nestjs/jwt");
const Jwt_strategy_1 = require("./Jwt.strategy");
const UserService_1 = require("../services/UserService");
const Jwt_auth_guard_1 = require("./Jwt-auth.guard");
let SecurityModule = exports.SecurityModule = class SecurityModule {
};
exports.SecurityModule = SecurityModule = __decorate([
    (0, common_1.Module)({
        imports: [
            passport_1.PassportModule.register({ defaultStrategy: 'jwt' }),
            jwt_1.JwtModule.register({
                secret: 'yourSecretKey',
                signOptions: { expiresIn: '1d' },
            }),
        ],
        providers: [UserService_1.UserService, Jwt_strategy_1.JwtStrategy, Jwt_auth_guard_1.JwtAuthGuard, jwt_1.JwtService],
        exports: [passport_1.PassportModule],
    })
], SecurityModule);
//# sourceMappingURL=SecurityModule.js.map