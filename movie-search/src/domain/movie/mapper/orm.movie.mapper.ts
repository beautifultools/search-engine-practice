import { MovieMapper } from './interface/movie.mapper';
import { Movie } from '../entity/movie';
import { MovieEntity } from '../persistence/movie.orm';


class OrmMovieMapper implements MovieMapper<MovieEntity> {
    convertFromDomain(movie: Movie): MovieEntity {
        return {
            movieNo: movie.movieNo,
            title: movie.title,
            genres: movie.genres,
            type: movie.type,
            country: movie.country,
            directors: movie.directors,
            openDate: movie.openDate,
            regDate: movie.regDate,
            modDate: movie.modDate,
        };
    }

    convertToDomain(movie: MovieEntity): Movie {
        return {
            movieNo: movie.movieNo,
            title: movie.title,
            genres: movie.genres,
            type: movie.type,
            country: movie.country,
            directors: movie.directors,
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
