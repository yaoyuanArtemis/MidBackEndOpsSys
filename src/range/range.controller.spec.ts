import { Test, TestingModule } from '@nestjs/testing';
import { RangeController } from './range.controller';

describe('RangeController', () => {
  let controller: RangeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RangeController],
    }).compile();

    controller = module.get<RangeController>(RangeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
