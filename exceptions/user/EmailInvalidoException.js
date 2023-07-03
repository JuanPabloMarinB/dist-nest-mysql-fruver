"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmailInvalidoException = void 0;
const common_1 = require("@nestjs/common");
class EmailInvalidoException extends common_1.HttpException {
    constructor() {
        super('El email no puede ser nulo o estar vacío', common_1.HttpStatus.BAD_REQUEST);
    }
}
exports.EmailInvalidoException = EmailInvalidoException;
//# sourceMappingURL=EmailInvalidoException.js.map