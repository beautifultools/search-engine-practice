import { Injectable } from '@nestjs/common';
import { SearchLogger } from '../../../global/log/interface/logger';
import { EsLogger } from '../../../global/log/es.logger';
import { ES_INDEXES } from '../../../global/constant/elastic-search';


@Injectable()
export class EsSearchLogger implements SearchLogger {
  readonly logger: EsLogger;

  constructor(logger: EsLogger) {
    this.logger = logger;
  }

  logSearch(data) {
    this.logger.log({
      index: ES_INDEXES.LOG_SEARCH,
      data: {
        ...data,
        updated_at: Date.now(),
      }
    })
  }
}
