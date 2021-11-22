import { Injectable } from '@nestjs/common';
import { Connection } from 'typeorm';
import { Movie } from '../entity/movie';
import { MovieEntity } from '../persistence/movie.orm';
import { OrmMovieMapper } from '../mapper/orm.movie.mapper';

@Injectable()
export class MovieService {
  constructor(private readonly connection: Connection){}

  async getById(movieNo: number):Promise<Movie>{
    const movieEntity = await this.connection.getRepository(MovieEntity).findOne(movieNo);
    return OrmMovieMapper.convertToMovie(movieEntity);
  }
}
