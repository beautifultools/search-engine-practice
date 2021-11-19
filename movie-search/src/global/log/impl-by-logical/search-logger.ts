import { Injectable } from '@nestjs/common';
import { SearchLogger } from '../interface/logger';
import { EsLogger } from '../impl-by-db/es-logger';


@Injectable()
export class EsSearchLogger implements SearchLogger {
  readonly index:string = "log-search";
  readonly logger: EsLogger;

  constructor(logger: EsLogger) {
    this.logger = logger;
  }

  logSearch(data) {
    this.logger.log({
      index: this.index,
      data: data
    })
  }
}
