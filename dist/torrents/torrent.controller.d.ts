import { CreateTorrentDto } from './dto/create-torrent.dto';
import { Torrent } from './interfaces/torrent.interface';
import { TorrentsService } from './torrent.service';
export declare class TorrentsController {
    private readonly torrentService;
    constructor(torrentService: TorrentsService);
    create(createTorrentDto: CreateTorrentDto): Promise<CreateTorrentDto>;
    findAll(): Promise<any>;
    findAllUsername(username: string): Promise<any>;
    findName(name: string, username: string): Promise<any>;
    update(name: string, createTorrentDto: CreateTorrentDto): Promise<Torrent[]>;
    delete(username: string): Promise<void>;
}
