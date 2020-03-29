import { ConfigService } from '@nestjs/config';
import { ReturnModelType } from '@typegoose/typegoose';
import { UsersService } from '../users/users.service';
import { CreateTorrentDto } from './dto/create-torrent.dto';
import { UpdateTorrentDto } from './dto/update-torrent.dto';
import { Torrent } from './schemas/torrent.schema';
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
    update(dto: UpdateTorrentDto): Promise<any>;
    delete(id: string): Promise<void>;
}
