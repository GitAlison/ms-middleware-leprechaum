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
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const mqtt = require("mqtt");
const config_1 = require("@nestjs/config");
let TorrentsService = class TorrentsService {
    constructor(configService, torrentModel) {
        this.configService = configService;
        this.torrentModel = torrentModel;
    }
    async create(createTorrentDto) {
        const options = { username: this.configService.get('MQTT_USER'), password: this.configService.get('MQTT_PASSWORD') };
        const client = mqtt.connect(this.configService.get('mqtt.url'), options);
        const user = createTorrentDto.user;
        const system = "TorrentSystem";
        const message = createTorrentDto.link;
        const id = "in";
        client.on('connect', function () {
            const topic = `${user}/${system}/${id}`;
            client.subscribe(topic);
            client.publish(topic, message);
        });
        client.on('message', function (topic, message) {
            client.end();
        });
        const created = new this.torrentModel(createTorrentDto);
        return created.save();
    }
    async findAll() {
        return this.torrentModel.find().exec();
    }
    async findAllUsername(username) {
        return this.torrentModel.find({ user: username }).exec();
    }
    async findName(name, username) {
        return this.torrentModel.find({ name: name, user: username }).exec();
    }
    async update(username, dto) {
        const doc = await this.torrentModel.update(username);
        if (!doc) {
            return `Not Updated`;
        }
        doc.set(dto);
        return doc.save();
    }
    async delete(id) {
        await this.torrentModel.findByIdAndDelete(id);
    }
};
TorrentsService = __decorate([
    common_1.Injectable(),
    __param(1, mongoose_1.InjectModel('Torrent')),
    __metadata("design:paramtypes", [config_1.ConfigService, typeof (_a = typeof mongoose_2.Model !== "undefined" && mongoose_2.Model) === "function" ? _a : Object])
], TorrentsService);
exports.TorrentsService = TorrentsService;
//# sourceMappingURL=torrent.service.js.map