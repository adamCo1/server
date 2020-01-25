import { Test, TestingModule } from '@nestjs/testing';
import { UserService } from '../../src/users/user.service';
import {MongooseModule} from '@nestjs/mongoose';
import config from '../../src/config/keys';
import {Logger} from '../../src/logger-service/logger-service';
import {UsersSchema} from '../../src/models/user.model';
import {UsersController} from '../../src/users/users.controller';

describe('ProfileServiceService', () => {
  let service: UserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsersController],
      imports: [MongooseModule.forRoot(config.localURI), MongooseModule.forFeature([{ name: 'Users', schema: UsersSchema }])],
      providers: [UserService, {
        provide: 'logger',
        useClass: Logger,
      }],
    }).compile();

    service = module.get<UserService>(UserService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
