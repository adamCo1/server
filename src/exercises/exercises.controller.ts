import {Body, Controller, Delete, Get, HttpStatus, Inject, Post, Query, Req, Res} from '@nestjs/common';
import {Exercise} from '../models/exercises.model';
import {ExerciseModelDto} from './dto/exercise-model.dto';
import {ExercisesService} from './exercises.service';

@Controller('exercises')
export class ExercisesController {
    constructor( private readonly exerciseService: ExercisesService) {
    }

    @Get('/')
    async getAllExercises(@Res() response): Promise<Exercise[] | void> {
        let allExercises: Promise<Exercise[] | void>;
        try {
            allExercises = this.exerciseService.getAllExercises();
        } catch (error) {
            response.status(HttpStatus.INTERNAL_SERVER_ERROR);
        }
        response.status(HttpStatus.OK);
        return allExercises;
    }

    @Get('/exercises')
    async getExercise(@Query() criterionQuery: object, @Res() response): Promise<Exercise | void> {
        let exercisePromise: Promise<Exercise | void> ;
        try {
            exercisePromise = this.exerciseService.getExercise(criterionQuery);
        } catch (error) {
            response.status(HttpStatus.INTERNAL_SERVER_ERROR);
        }
        response.status(HttpStatus.OK);
        return exercisePromise;
    }

    @Post('/')
    async postExercise(@Req() request, @Body() exerciseDto: ExerciseModelDto, @Res() response): Promise<void> {
        try {
            await this.exerciseService.insert(exerciseDto);
        } catch (error) {
            response.status(HttpStatus.INTERNAL_SERVER_ERROR);
        }
        response.status(HttpStatus.OK).send('done');
    }

    @Delete('/exercises')
    async deleteExercises(@Query() criterionQuery: object, @Res() response): Promise<Exercise | void> {
        try {
            await this.exerciseService.delete(criterionQuery);
        } catch (error) {
            response.status(HttpStatus.INTERNAL_SERVER_ERROR);
        }
        response.status(HttpStatus.OK).send('done');
    }
}
