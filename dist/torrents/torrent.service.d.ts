import { Torrent } from './interfaces/torrent.interface';
export declare class TorrentsService {
    private readonly torrents;
    create(torrent: Torrent): void;
    findAll(): Torrent[];
}
