import { Injectable } from '@nestjs/common';
import { ElasticsearchService } from '@nestjs/elasticsearch';
import { AbstractLogger } from './interface/logger';


@Injectable()
export class EsLogger implements AbstractLogger {
  constructor(private readonly elasticsearchService: ElasticsearchService) {}

  log({index, data}: any) {
    this.elasticsearchService.index({
      index: index,
      body: data
    })
  }
}
