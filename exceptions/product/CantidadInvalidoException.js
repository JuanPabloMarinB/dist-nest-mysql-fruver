"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CantidadInvalidoException = void 0;
const common_1 = require("@nestjs/common");
class CantidadInvalidoException extends common_1.HttpException {
    constructor() {
        super('La cantidad no puede ser nula o estar vacía', common_1.HttpStatus.BAD_REQUEST);
    }
}
exports.CantidadInvalidoException = CantidadInvalidoException;
//# sourceMappingURL=CantidadInvalidoException.js.map