import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import {UserService} from './user.service';

@Module({
  controllers: [UsersController],
  providers: [UserService],
})
export class UserModule {}
