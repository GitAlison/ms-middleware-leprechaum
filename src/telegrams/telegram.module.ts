import { TelegramService } from './telegram.service';
import { TelegramController } from './telegram.controller';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

@Module({
    imports: [
        ConfigModule,
    ],
    controllers: [
        TelegramController,
     ],
    providers: [
        TelegramService, 
    ],
})
export class TelegramModule {}
