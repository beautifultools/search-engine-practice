import { MovieMapper } from './interface/movie.mapper';
import { Movie } from '../entity/movie';
import { MovieEntity } from '../persistence/movie.orm';


class OrmMovieMapper implements MovieMapper<MovieEntity> {
    convertMovieTo(movie: MovieEntity): MovieEntity {
        return {
            movieNo: movie.movieNo,
            title: movie.title,
            genre: movie.genre,
            type: movie.type,
            country: movie.country,
            director: movie.director,
            openDate: movie.openDate,
            regDate: movie.regDate,
            modDate: movie.modDate,
        };
    }

    convertToMovie(movie: Movie): MovieEntity {
        return {
            movieNo: movie.movieNo,
            title: movie.title,
            genre: movie.genre,
            type: movie.type,
            country: movie.country,
            director: movie.director,
            openDate: movie.openDate,
            regDate: movie.regDate,
            modDate: movie.modDate,
        };
    }
}

const ormMovieMapper = new OrmMovieMapper();

export {
    ormMovieMapper as OrmMovieMapper
}
