"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PasswordInvalidoException = void 0;
const common_1 = require("@nestjs/common");
class PasswordInvalidoException extends common_1.HttpException {
    constructor() {
        super('La contraseña no puede ser nula o estar vacía, además debe tener más de 5 dígitos', common_1.HttpStatus.BAD_REQUEST);
    }
}
exports.PasswordInvalidoException = PasswordInvalidoException;
//# sourceMappingURL=PasswordInvalidoException.js.map