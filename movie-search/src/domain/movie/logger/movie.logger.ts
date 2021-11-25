import { Injectable } from '@nestjs/common';
import { MovieLogger } from '../../../global/log/interface/logger';
import { EsLogger } from '../../../global/log/es.logger';
import { ES_INDEXES } from '../../../global/constant/elastic-search';


@Injectable()
export class EsMovieLogger implements MovieLogger {
  readonly logger: EsLogger;

  constructor(logger: EsLogger) {
    this.logger = logger;
  }

  logDetailView(data) {
    this.logger.log({
      index: ES_INDEXES.LOG_MOVIE_DETAIL_VIEW,
      data: {
        ...data,
        updated_at: Date.now(),
      }
    })
  }
}
