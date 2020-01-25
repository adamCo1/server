import { Document } from 'mongoose';
import {ModelDataDto} from '../../dto/model-data.dto';
import {ExerciseModelDto} from '../../exercises/dto/exercise-model.dto';

export interface IMongoRepository {
    insert(onCollection: string, modelDto: ExerciseModelDto): Promise<any>;
    delete(modelDto: ModelDataDto<any>): Promise<any>;
    get(): Promise<Document>;
    getAll(collectionName: string): Promise<Document[]>;
}
