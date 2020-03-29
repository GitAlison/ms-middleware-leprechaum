import { ReturnModelType } from '@typegoose/typegoose';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './schemas/users.schema';
export declare class UsersService {
    private readonly userModel;
    constructor(userModel: ReturnModelType<typeof User>);
    create(createUserDto: CreateUserDto): Promise<User>;
    findAll(): Promise<any>;
    findOne(username: any): Promise<any>;
    update(username: string, dto: CreateUserDto): Promise<any>;
    delete(username: string): Promise<void>;
}
