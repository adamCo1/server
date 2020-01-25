import {Global, Module} from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './users/user.module';
import { ExercisesModule } from './exercises/exercises.module';
import { ProgramsModule } from './programs/programs.module';
import { BigJsonModule } from './big-json/big-json.module';
import {Logger} from './logger-service/logger-service';
import {MongooseModule} from '@nestjs/mongoose';
import config from './config/keys';

@Global()
@Module({
  imports: [MongooseModule.forRoot(config.mongoURI),
    UserModule, ExercisesModule, ProgramsModule, BigJsonModule],
  controllers: [AppController],
  providers: [AppService,
    {
      provide: 'logger',
      useClass: Logger,
    }],
  exports: ['logger'],
})
export class AppModule {}
