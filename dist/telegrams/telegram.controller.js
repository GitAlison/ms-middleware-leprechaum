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
const jwt_auth_guard_1 = require("../auth/jwt-auth.guard");
const telegram_service_1 = require("./telegram.service");
let TelegramController = class TelegramController {
    constructor(telegramService) {
        this.telegramService = telegramService;
    }
    async sendMessage(chatId, message) {
        return this.telegramService.sendMessage(chatId, message);
    }
};
__decorate([
    common_1.Post(`message`),
    __param(0, common_1.Body("chatId")),
    __param(1, common_1.Body("message")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, String]),
    __metadata("design:returntype", Promise)
], TelegramController.prototype, "sendMessage", null);
TelegramController = __decorate([
    common_1.UseGuards(jwt_auth_guard_1.JwtAuthGuard),
    common_1.Controller('telegrams'),
    __metadata("design:paramtypes", [telegram_service_1.TelegramService])
], TelegramController);
exports.TelegramController = TelegramController;
//# sourceMappingURL=telegram.controller.js.map