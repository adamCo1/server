import {Exercise} from '../models/exercises.model';
import {ExerciseModelDto} from '../exercises/dto/exercise-model.dto';

export interface IExerciseService {
    insertExercise(exerciseDto: ExerciseModelDto): Promise<any>;
    getAllExercises(): Promise<Exercise[]>;
}
