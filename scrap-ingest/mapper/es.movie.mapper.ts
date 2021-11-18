import {MovieEntity} from "../persistence/mysql/movie.entity";
import {MovieIndex} from "../persistence/es/movie.index";
import {MovieMapper} from "./interface/movie.mapper";
import {Movie} from "../domain/entity/movie";


class EsMovieMapper implements MovieMapper<MovieIndex> {
    convertMovieTo(movie: Movie): MovieIndex {
        return {
            id: movie.movieNo,
            title: movie.title,
            genre: movie.genre,
            type: movie.type,
            country: movie.country,
            director: movie.director,
            open_date: movie.openDate,
            reg_date: movie.regDate,
            mod_date: movie.modDate,
            meta_data: {}
        };;
    }

    convertToMovie(input: MovieIndex): Movie {
        return undefined;
    }
}

const movieMapper = new EsMovieMapper();

export {
    movieMapper as EsMovieMapper
}
