import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ElasticsearchModule } from '@nestjs/elasticsearch';
import { SearchController } from './domain/search/api/search.controller';
import { SearchService } from './domain/search/service/search.service';
import { MovieController } from './domain/movie/api/movie.controller';
import { EsMovieLogger } from './global/log/impl-by-logical/movie-logger';
import { EsSearchLogger } from './global/log/impl-by-logical/search-logger';
import { EsLogger } from './global/log/impl-by-db/es-logger';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MovieService } from './domain/movie/service/movie.service';
import { Movie } from './domain/movie/entity/movie';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'mysql',
    host: "localhost",
    port: 9907,
    username: "user",
    password: "user-pw",
    database: "ipvp",
    entities: [Movie],
  }),ElasticsearchModule.register({
    node: 'http://localhost:9200',
  }), ],
  controllers: [AppController, SearchController, MovieController],
  providers: [AppService, SearchService, MovieService, EsLogger, {
    provide: 'MovieLogger',
    useClass: EsMovieLogger,
  }, {
    provide: 'SearchLogger',
    useClass: EsSearchLogger,
  }],
})
export class AppModule {
}
