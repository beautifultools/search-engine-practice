import { Injectable } from '@nestjs/common';
import { Movie } from '../../movie/entity/movie';
import { ElasticsearchService } from '@nestjs/elasticsearch';
import { EsMovieMapper } from '../../movie/mapper/es.movie.mapper';
import { SearchOption } from '../entity/SearchOption';
import { SearchRankService } from './search.rank.service';
import { ES_INDEXES } from '../../../global/constant/elastic-search';


@Injectable()
export class SearchService {
  constructor(
    private elasticsearchService:ElasticsearchService,
    private searchRankService: SearchRankService,
  ){}

  async search({keyword, user}:SearchOption): Promise<Movie[]>{
    const {body} = await this.elasticsearchService.search({
      index: ES_INDEXES.MOVIES,
      body: {
        query: {
          bool:{
            must: {
              multi_match: {
                query: keyword,
                fields: ["title", "director", "genre", "type"],
              }
            },
            should:[
                ...await this.searchRankService.getRankFeaturesOfUser(user),
                ...await this.searchRankService.getRealTimeRankFeatures()
            ]
          }
        }
      }
    });
    const movieHits = body?.hits?.hits || [];
    return movieHits.map(movieHit => EsMovieMapper.convertToDomain(movieHit._source));
  }
}
