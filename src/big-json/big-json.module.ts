import { Module } from '@nestjs/common';
import {BigJsonService} from './big-json.service';

@Module({
    providers: [BigJsonService],
})
export class BigJsonModule {}
