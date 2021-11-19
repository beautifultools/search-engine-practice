import { Body, Controller, Get, Inject, Param, Query, Render, Session } from '@nestjs/common';
import { SearchService } from '../service/search.service';
import { Movie } from '../../movie/entity/movie';
import { SearchLogger } from '../../../global/log/interface/logger';

@Controller('search')
export class SearchController {
  constructor(
    private searchService: SearchService,
    @Inject('SearchLogger') private searchLogger:SearchLogger
  ){}

  @Get()
  @Render('search/result')
  async search(@Query() searchParam:SearchParam, @Session() session: Record<string, any>) {
    session.user = searchParam.user; // 로그인 기능 구현 생략하면서 유저를 다른 곳에서도 로깅하기 위한 임시 방편

    const movies:Movie[] = await this.searchService.search(searchParam);
    this.logMovieSearch(searchParam, movies);

    return { movies };
  }

  private logMovieSearch(searchParam: SearchParam, movies: Movie[]) {
    this.searchLogger.logSearch({
      ...searchParam,
      count: movies.length
    });
  }
}
