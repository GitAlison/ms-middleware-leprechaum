import { Module } from '@nestjs/common';
import { TorrentsController } from './torrent.controller';
import { TorrentsService } from './torrent.service';

@Module({
  controllers: [TorrentsController],
  providers: [TorrentsService],
})
export class TorrentsModule {}
