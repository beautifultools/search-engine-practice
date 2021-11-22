import { MovieMapper } from './interface/movie.mapper';
import { MovieIndex } from '../persistence/movie.es';
import { Movie } from '../entity/movie';


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
        };
    }

    convertToMovie(input: MovieIndex): Movie {
        return {
            movieNo: input.id,
            title: input.title,
            genre: input.genre,
            type: input.type,
            country: input.country,
            director: input.director,
            openDate: input.open_date,
            regDate: input.reg_date,
            modDate: input.mod_date,
        };
    }
}

const esMovieMapper = new EsMovieMapper();

export {
    esMovieMapper as EsMovieMapper
}
