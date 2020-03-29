import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { ReturnModelType } from '@typegoose/typegoose';
import { CreateUserDto } from './dto/create-user.dto';
import { User, UserFeatureProvider } from './schemas/users.schema';


@Injectable()
export class UsersService {
  constructor(
    @InjectModel(UserFeatureProvider.name) private readonly userModel: ReturnModelType<typeof User>,
  ) { }

  // Create
  async create(createUserDto: CreateUserDto): Promise<User> {
    const created = new this.userModel(createUserDto);
    return created.save();
  }

  // Read
  async findAll() {
    return this.userModel.find().exec();
  }
  async findOne(username) {
    return this.userModel.findOne({ name: username }).exec();
  }

  // Update
  public async update(username: string, dto: CreateUserDto) {
    const doc = await this.userModel.update(username);
    if (!doc) {
      return `Not Updated`
    }
    doc.set(dto);
    return doc.save();
  }

  // Delete
  public async delete(username: string) {
    await this.userModel.findByIdAndDelete(username);
  }

}