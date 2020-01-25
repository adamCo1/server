import {Inject, Injectable} from '@nestjs/common';
import {InjectModel} from '@nestjs/mongoose';
import {Model} from 'mongoose';
import {Programs} from '../models/programs.model';
import {Logger} from '../logger-service/logger-service';

@Injectable()
export class ProgramsService {
    constructor(@InjectModel('Programs') private readonly programsModel: Model<Programs>,
                @Inject('logger') private readonly logger: Logger) {}

}
