import { User } from '../entity/user';
import { UserMapper } from './interface/user.mapper';
import { UserEntity } from '../persistence/user.orm';

class OrmUserMapper implements UserMapper<UserEntity>{
  convertFromDomain(domain: User): UserEntity {
    return {
      accountNo:domain.accountNo,
      email:domain.email,
      password:domain.password,
      name:domain.name,
      favDirector:domain.favDirector,
      favActor:domain.favActor,
      favGenre:domain.favGenre,
      regDate:domain.regDate,
      modDate:domain.modDate,
    };
  }

  convertToDomain(target: UserEntity): User {
    return {
      accountNo:target.accountNo,
      email:target.email,
      password:target.password,
      name:target.name,
      favDirector:target.favDirector,
      favActor:target.favActor,
      favGenre:target.favGenre,
      regDate:target.regDate,
      modDate:target.modDate,
    };
  }
}

const ormUserMapper = new OrmUserMapper();

export {ormUserMapper as OrmUserMapper};
