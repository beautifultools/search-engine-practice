import { Injectable } from '@nestjs/common';
import { Movie } from '../../movie/entity/movie';
import { ElasticsearchService } from '@nestjs/elasticsearch';
import { EsMovieMapper } from '../../movie/mapper/es.movie.mapper';

@Injectable()
export class SearchService {
  constructor(
    private elasticsearchService:ElasticsearchService
  ){}

  async search({keyword}:SearchParam): Promise<Movie[]>{
    const {body} = await this.elasticsearchService.search({
      index: 'movies',
      body: {
        query: {
          multi_match: {
            query: keyword,
            fields:["title", "director", "genre", "type"],
          }
        }
      }
    });
    const movieHits = body?.hits?.hits || [];
    return movieHits.map(movieHit => EsMovieMapper.convertToMovie(movieHit._source));
  }

}
