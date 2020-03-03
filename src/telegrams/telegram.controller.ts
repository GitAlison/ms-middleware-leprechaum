import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { TelegramService } from './telegram.service';

@UseGuards(JwtAuthGuard)
@Controller('telegrams')
export class TelegramController {
    constructor(private readonly telegramService: TelegramService) { }
    @Post(`message`)
    async sendMessage(@Body("chatId") chatId: number,
        @Body("message") message: string,

    ) {
        return this.telegramService.sendMessage(chatId, message);
    }
}
