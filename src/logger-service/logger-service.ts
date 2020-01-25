import {Injectable, LoggerService} from '@nestjs/common';

@Injectable()
export class Logger implements LoggerService {

    debug(message: any, context?: string): any {
        return undefined;
    }

    error(message: any, trace?: string, context?: string): any {
        return undefined;
    }

    log(message: any, context?: string): any {
        return undefined;
    }

    verbose(message: any, context?: string): any {
        return undefined;
    }

    warn(message: any, context?: string): any {
        return undefined;
    }
}
