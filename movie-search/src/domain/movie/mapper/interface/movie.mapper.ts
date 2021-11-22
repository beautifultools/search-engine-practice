import { Movie } from '../../entity/Movie';
import { MovieIndex } from '../../persistence/movie.es';


interface MovieMapper<T> extends Mapper<Movie, T>{
}

export {
    MovieMapper
}
