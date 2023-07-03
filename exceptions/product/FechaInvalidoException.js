"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FechaInvalidoException = void 0;
const common_1 = require("@nestjs/common");
class FechaInvalidoException extends common_1.HttpException {
    constructor() {
        super('La fecha no puede ser nula o estar vací, además, debe tener un fprmato válido', common_1.HttpStatus.BAD_REQUEST);
    }
}
exports.FechaInvalidoException = FechaInvalidoException;
//# sourceMappingURL=FechaInvalidoException.js.map