import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { UserFeatureProvider } from '../users/schemas/users.schema';
import { UsersService } from '../users/users.service';
import { TorrentFeatureProvider } from './schemas/torrent.schema';
import { TorrentsController } from './torrent.controller';
import { TorrentsService } from './torrent.service';

@Module({
  imports: [
    ConfigModule,
    MongooseModule.forFeature([
      TorrentFeatureProvider,
      UserFeatureProvider
    ]),

  ],
  controllers: [TorrentsController],
  providers: [
    TorrentsService,
    UsersService,
  ]
})
export class TorrentsModule { }
