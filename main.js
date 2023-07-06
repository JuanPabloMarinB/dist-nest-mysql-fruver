"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./modules/app.module");
const cors = require('cors');
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule, {
        
        options: {
            cors: true,
            
            host: '172.26.5.108',
        },
    });
    app.use(cors());
    await app.listen(process.env.PORT || 3000, '0.0.0.0'); 
}
bootstrap();
