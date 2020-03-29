import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from '../users/schemas/users.schema';
import { UsersService } from '../users/users.service';
import { TorrentSchema } from './schemas/torrent.schema';
import { TorrentsController } from './torrent.controller';
import { TorrentsService } from './torrent.service';

@Module({
  imports: [
    ConfigModule,
    MongooseModule.forFeature([
      { name: 'Torrent', schema: TorrentSchema },
      { name: 'User', schema: UserSchema },
    ]),

  ],
  controllers: [TorrentsController],
  providers: [
    TorrentsService,
    UsersService,
  ]
})
export class TorrentsModule { }
