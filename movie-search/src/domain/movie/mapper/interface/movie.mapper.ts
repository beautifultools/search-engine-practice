import { Movie } from '../../entity/movie';
import { MovieEntity } from '../../persistence/movie.orm';


interface MovieMapper<T>{
    convertToMovie(input:T):MovieEntity;
    convertMovieTo(movie:Movie):T;
}

export {
    MovieMapper
}
