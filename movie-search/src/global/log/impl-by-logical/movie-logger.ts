import { Injectable } from '@nestjs/common';
import { MovieLogger } from '../interface/logger';
import { EsLogger } from '../impl-by-db/es-logger';


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
