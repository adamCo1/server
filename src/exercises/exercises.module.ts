import { Module } from '@nestjs/common';
import { ExercisesController } from './exercises.controller';
import {ExercisesService} from './exercises.service';
import {MongooseModule} from '@nestjs/mongoose';
import {ExercisesSchema} from '../models/exercises.model';

@Module({
  controllers: [ExercisesController],
  imports: [MongooseModule.forFeature([{ name: 'Exercise', schema: ExercisesSchema }])],
  providers: [ExercisesService],
})
export class ExercisesModule {}
