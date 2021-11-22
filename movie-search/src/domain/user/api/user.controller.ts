import { UserService } from '../service/user.serivce';
import { Controller, Get, Param, Session } from '@nestjs/common';
import { User } from '../entity/user';

@Controller('user')
export class UserController{
  constructor(private userService: UserService){}

  @Get(':name')
  async findByName(@Param("name") name:string): Promise<User> {
    return this.userService.findByName(name);
  }
}
