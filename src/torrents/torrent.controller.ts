import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { ParseIntPipe } from '../common/pipes/parse-int.pipe';
import { TorrentsService } from './torrent.service';
import { CreateTorrentDto } from './dto/create-torrent.dto';
import { Torrent } from './interfaces/torrent.interface';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('torrents')
@UseGuards(JwtAuthGuard)
export class TorrentsController {
  constructor(private readonly torrentsService: TorrentsService) {}

  @Post()
  async create(@Body() createTorrentDto: CreateTorrentDto) {
    this.torrentsService.create(createTorrentDto);
  }

  @Get()
  async findAll(): Promise<Torrent[]> {
    return this.torrentsService.findAll();
  }

  @Get(':id')
  findOne(
    @Param('id', new ParseIntPipe())
    id: number,
  ) {
    console.log(id);
  }
}
