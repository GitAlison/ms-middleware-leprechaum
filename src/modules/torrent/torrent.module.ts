import { Module } from '@nestjs/common';
import { TorrentController } from './torrent.controller';
import {TorrentService} from './torrent.service'
@Module({
    imports: [],
    providers: [TorrentService],
    exports: [],
    controllers: [TorrentController],
})
export class TorrentModule { }