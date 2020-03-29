"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const mongoose_1 = require("@nestjs/mongoose");
const users_schema_1 = require("../users/schemas/users.schema");
const users_service_1 = require("../users/users.service");
const torrent_schema_1 = require("./schemas/torrent.schema");
const torrent_controller_1 = require("./torrent.controller");
const torrent_service_1 = require("./torrent.service");
let TorrentsModule = class TorrentsModule {
};
TorrentsModule = __decorate([
    common_1.Module({
        imports: [
            config_1.ConfigModule,
            mongoose_1.MongooseModule.forFeature([
                torrent_schema_1.TorrentFeatureProvider,
                users_schema_1.UserFeatureProvider
            ]),
        ],
        controllers: [torrent_controller_1.TorrentsController],
        providers: [
            torrent_service_1.TorrentsService,
            users_service_1.UsersService,
        ]
    })
], TorrentsModule);
exports.TorrentsModule = TorrentsModule;
//# sourceMappingURL=torrent.module.js.map