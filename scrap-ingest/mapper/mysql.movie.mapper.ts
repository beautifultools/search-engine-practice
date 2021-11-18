import {MovieEntity} from "../persistence/mysql/movie.entity";
import {MovieMapper} from "./interface/movie.mapper";
import {Movie} from "../domain/entity/movie";


class MysqlMovieMapper implements MovieMapper<MovieEntity> {
    convertMovieTo(movie: Movie): MovieEntity {
        const movieEntity = new MovieEntity();

        movieEntity.movieNo = movie.movieNo;
        movieEntity.title = movie.title;
        movieEntity.genre = movie.genre;
        movieEntity.type = movie.type;
        movieEntity.country = movie.country;
        movieEntity.director = movie.director;
        movieEntity.openDate = movie.openDate;
        movieEntity.regDate = movie.regDate;
        movieEntity.modDate = movie.modDate;

        return movieEntity;
    }

    convertToMovie(movieEntity: MovieEntity): Movie {
        const movie = new Movie();

        movie.movieNo = movieEntity.movieNo;
        movie.title = movieEntity.title;
        movie.genre = movieEntity.genre;
        movie.type = movieEntity.type;
        movie.country = movieEntity.country;
        movie.director = movieEntity.director;
        movie.openDate = movieEntity.openDate;
        movie.regDate = movieEntity.regDate;
        movie.modDate = movieEntity.modDate;

        return movie;
    }
}

const movieMapper = new MysqlMovieMapper();

export {
    movieMapper as MysqlMovieMapper
};
