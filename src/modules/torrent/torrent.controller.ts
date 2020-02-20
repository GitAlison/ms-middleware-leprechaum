import { Controller, Get, Post, Param, Body, UseFilters } from '@nestjs/common';
import { TorrentService } from './torrent.service';
import { NewTorrentDTO } from './dto/new-torret.dto';
import { Torrent } from './interfaces/torrent.interface';
@UseFilters()
@Controller('')
export class TorrentController {
    constructor(private readonly TorrentService: TorrentService) { }
    @Get()
    async findAll(): Promise<Torrent[]> {
      return this.TorrentService.findAll();
    }
  
    @Post(`new`)
    public postNewTorrent(@Body() NewTorrent: NewTorrentDTO) {
        console.log(123);
         return this.TorrentService.postNewTorrent(NewTorrent);
    }
}