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
const typegoose_1 = require("@typegoose/typegoose");
var type;
(function (type) {
    type["movie"] = "movie";
    type["serie"] = "serie";
})(type || (type = {}));
class Torrent {
}
__decorate([
    typegoose_1.prop({ required: true }),
    __metadata("design:type", String)
], Torrent.prototype, "user", void 0);
__decorate([
    typegoose_1.prop({ required: true }),
    __metadata("design:type", String)
], Torrent.prototype, "name", void 0);
__decorate([
    typegoose_1.prop({ required: false, enum: type }),
    __metadata("design:type", String)
], Torrent.prototype, "type", void 0);
__decorate([
    typegoose_1.arrayProp({ items: Object }),
    __metadata("design:type", Array)
], Torrent.prototype, "links", void 0);
exports.Torrent = Torrent;
class quality {
}
__decorate([
    typegoose_1.prop({ required: true }),
    __metadata("design:type", String)
], quality.prototype, "name", void 0);
__decorate([
    typegoose_1.prop({ required: true }),
    __metadata("design:type", String)
], quality.prototype, "url", void 0);
const TorrentModel = typegoose_1.getModelForClass(Torrent);
const TorrentSchema = typegoose_1.buildSchema(Torrent, { versionKey: false });
exports.TorrentFeatureProvider = {
    name: 'Torrent',
    collection: 'Torrent',
    model: TorrentModel,
    schema: TorrentSchema,
};
//# sourceMappingURL=torrent.schema.js.map