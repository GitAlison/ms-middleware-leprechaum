"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@nestjs/testing");
const torrent_controller_1 = require("./torrent.controller");
const torrent_service_1 = require("./torrent.service");
describe('CatsController', () => {
    let torrentsController;
    let torrentsService;
    beforeEach(async () => {
        const module = await testing_1.Test.createTestingModule({
            controllers: [torrent_controller_1.TorrentsController],
            providers: [torrent_service_1.TorrentsService],
        }).compile();
        torrentsService = module.get(torrent_service_1.TorrentsService);
        torrentsController = module.get(torrent_controller_1.TorrentsController);
    });
    describe('findAll', () => {
        it('should return an array of Torrents', async () => {
            const result = [
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
//# sourceMappingURL=torrent.controller.spec.js.map