"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApellidoInvalidoException = void 0;
const common_1 = require("@nestjs/common");
class ApellidoInvalidoException extends common_1.HttpException {
    constructor() {
        super('El apellido no puede ser nulo o estar vacío', common_1.HttpStatus.BAD_REQUEST);
    }
}
exports.ApellidoInvalidoException = ApellidoInvalidoException;
//# sourceMappingURL=ApellidoInvalidoException.js.map