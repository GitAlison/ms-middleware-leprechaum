
import { Injectable } from '@nestjs/common';
import { Torrent } from './interfaces/torrent.interface'
@Injectable()
export class TorrentService {
    private readonly torrents: Torrent[] = [];

    postNewTorrent(torrent: Torrent) {
      this.torrents.push(torrent);
    }
  
    findAll(): Torrent[] {
      return this.torrents;
    }

    getHello() {
        return 'Hello Torrent!';
    }

}