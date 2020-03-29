import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './interfaces/users.interface';
import { UsersService } from './users.service';
import { JwtAuthGuard } from './../auth/jwt-auth.guard';

@UseGuards(JwtAuthGuard)
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Get()
  async findAll() {
    return this.usersService.findAll();
  }

  @Get(`:username`)
  async findOnebyUsername(@Param('username') username: string){
    return this.usersService.findOnebyUsername(username);
  }

  @Put(`:username`)
  async update(
    @Param() username: string,
    @Body() createUserDto: CreateUserDto
    ): Promise<User[]> {
    return this.usersService.update(username, createUserDto);
  }

  @Delete(`:username`)
  async delete(@Param() username: string){
    return this.usersService.delete(username);
  }

}
