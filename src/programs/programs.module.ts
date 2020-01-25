import { Module } from '@nestjs/common';
import { ProgramsController } from './programs.controller';
import {ProgramsService} from './programs.service';
import {MongooseModule} from '@nestjs/mongoose';
import {ProgramsSchema} from '../models/programs.model';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Programs', schema: ProgramsSchema }])],
  controllers: [ProgramsController],
  providers: [ProgramsService],
})
export class ProgramsModule {}
