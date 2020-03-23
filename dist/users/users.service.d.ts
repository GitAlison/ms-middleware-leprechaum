import { Model } from 'mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './interfaces/users.interface';
export declare class UsersService {
    private readonly userModel;
    constructor(userModel: Model<User>);
    create(createUserDto: CreateUserDto): Promise<User>;
    findAll(): Promise<any>;
    findOne(username: any): Promise<any>;
    update(username: string, dto: CreateUserDto): Promise<any>;
    delete(username: string): Promise<void>;
}
