import { Test, TestingModule } from '@nestjs/testing';
import { ExercisesService } from '../../src/exercises/exercises.service';
import {ExercisesController} from '../../src/exercises/exercises.controller';
import {MongooseModule} from '@nestjs/mongoose';
import {ExercisesSchema} from '../../src/models/exercises.model';
import {Logger} from '../../src/logger-service/logger-service';
import config from '../../src/config/keys';
import {ExerciseExamples} from './exeriseExamples/exercise-example-class';
import {ExerciseModelDto} from '../../src/exercises/dto/exercise-model.dto';

describe('ExercisesServiceService', () => {
  let exerciseService: ExercisesService;
  const exercisesExamples: ExerciseExamples = new ExerciseExamples();

  beforeEach( async () => {

    const module: TestingModule = await Test.createTestingModule({
      controllers: [ExercisesController],
      imports: [MongooseModule.forRoot(config.localURI), MongooseModule.forFeature([{ name: 'Exercise', schema: ExercisesSchema }])],
      providers: [ExercisesService, {
        provide: 'logger',
        useClass: Logger,
      }],
    }).compile();
    exerciseService = module.get<ExercisesService>(ExercisesService);
  });

  afterEach( async () => {
    // const sleep = (ms) => {
     // return new Promise(resolve => setTimeout(resolve, ms));
    // };
    await exerciseService.deleteExercise({});
    // sleep(100);
  });

  it('should be defined', () => {
    expect(exerciseService).toBeDefined();
  });

  it('should insert exercise', () => {
    const mockedExercise: ExerciseModelDto = exercisesExamples.simpleExerciseExample;
    expect(exerciseService.insert(mockedExercise).then( () => expect(true).toBeTruthy()));
  });

  it('should delete exercise',  () => {
    const exercise: ExerciseModelDto = exercisesExamples.simpleExerciseExample;
    const deleteQuery: object = { name: exercise.name };
    exerciseService.insert(exercise).then( () => {
      exerciseService.delete(deleteQuery).then( () => {
       exerciseService.getExercise({name: exercise.name}).then( (deletedObject) => {
         expect(deletedObject).toBeNull();
        });
      });
    });

  });

  it('should get all exercises', () => {
    const exercises: ExerciseModelDto[] = exercisesExamples.ThreeExercisesBathExample;
    Promise.all([exerciseService.insert(exercises[0]), exerciseService.insert(exercises[1]), exerciseService.insert(exercises[2])])
        .then( () => {
      exerciseService.getAllExercises().then( (result) => {
        expect(result).toEqual(exercises);
      });
    });
  });

  it('should update exercise', () => {
    const exercise: ExerciseModelDto = exercisesExamples.simpleExerciseExample;
    const findCriterionQuery: object = { name: exercise.name };
    const updatedExercise: ExerciseModelDto = exercisesExamples.updateSimpleExerciseExample;
    exerciseService.insert(exercise).then(() => {
      exerciseService.update(findCriterionQuery, updatedExercise).then( () => {
        exerciseService.getExercise(findCriterionQuery).then( (updatedResult) => {
          expect(updatedExercise).toEqual(updatedResult);
        });
      });
    });
  });

});
