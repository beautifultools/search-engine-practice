import { Module } from '@nestjs/common';
import { EsSearchLogger } from './logger/search.logger';
import { GlobalModule } from '../../global/global.module';
import { SearchController } from './api/search.controller';
import { SearchService } from './service/search.service';
import { ElasticsearchModule } from '@nestjs/elasticsearch';
import { UserModule } from '../user/user.module';
import { DtoSearchOptionMapper } from './mapper/dto.search.mapper';

@Module({
  imports: [
    GlobalModule,
    UserModule,
    ElasticsearchModule.register({
    node: 'http://localhost:9200',
  })],
  controllers:[SearchController],
  providers:[SearchService, DtoSearchOptionMapper, {
    provide: 'SearchLogger',
    useClass: EsSearchLogger,
  }],
})
export class SearchModule {}
