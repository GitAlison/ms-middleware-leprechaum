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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const create_torrent_dto_1 = require("./dto/create-torrent.dto");
const torrent_service_1 = require("./torrent.service");
let TorrentsController = class TorrentsController {
    constructor(torrentService) {
        this.torrentService = torrentService;
    }
    async create(createTorrentDto) {
        return this.torrentService.create(createTorrentDto);
    }
    async findAll() {
        return this.torrentService.findAll();
    }
    async findAllUsername(username) {
        return this.torrentService.findAllUsername(username);
    }
    async findName(name, username) {
        return this.torrentService.findName(name, username);
    }
    async update(name, createTorrentDto) {
        return this.torrentService.update(name, createTorrentDto);
    }
    async delete(username) {
        return this.torrentService.delete(username);
    }
};
__decorate([
    common_1.Post(),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_torrent_dto_1.CreateTorrentDto]),
    __metadata("design:returntype", Promise)
], TorrentsController.prototype, "create", null);
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], TorrentsController.prototype, "findAll", null);
__decorate([
    common_1.Get(`/:username`),
    __param(0, common_1.Param()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], TorrentsController.prototype, "findAllUsername", null);
__decorate([
    common_1.Post(`find/:name`),
    __param(0, common_1.Param()),
    __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], TorrentsController.prototype, "findName", null);
__decorate([
    common_1.Put(`/:name`),
    __param(0, common_1.Param()),
    __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, create_torrent_dto_1.CreateTorrentDto]),
    __metadata("design:returntype", Promise)
], TorrentsController.prototype, "update", null);
__decorate([
    common_1.Delete(`/:username`),
    __param(0, common_1.Param()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], TorrentsController.prototype, "delete", null);
TorrentsController = __decorate([
    common_1.Controller('torrents'),
    __metadata("design:paramtypes", [torrent_service_1.TorrentsService])
], TorrentsController);
exports.TorrentsController = TorrentsController;
//# sourceMappingURL=torrent.controller.js.map