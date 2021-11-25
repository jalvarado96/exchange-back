"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatabaseModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const exchange_entity_1 = require("./entities/exchange.entity");
const role_entity_1 = require("./entities/role.entity");
const users_entity_1 = require("./entities/users.entity");
const usersInfo_entity_1 = require("./entities/usersInfo.entity");
const transaction_entity_1 = require("./entities/transaction.entity");
let DatabaseModule = class DatabaseModule {
};
DatabaseModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forRoot({
                type: 'postgres',
                host: 'localhost',
                port: 5433,
                username: 'postgres',
                password: 'PW',
                database: 'test',
                synchronize: true,
                entities: [__dirname + '/**/*.entity{.ts,.js}',
                    users_entity_1.default,
                    role_entity_1.default,
                    usersInfo_entity_1.default,
                    transaction_entity_1.default,
                    exchange_entity_1.default],
            })]
    })
], DatabaseModule);
exports.DatabaseModule = DatabaseModule;
//# sourceMappingURL=database.module.js.map