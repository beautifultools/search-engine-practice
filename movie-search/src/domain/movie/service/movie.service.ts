import { Injectable } from '@nestjs/common';
import { Connection } from 'typeorm';
import { Movie } from '../entity/movie';

@Injectable()
export class MovieService {
  constructor(private readonly connection: Connection){}

  getById(movieNo: number):Promise<Movie>{
    return this.connection.getRepository(Movie).findOne(movieNo);
  }
}
