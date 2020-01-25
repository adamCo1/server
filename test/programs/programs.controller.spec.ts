import { Test, TestingModule } from '@nestjs/testing';
import { ProgramsController } from '../../src/programs/programs.controller';
import {MongooseModule} from '@nestjs/mongoose';
import config from '../../src/config/keys';
import {ProgramsSchema} from '../../src/models/programs.model';
import {ProgramsService} from '../../src/programs/programs.service';
import {Logger} from '../../src/logger-service/logger-service';

describe('Programs Controller', () => {
  let controller: ProgramsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProgramsController],
      imports: [MongooseModule.forRoot(config.localURI), MongooseModule.forFeature([{ name: 'Programs', schema: ProgramsSchema }])],
      providers: [ProgramsService, {
        provide: 'logger',
        useClass: Logger,
      }],
    }).compile();

    controller = module.get<ProgramsController>(ProgramsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
