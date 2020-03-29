import { CreateTorrentDto } from './dto/create-torrent.dto';
import { TorrentsService } from './torrent.service';
import { UpdateTorrentDto } from './dto/update-torrent.dto';
export declare class TorrentsController {
    private readonly torrentService;
    constructor(torrentService: TorrentsService);
    create(createTorrentDto: CreateTorrentDto): Promise<CreateTorrentDto>;
    findAll(): Promise<any>;
    findAllUsername(username: string): Promise<any>;
    findName(name: string, username: string): Promise<any>;
    update(updateTorrentDto: UpdateTorrentDto): Promise<any>;
    delete(username: string): Promise<void>;
}
