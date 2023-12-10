import { Test, TestingModule } from '@nestjs/testing';
import { BbankController } from './bbank.controller';

describe('BbankController', () => {
  let controller: BbankController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BbankController],
    }).compile();

    controller = module.get<BbankController>(BbankController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
