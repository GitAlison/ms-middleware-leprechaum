import { ConfigService } from '@nestjs/config';
import { Model } from 'mongoose';
import { UsersService } from '../users/users.service';
import { CreateTorrentDto } from './dto/create-torrent.dto';
import { Torrent } from './interfaces/torrent.interface';
export declare class TorrentsService {
    private readonly configService;
    private readonly usersService;
    private readonly torrentModel;
    constructor(configService: ConfigService, usersService: UsersService, torrentModel: Model<Torrent>);
    create(createTorrentDto: CreateTorrentDto): Promise<CreateTorrentDto>;
    findAll(): Promise<any>;
    findTorrentByName(name: any): Promise<any>;
    findAllUsername(username: any): Promise<any>;
    findName(name: any, username: any): Promise<any>;
    update(username: string, dto: CreateTorrentDto): Promise<any>;
    delete(id: string): Promise<void>;
}
