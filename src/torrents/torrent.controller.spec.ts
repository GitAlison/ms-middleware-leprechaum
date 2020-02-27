import { Test } from '@nestjs/testing';
import { TorrentsController } from './torrent.controller';
import { TorrentsService } from './torrent.service';
import { Torrent } from './interfaces/torrent.interface';

describe('CatsController', () => {
  let torrentsController: TorrentsController;
  let torrentsService: TorrentsService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      controllers: [TorrentsController],
      providers: [TorrentsService],
    }).compile();

    torrentsService = module.get<TorrentsService>(TorrentsService);
    torrentsController = module.get<TorrentsController>(TorrentsController);
  });

  describe('findAll', () => {
    it('should return an array of Torrents', async () => {
      const result: Torrent[] = [
        {
          user: "UncleBob",
          type: "movie",
          link: 'magnet://12321312',
          name: 'Star Wars 01',
        },
      ];
      jest.spyOn(torrentsService, 'findAll').mockImplementation(() => result);

      expect(await torrentsController.findAll()).toBe(result);
    });
  });
});
