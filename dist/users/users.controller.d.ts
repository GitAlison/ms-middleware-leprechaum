import { CreateUserDto } from './dto/create-user.dto';
import { User } from './interfaces/users.interface';
import { UsersService } from './users.service';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    create(createUserDto: CreateUserDto): Promise<void>;
    findAll(): Promise<any>;
    findOne(username: string): Promise<any>;
    update(username: string, createUserDto: CreateUserDto): Promise<User[]>;
    delete(username: string): Promise<void>;
}
