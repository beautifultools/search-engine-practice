import { Injectable } from '@nestjs/common';
import { Connection } from 'typeorm';
import { User } from '../entity/user';
import { UserEntity } from '../persistence/user.orm';
import { OrmUserMapper } from '../mapper/orm.user.mapper';

@Injectable()
export class UserService {
  constructor(private connection:Connection){}

  async findByName(name:string): Promise<User>{
    const userEntity = await this.connection.getRepository(UserEntity).findOne({
      where: {
        name
      }
    });

    return OrmUserMapper.convertToDomain(userEntity);
  }
}
