import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TorrentSchema } from './schemas/torrent.schema';
import { TorrentsController } from './torrent.controller';
import { TorrentsService } from './torrent.service';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule,
    MongooseModule.forFeature([{ name: 'Torrent', schema: TorrentSchema }])
  ],
  controllers: [TorrentsController],
  providers: [TorrentsService],
})
export class TorrentsModule {}
