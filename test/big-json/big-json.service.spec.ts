import { Test, TestingModule } from '@nestjs/testing';
import { BigJsonService } from '../../src/big-json/big-json.service';
import {Logger} from '../../src/logger-service/logger-service';

describe('BigJsonService', () => {
  let service: BigJsonService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BigJsonService, {
        useClass: Logger,
        provide: 'logger',
      }],
    }).compile();

    service = module.get<BigJsonService>(BigJsonService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
