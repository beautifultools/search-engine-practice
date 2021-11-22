import { Injectable } from '@nestjs/common';
import { Movie } from '../../movie/entity/Movie';
import { ElasticsearchService } from '@nestjs/elasticsearch';
import { EsMovieMapper } from '../../movie/mapper/es.movie.mapper';
import { SearchOption } from '../entity/SearchOption';
import { User } from '../../user/entity/user';
import { MovieIndex } from '../../movie/persistence/movie.es';

type Matcher = {
  match: Record<string, string>
}

@Injectable()
export class SearchService {
  constructor(
    private elasticsearchService:ElasticsearchService
  ){}

  async search({keyword, user}:SearchOption): Promise<Movie[]>{
    const {body} = await this.elasticsearchService.search({
      index: 'movies',
      body: {
        query: {
          bool:{
            must: {
              multi_match: {
                query: keyword,
                fields: ["title", "director", "genre", "type"],
              }
            },
            should:[...this.getUserFavMatcher(user)]
          }
        }
      }
    });
    const movieHits = body?.hits?.hits || [];
    return movieHits.map(movieHit => EsMovieMapper.convertToDomain(movieHit._source));
  }

  getUserFavMatcher(user:User): Matcher[]{
    const favMatchers: Matcher[] = [];

    if(user?.favDirector){
      favMatchers[favMatchers.length] = {match:{director :user.favDirector}}
    }

    if(user?.favGenre){
      favMatchers[favMatchers.length] = {match:{genre :user.favGenre}}
    }

    return favMatchers;
  }
}
