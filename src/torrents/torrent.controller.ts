import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { CreateTorrentDto } from './dto/create-torrent.dto';
import { Torrent } from './interfaces/torrent.interface';
import { TorrentsService } from './torrent.service';
import { UpdateTorrentDto } from './dto/update-torrent.dto';

//@UseGuards(JwtAuthGuard)
@Controller('torrents')
export class TorrentsController {
  constructor(private readonly torrentService: TorrentsService) { }

  @Post()
  async create(@Body() createTorrentDto: CreateTorrentDto) {
    return this.torrentService.create(createTorrentDto);
  }

  @Get()
  async findAll() {
    return this.torrentService.findAll();
  }

  @Get(`/:username`)
  async findAllUsername(@Param() username: string) {
    return this.torrentService.findAllUsername(username);
  }

  @Post(`find/:name`)
  async findName(@Param() name: string,
    @Body() username: string
  ) {
    return this.torrentService.findName(name, username);
  }

  @Put('/')
  async update(
     @Body() updateTorrentDto: UpdateTorrentDto
  ){
    return this.torrentService.update(updateTorrentDto);
  }

  @Delete(`/:username`)
  async delete(@Param() username: string) {
    return this.torrentService.delete(username);
  }

}
