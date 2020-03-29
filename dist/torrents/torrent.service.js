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
const config_1 = require("@nestjs/config");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const users_service_1 = require("../users/users.service");
const mqtt = require("mqtt");
let TorrentsService = class TorrentsService {
    constructor(configService, usersService, torrentModel) {
        this.configService = configService;
        this.usersService = usersService;
        this.torrentModel = torrentModel;
    }
    async create(createTorrentDto) {
        const MQTT_USER = this.configService.get('MQTT_USER');
        const MQTT_PASSWORD = this.configService.get('MQTT_PASSWORD');
        const MQTT_LINK = this.configService.get('mqtt.url');
        const MQTT_OPTIONS = { username: MQTT_USER, password: MQTT_PASSWORD };
        const client = mqtt.connect(MQTT_LINK, MQTT_OPTIONS);
        const user = createTorrentDto.user;
        const system = "TorrentSystem";
        const message = createTorrentDto.link;
        const id = "in";
        const myUser = await this.usersService.findOne(user);
        if (!myUser) {
            throw new common_1.HttpException(`User: ${user} don't exist`, common_1.HttpStatus.FORBIDDEN);
        }
        client.on('connect', function () {
            const topic = `${user}/${system}/${id}`;
            client.subscribe(topic);
            client.publish(topic, message);
        });
        client.on('message', function (topic, message) {
            client.end();
        });
        const name = await this.findTorrentByName(createTorrentDto.name);
        if (name) {
            throw new common_1.HttpException('Media already exists in Database. Starting download', common_1.HttpStatus.ACCEPTED);
        }
        const created = new this.torrentModel(createTorrentDto);
        created.save();
        return createTorrentDto;
    }
    async findAll() {
        return this.torrentModel.find().exec();
    }
    async findTorrentByName(name) {
        return this.torrentModel.findOne({ name: name }).exec();
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
    __param(2, mongoose_1.InjectModel('Torrent')),
    __metadata("design:paramtypes", [config_1.ConfigService,
        users_service_1.UsersService, typeof (_a = typeof mongoose_2.Model !== "undefined" && mongoose_2.Model) === "function" ? _a : Object])
], TorrentsService);
exports.TorrentsService = TorrentsService;
//# sourceMappingURL=torrent.service.js.map