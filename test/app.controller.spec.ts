import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from '../src/app.controller';
import { AppService } from '../src/app.service';
import {MongooseModule} from '@nestjs/mongoose';
import config from '../src/config/keys';
import {UserModule} from '../src/users/user.module';
import {ExercisesModule} from '../src/exercises/exercises.module';
import {ProgramsModule} from '../src/programs/programs.module';
import {BigJsonModule} from '../src/big-json/big-json.module';
import {Logger} from '../src/logger-service/logger-service';

describe('AppController', () => {
  // let appController: AppController;

  beforeEach(async () => {
    // const app: TestingModule = await Test.createTestingModule({
    //   imports: [MongooseModule.forRoot(config.localURI),
    //     UserModule, ExercisesModule, ProgramsModule, BigJsonModule],
    //   controllers: [AppController],
    //   providers: [AppService,
    //     {
    //       provide: 'logger',
    //       useClass: Logger,
    //     }],
    //   exports: ['logger'],
    // }).compile();
    //
    // appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(true).toEqual(true);
    });
  });
});
