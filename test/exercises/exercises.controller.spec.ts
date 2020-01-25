import { Test, TestingModule } from '@nestjs/testing';
import { ExercisesController } from '../../src/exercises/exercises.controller';
import {ExercisesService} from '../../src/exercises/exercises.service';
import {MongooseModule} from '@nestjs/mongoose';
import {ExercisesSchema} from '../../src/models/exercises.model';
import {Logger} from '../../src/logger-service/logger-service';
import config from '../../src/config/keys';

describe('Exercises Controller', () => {
  let controller: ExercisesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ExercisesController],
      imports: [MongooseModule.forRoot(config.localURI), MongooseModule.forFeature([{ name: 'Exercise', schema: ExercisesSchema }])],
      providers: [ExercisesService, {
        provide: 'logger',
        useClass: Logger,
      }],
    }).compile();

    controller = module.get<ExercisesController>(ExercisesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
