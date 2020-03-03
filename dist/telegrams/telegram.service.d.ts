import { ConfigService } from '@nestjs/config';
export declare class TelegramService {
    private readonly configService;
    constructor(configService: ConfigService);
    private token;
    private bot;
    sendMessage(chatId: any, message: any): Promise<void>;
}
