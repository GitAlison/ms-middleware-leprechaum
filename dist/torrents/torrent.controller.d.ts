import { TorrentsService } from './torrent.service';
import { CreateTorrentDto } from './dto/create-torrent.dto';
import { Torrent } from './interfaces/torrent.interface';
export declare class TorrentsController {
    private readonly torrentsService;
    constructor(torrentsService: TorrentsService);
    create(createTorrentDto: CreateTorrentDto): Promise<void>;
    findAll(): Promise<Torrent[]>;
    findOne(id: number): void;
}
