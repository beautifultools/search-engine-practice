import { SearchOptionAsyncMapper } from './interface/search.mapper';
import { SearchOption } from '../entity/SearchOption';
import { Injectable } from '@nestjs/common';
import { UserService } from '../../user/service/user.serivce';


@Injectable()
export class DtoSearchOptionMapper implements SearchOptionAsyncMapper<SearchDTO>{
  constructor(private userService:UserService){
  }
  async convertFromDomain(domain: SearchOption): Promise<SearchDTO> {
    return {
      keyword:domain.keyword,
      user:domain.user?.name,
    };
  }

  async convertToDomain(target: SearchDTO): Promise<SearchOption> {
    const user = await this.userService.findByName(target.user);
    return {
      keyword:target.keyword,
      user
    };
  }
}
