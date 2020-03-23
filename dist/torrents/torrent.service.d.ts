import { Model } from 'mongoose';
import { CreateTorrentDto } from './dto/create-torrent.dto';
import { Torrent } from './interfaces/torrent.interface';
import { ConfigService } from '@nestjs/config';
export declare class TorrentsService {
    private readonly configService;
    private readonly torrentModel;
    constructor(configService: ConfigService, torrentModel: Model<Torrent>);
    create(createTorrentDto: CreateTorrentDto): Promise<Torrent>;
    findAll(): Promise<any>;
    findAllUsername(username: any): Promise<any>;
    findName(name: any, username: any): Promise<any>;
    update(username: string, dto: CreateTorrentDto): Promise<any>;
    delete(id: string): Promise<void>;
}
