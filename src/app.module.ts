import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TorrentModule } from './modules/torrent/torrent.module';

@Module({
  imports: [TorrentModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
