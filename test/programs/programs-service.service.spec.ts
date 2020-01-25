import { Test, TestingModule } from '@nestjs/testing';
import { ProgramsService } from '../../src/programs/programs.service';
import {MongooseModule} from '@nestjs/mongoose';
import config from '../../src/config/keys';
import {Logger} from '../../src/logger-service/logger-service';
import {ProgramsSchema} from '../../src/models/programs.model';
import {ProgramsController} from '../../src/programs/programs.controller';

describe('ProgramsServiceService', () => {
  let service: ProgramsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProgramsController],
      imports: [MongooseModule.forRoot(config.localURI), MongooseModule.forFeature([{ name: 'Programs', schema: ProgramsSchema }])],
      providers: [ProgramsService, {
        provide: 'logger',
        useClass: Logger,
      }],
    }).compile();

    service = module.get<ProgramsService>(ProgramsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
