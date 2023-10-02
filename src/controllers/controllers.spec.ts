import { Test, TestingModule } from '@nestjs/testing';
import { MyController } from './my.controller';
import { MyService } from './my.service';

describe('MyController', () => {
  let myController: MyController;
  let myService: MyService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MyController],
      providers: [MyService],
    }).compile();

    myController = module.get<MyController>(MyController);
    myService = module.get<MyService>(MyService);
  });

  describe('getItems', () => {
    it('should return an array of items', async () => {
      const result = ['item1', 'item2'];
      jest.spyOn(myService, 'getItems').mockResolvedValue(result);

      expect(await myController.getItems()).toBe(result);
    });
  });

  describe('createItem', () => {
    it('should create a new item', async () => {
      const newItem = { name: 'New Item' };
      const createdItem = { id: '1', name: 'New Item' };
      jest.spyOn(myService, 'createItem').mockResolvedValue(createdItem);

      expect(await myController.createItem(newItem)).toBe(createdItem);
    });
  });

  // Add more test cases for other controller methods

});
