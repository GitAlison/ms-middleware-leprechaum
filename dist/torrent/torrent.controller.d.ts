import { TorrentService } from './torrent.service';
export declare class TorrentController {
    private readonly appService;
    TorrentService: any;
    constructor(appService: TorrentService);
    getHello(): string;
}
