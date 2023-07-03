"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Password2InvalidoException = void 0;
const common_1 = require("@nestjs/common");
class Password2InvalidoException extends common_1.HttpException {
    constructor() {
        super('Las contraseñas no coinciden', common_1.HttpStatus.BAD_REQUEST);
    }
}
exports.Password2InvalidoException = Password2InvalidoException;
//# sourceMappingURL=Password2InvalidoException.js.map