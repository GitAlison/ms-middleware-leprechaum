import { ConfigService } from '@nestjs/config';
import { UsersService } from '../users/users.service';
import { CreateTorrentDto } from './dto/create-torrent.dto';
import { Torrent } from './schemas/torrent.schema';
import { ReturnModelType } from '@typegoose/typegoose';
export declare class TorrentsService {
    private readonly configService;
    private readonly usersService;
    private readonly TorrentModel;
    constructor(configService: ConfigService, usersService: UsersService, TorrentModel: ReturnModelType<typeof Torrent>);
    create(createTorrentDto: CreateTorrentDto): Promise<CreateTorrentDto>;
    findAll(): Promise<any>;
    findTorrentByName(name: any): Promise<any>;
    findAllUsername(username: any): Promise<any>;
    findName(name: any, username: any): Promise<any>;
    update(username: string, dto: CreateTorrentDto): Promise<any>;
    delete(id: string): Promise<void>;
}
