"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const torrent_controller_1 = require("./torrent.controller");
const torrent_service_1 = require("./torrent.service");
let TorrentModule = class TorrentModule {
};
TorrentModule = __decorate([
    common_1.Module({
        imports: [],
        providers: [torrent_service_1.TorrentService],
        exports: [],
        controllers: [torrent_controller_1.TorrentController],
    })
], TorrentModule);
exports.TorrentModule = TorrentModule;
//# sourceMappingURL=torrent.module.js.map