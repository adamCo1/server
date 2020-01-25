import {Inject, Injectable} from '@nestjs/common';
import {Logger} from '../logger-service/logger-service';
import {InjectModel} from '@nestjs/mongoose';
import { Model } from 'mongoose';
import {Exercise} from '../models/exercises.model';
import {ExerciseModelDto} from './dto/exercise-model.dto';
import {collectionName, getAllCriterionQuery} from './exercise.constants';
import {MongoError} from '../errors/mongo-error';

@Injectable()
export class ExercisesService {
    constructor(@InjectModel('Exercise') private readonly exerciseModel: Model<Exercise>,
                @Inject('logger') private readonly logger: Logger) {}

    async insert(exercise: ExerciseModelDto): Promise<any> {
        this.logger.debug(`inserting exercise: ${exercise}`);
        const response = await this.exerciseModel.db.collection(collectionName).insertOne(exercise).catch( (error) => this.throwMongoError(error));
        return response;
    }

    async getAllExercises(): Promise<Exercise[] | void> {
        this.logger.debug('getting all exercises');
        const exercises = await this.exerciseModel.db.collection(collectionName).find(getAllCriterionQuery).toArray();
        return exercises;
    }

    async deleteExercise(query: object): Promise<any> {
        await this.exerciseModel.db.collection(collectionName).deleteMany(query);
    }

    async getExercise(criterionQuery: object): Promise<Exercise | void> {
        const exercise =  await this.exerciseModel.db.collection(collectionName)
            .findOne(criterionQuery).catch( error => this.throwMongoError(error));
        this.logger.debug(`found exercise :  ${exercise}`);
        return exercise;
    }

    async delete(criterionQuery: object): Promise<void> {
        this.logger.debug(`deleting by criterion : ${criterionQuery}`);
        await this.exerciseModel.db.collection(collectionName).deleteOne(criterionQuery).catch( err => this.throwMongoError(err));
    }

    async update(findExerciseCriterion: object, updatedExercise: ExerciseModelDto): Promise<void> {
        this.logger.debug(`updating ${findExerciseCriterion} to ${updatedExercise}`);
        await this.exerciseModel.db.collection(collectionName).updateOne(
         findExerciseCriterion, updatedExercise).catch( error => this.throwMongoError(error));
    }

    private throwMongoError(error: any): void {
        this.logger.error(error);
        throw new MongoError(error);
    }
}
