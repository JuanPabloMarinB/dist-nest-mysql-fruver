"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrecioInvalidoException = void 0;
const common_1 = require("@nestjs/common");
class PrecioInvalidoException extends common_1.HttpException {
    constructor() {
        super('El precio no puede ser nulo o estar vacío', common_1.HttpStatus.BAD_REQUEST);
    }
}
exports.PrecioInvalidoException = PrecioInvalidoException;
//# sourceMappingURL=PrecioInvalidoException.js.map