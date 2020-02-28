"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const mqtt = require("mqtt");
let TorrentsService = class TorrentsService {
    constructor() {
        this.torrents = [];
    }
    create(torrent) {
        const options = { username: "thapfjdc", password: "zrck8U2c81Rg" };
        const client = mqtt.connect('mqtt://hairdresser.cloudmqtt.com:18370', options);
        const user = torrent.user;
        const system = "TorrentSystem";
        const message = torrent.link;
        const id = "in";
        client.on('connect', function () {
            const topic = `${user}/${system}/${id}`;
            client.subscribe(topic);
            client.publish(topic, message);
        });
        client.on('message', function (topic, message) {
            client.end();
        });
        this.torrents.push(torrent);
    }
    findAll() {
        return this.torrents;
    }
};
TorrentsService = __decorate([
    common_1.Injectable()
], TorrentsService);
exports.TorrentsService = TorrentsService;
//# sourceMappingURL=torrent.service.js.map