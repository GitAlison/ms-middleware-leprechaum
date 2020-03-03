"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const mongoose_1 = require("@nestjs/mongoose");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const auth_module_1 = require("./auth/auth.module");
const cats_module_1 = require("./cats/cats.module");
const configuration_1 = require("./config/configuration");
const core_module_1 = require("./core/core.module");
const torrent_module_1 = require("./torrents/torrent.module");
const users_module_1 = require("./users/users.module");
let AppModule = class AppModule {
    constructor(configService) {
        this.configService = configService;
    }
};
AppModule = __decorate([
    common_1.Module({
        imports: [
            config_1.ConfigModule.forRoot({
                load: [configuration_1.default],
                isGlobal: true,
            }),
            config_1.ConfigModule,
            mongoose_1.MongooseModule.forRootAsync({
                imports: [config_1.ConfigModule],
                useFactory: async (configService) => ({
                    uri: configService.get('mongodbUrl'),
                    useNewUrlParser: true
                }),
                inject: [config_1.ConfigService],
            }),
            core_module_1.CoreModule,
            cats_module_1.CatsModule,
            torrent_module_1.TorrentsModule,
            auth_module_1.AuthModule,
            users_module_1.UsersModule
        ],
        controllers: [
            app_controller_1.AppController
        ],
        providers: [app_service_1.AppService],
    }),
    __metadata("design:paramtypes", [config_1.ConfigService])
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map