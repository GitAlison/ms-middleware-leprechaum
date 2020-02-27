import { Module } from '@nestjs/common';
import { CatsModule } from './cats/cats.module';
import { CoreModule } from './core/core.module';
import { TorrentsModule } from './torrents/torrent.module';

@Module({
  imports: [CoreModule, CatsModule, TorrentsModule],
})
export class AppModule {}
