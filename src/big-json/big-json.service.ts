import {Inject, Injectable} from '@nestjs/common';
import {Logger} from '../logger-service/logger-service';
import {JsonError} from '../errors/json-error';

@Injectable()
export class BigJsonService {
    constructor(@Inject('logger') private logger: Logger) {
    }

    async parse(stream: string): Promise<object> {
        try {
            this.logger.debug(`parsing object : ${stream}`);
            return JSON.parse(stream);
        } catch (error) {
            this.logger.error(`could not parse object`);
            throw new JsonError(error);
        }
    }

    async stringify(data: object): Promise<string> {
        try {
            this.logger.debug(`trying to stringify data : ${data}`);
            return JSON.stringify(data);
        } catch (error) {
            this.logger.error(`could not stringify object : ${data}`);
            throw new JsonError(error);
        }
    }
}
