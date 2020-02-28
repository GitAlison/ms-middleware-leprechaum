import { Torrent } from './interfaces/torrent.interface';
export declare class TorrentService {
    private readonly torrents;
    postNewTorrent(torrent: Torrent): void;
    findAll(): Torrent[];
    getHello(): string;
}
