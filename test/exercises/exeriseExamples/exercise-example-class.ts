import {IExercise} from '../../../src/exercises/exercise.interface';
import {ExerciseModelDto} from '../../../src/exercises/dto/exercise-model.dto';

export class ExerciseExamples {
    public simpleExerciseExample = {
        name: 'test::yad kidmit',
        repetitions: 10,
        sets: 4,
    } as ExerciseModelDto ;

    public ThreeExercisesBathExample = [
        {
            name: 'test::back',
            repetitions: 10,
            sets: 2,
        }, {
            name: 'test::breast',
            repetitions: 16,
            sets: 5,
        },
        {
            name: 'test::legs',
            repetitions: 10,
            sets: 3,
        },
    ] as ExerciseModelDto[] ;

    public updateSimpleExerciseExample = {
        name: 'test::yad',
        repetitions: 10,
        sets: 1,
    } as ExerciseModelDto ;

}
