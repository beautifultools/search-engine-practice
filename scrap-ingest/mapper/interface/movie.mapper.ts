import {Movie} from "../../domain/entity/movie";

interface MovieMapper<T>{
    convertToMovie(input:T):Movie;
    convertMovieTo(movie:Movie):T;
}

export {
    MovieMapper
}
