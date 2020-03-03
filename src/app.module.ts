import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { CatsModule } from './cats/cats.module';
import configuration from './config/configuration';
import { CoreModule } from './core/core.module';
import { TelegramModule } from './telegrams/telegram.module';
import { TorrentsModule } from './torrents/torrent.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    TelegramModule,
    ConfigModule.forRoot({
      load: [configuration],
      isGlobal: true,
    }),
    ConfigModule,
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        uri: configService.get('mongodbUrl'),
        useNewUrlParser: true
      }),
      inject: [ConfigService],
    }),
    //MongooseModule.forRoot(`mongodb+srv://leprechaum:4JIhM5mnLcABnfC9@lp0-fqnap.mongodb.net/leprechaum?retryWrites=true&w=majority`),
    CoreModule,
    CatsModule,
    TorrentsModule,
    AuthModule,
    UsersModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private readonly configService: ConfigService) { }
}