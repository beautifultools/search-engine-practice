import { Module } from '@nestjs/common';
import { GlobalModule } from '../../global/global.module';
import { UserService } from './service/user.serivce';
import { UserController } from './api/user.controller';


@Module({
  imports: [GlobalModule],
  controllers: [UserController],
  providers: [UserService],
  exports: [UserService]
})
export class UserModule {}
