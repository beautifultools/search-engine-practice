import { Controller, Get, Inject, Query, Render, Session } from '@nestjs/common';
import { SearchService } from '../service/search.service';
import { Movie } from '../../movie/entity/movie';
import { SearchLogger } from '../../../global/log/interface/logger';
import { DtoSearchOptionMapper } from '../mapper/dto.search.mapper';

@Controller('search')
export class SearchController {
  constructor(
    private searchService: SearchService,
    @Inject('SearchLogger') private searchLogger:SearchLogger,
    private dtoSearchOptionMapper: DtoSearchOptionMapper,
  ){}

  @Get()
  @Render('search/result')
  async search(@Query() searchDto:SearchDTO, @Session() session: Record<string, any>) {
    session.user = searchDto.user; // 로그인 기능 구현 생략하면서 유저를 다른 곳에서도 로깅하기 위한 임시 방편

    const searchOption = await this.dtoSearchOptionMapper.convertToDomain(searchDto);
    const movies:Movie[] = await this.searchService.search(searchOption);

    this.logMovieSearch(searchDto, movies);

    return { movies };
  }

  private logMovieSearch(searchParam: SearchParam, movies: Movie[]) {
    this.searchLogger.logSearch({
      ...searchParam,
      count: movies.length
    });
  }
}
