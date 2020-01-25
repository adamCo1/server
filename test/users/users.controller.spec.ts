import { Test, TestingModule } from '@nestjs/testing';
import { UsersController } from '../../src/users/users.controller';
import {MongooseModule} from '@nestjs/mongoose';
import config from '../../src/config/keys';
import {UsersSchema} from '../../src/models/user.model';
import {UserService} from '../../src/users/user.service';
import {Logger} from '../../src/logger-service/logger-service';

describe('Users Controller', () => {
  let controller: UsersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsersController],
      imports: [MongooseModule.forRoot(config.localURI), MongooseModule.forFeature([{ name: 'Users', schema: UsersSchema }])],
      providers: [UserService, {
        provide: 'logger',
        useClass: Logger,
      }],
    }).compile();

    controller = module.get<UsersController>(UsersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
