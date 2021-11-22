import { Module } from '@nestjs/common';
import { EsLogger } from './log/es.logger';
import { ElasticsearchModule } from '@nestjs/elasticsearch';

@Module({
  imports:[ElasticsearchModule.register({
    node: 'http://localhost:9200',
  })],
  exports:[EsLogger],
  providers:[EsLogger]
})
export class GlobalModule {}

