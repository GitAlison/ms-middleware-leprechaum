import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './interfaces/users.interface';
import { UsersService } from './users.service';
import { JwtAuthGuard } from './../auth/jwt-auth.guard';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async create(@Body() createUserDto: CreateUserDto) {
    this.usersService.create(createUserDto);
  }
  
  @UseGuards(JwtAuthGuard)
  @Get()
  async findAll() {
    return this.usersService.findAll();
  }

  @UseGuards(JwtAuthGuard)
  @Get(`:username`)
  async findOne(@Param() username: string){
    return this.usersService.findOne(username);
  }

  @UseGuards(JwtAuthGuard)
  @Put(`:username`)
  async update(
    @Param() username: string,
    @Body() createUserDto: CreateUserDto
    ): Promise<User[]> {
    return this.usersService.update(username, createUserDto);
  }


  @UseGuards(JwtAuthGuard)
  @Delete(`:username`)
  async delete(@Param() username: string){
    return this.usersService.delete(username);
  }

}
