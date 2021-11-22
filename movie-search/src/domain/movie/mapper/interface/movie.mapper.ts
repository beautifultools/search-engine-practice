import { Movie } from '../../entity/movie';
import { MovieIndex } from '../../persistence/movie.es';


interface MovieMapper<T> extends Mapper<Movie, T>{
}

export {
    MovieMapper
}
