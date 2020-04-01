import { Injectable, BadRequestException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './interfaces/users.interface';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel('User') private readonly userModel: Model<User>,
  ) { }

  // Create
  async create(createUserDto: CreateUserDto): Promise<User> {

    createUserDto.password = await bcrypt.hash(createUserDto.password, 10);
    const created = new this.userModel(createUserDto);
    try {
      return created.save();
    } catch (error) {
      throw new BadRequestException(error);
    }

  }

  // Read
  async findAll() {
    return this.userModel.find().exec();
  }
  async findOne(username) {
    return this.userModel.findOne(username).exec();
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