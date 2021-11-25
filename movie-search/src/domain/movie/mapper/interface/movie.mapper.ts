import { Movie } from '../../entity/movie';


interface MovieMapper<T> extends Mapper<Movie, T>{
}

export {
    MovieMapper
}
