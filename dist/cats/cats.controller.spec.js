"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@nestjs/testing");
const cats_controller_1 = require("./cats.controller");
const cats_service_1 = require("./cats.service");
describe('CatsController', () => {
    let catsController;
    let catsService;
    beforeEach(async () => {
        const module = await testing_1.Test.createTestingModule({
            controllers: [cats_controller_1.CatsController],
            providers: [cats_service_1.CatsService],
        }).compile();
        catsService = module.get(cats_service_1.CatsService);
        catsController = module.get(cats_controller_1.CatsController);
    });
    describe('findAll', () => {
        it('should return an array of cats', async () => {
            const result = [
                {
                    age: 2,
                    breed: 'Bombay',
                    name: 'Pixel',
                },
            ];
            jest.spyOn(catsService, 'findAll').mockImplementation(() => result);
            expect(await catsController.findAll()).toBe(result);
        });
    });
});
//# sourceMappingURL=cats.controller.spec.js.map