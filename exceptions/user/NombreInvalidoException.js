"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NombreInvalidoException = void 0;
const common_1 = require("@nestjs/common");
class NombreInvalidoException extends common_1.HttpException {
    constructor() {
        super('El nombre no puede ser nulo o estar vacío', common_1.HttpStatus.BAD_REQUEST);
    }
}
exports.NombreInvalidoException = NombreInvalidoException;
//# sourceMappingURL=NombreInvalidoException.js.map