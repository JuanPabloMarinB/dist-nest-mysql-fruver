"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userModule = void 0;
const common_1 = require("@nestjs/common");
const userController_1 = require("../controllers/userController");
const UserService_1 = require("../services/UserService");
const UserRepository_1 = require("../repository/UserRepository");
const Usuario_entity_1 = require("../entities/Usuario.entity");
let userModule = exports.userModule = class userModule {
};
exports.userModule = userModule = __decorate([
    (0, common_1.Module)({
        controllers: [userController_1.userController],
        providers: [UserService_1.UserService, UserRepository_1.UserRepository],
        imports: [Usuario_entity_1.Usuario],
    })
], userModule);
//# sourceMappingURL=userModule.js.map