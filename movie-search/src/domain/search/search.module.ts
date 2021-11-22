import { Module } from '@nestjs/common';
import { EsSearchLogger } from './logger/search.logger';
import { GlobalModule } from '../../global/global.module';
import { SearchController } from './api/search.controller';
import { SearchService } from './service/search.service';
import { ElasticsearchModule } from '@nestjs/elasticsearch';

@Module({
  imports: [GlobalModule, ElasticsearchModule.register({
    node: 'http://localhost:9200',
  })],
  controllers:[SearchController],
  providers:[SearchService, {
    provide: 'SearchLogger',
    useClass: EsSearchLogger,
  }],
})
export class SearchModule {}
