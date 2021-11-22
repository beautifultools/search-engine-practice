import { Injectable } from '@nestjs/common';
import { SearchLogger } from '../../../global/log/interface/logger';
import { EsLogger } from '../../../global/log/es.logger';


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
