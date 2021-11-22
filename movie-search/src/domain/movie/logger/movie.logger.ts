import { Injectable } from '@nestjs/common';
import { MovieLogger } from '../../../global/log/interface/logger';
import { EsLogger } from '../../../global/log/es.logger';


@Injectable()
export class EsMovieLogger implements MovieLogger {
  readonly index:string = "log-movie-detail";
  readonly logger: EsLogger;

  constructor(logger: EsLogger) {
    this.logger = logger;
  }

  logDetailView(data) {
    this.logger.log({
      index: this.index,
      data: data
    })
  }
}
