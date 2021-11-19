import { Controller, Get, Inject, Param, Render, Session } from '@nestjs/common';
import { MovieService } from '../service/movie.service';
import { Movie } from '../entity/movie';
import { MovieLogger } from '../../../global/log/interface/logger';


@Controller('movie')
export class MovieController {
  constructor(
    private movieService: MovieService,
    @Inject("MovieLogger")private movieLogger: MovieLogger
  ){}

  @Get(":movieNo")
  @Render('movie/detail')
  async detail(@Session() session: Record<string, any>, @Param("movieNo") movieNo:number) {
    const movie = await this.movieService.getById(movieNo);
    console.log(movie);

    this.movieLogger.logDetailView({
      ...movie,
      viewer:session.user || "unknown",
    });

    return { movie };
  }
}
