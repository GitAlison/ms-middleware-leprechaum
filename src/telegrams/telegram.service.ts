import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import TelegramBot = require('node-telegram-bot-api');

@Injectable()
export class TelegramService {
    constructor(private readonly configService: ConfigService) {
    }
    private token = this.configService.get<string>('TELEGRAM_TOKEN');
    private bot = new TelegramBot(this.token, {polling: true});

    async sendMessage(chatId, message){
        this.bot.sendMessage(chatId, message);
      }
   
}
