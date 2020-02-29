import { TorrentService } from './torrent.service';
import { NewTorrentDTO } from './dto/new-torret.dto';
import { Torrent } from './interfaces/torrent.interface';
export declare class TorrentController {
    private readonly TorrentService;
    constructor(TorrentService: TorrentService);
    findAll(): Promise<Torrent[]>;
    postNewTorrent(NewTorrent: NewTorrentDTO): void;
}
