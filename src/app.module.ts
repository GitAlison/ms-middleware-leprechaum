import { AppController } from './app.controller';
import { Module } from '@nestjs/common';
import { CatsModule } from './cats/cats.module';
import { CoreModule } from './core/core.module';
import { TorrentsModule } from './torrents/torrent.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { AppService } from './app.service';

@Module({
  imports: [
    CoreModule, 
    CatsModule, 
    TorrentsModule, 
    AuthModule, 
    UsersModule
  ],
  controllers: [
        AppController
      ],
  providers: [AppService],
})
export class AppModule {}
