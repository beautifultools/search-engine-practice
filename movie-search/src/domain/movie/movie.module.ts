import { Module } from '@nestjs/common';
import { MovieController } from './api/movie.controller';
import { MovieService } from './service/movie.service';
import { EsMovieLogger } from './logger/movie.logger';
import { GlobalModule } from '../../global/global.module';


@Module({
  imports: [GlobalModule],
  controllers: [MovieController],
  providers: [MovieService, {
    provide: 'MovieLogger',
    useClass: EsMovieLogger,
  }]
})
export class MovieModule {}
