"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config = {
    type: 'mysql',
    host: process.env.DB_HOST || 'containers-us-west-192.railway.app',
    port: Number.parseInt(process.env.DB_PORT) || 7362,
    username: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || 'gFFdMTGQfi9q9JG0uinY',
    database: process.env.DB_NAME || 'railway',
    ssl: {
        rejectUnauthorized: false,
    },
    entities: ['dist/**/*.entity{.ts,.js}'],
    synchronize: true,
};
exports.default = config;
//# sourceMappingURL=typeorm.config.js.map