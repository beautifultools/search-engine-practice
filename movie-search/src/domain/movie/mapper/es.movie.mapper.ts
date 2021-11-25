import { MovieMapper } from './interface/movie.mapper';
import { MovieIndex } from '../persistence/movie.es';
import { Movie } from '../entity/movie';
import { getEsRankScore, getKeyStringsFromEsRankScore } from '../../../global/util/es.score.util';

class EsMovieMapper implements MovieMapper<MovieIndex> {
    convertFromDomain(movie: Movie): MovieIndex {
        return {
            id: movie.movieNo,
            title: movie.title,
            genres: getEsRankScore(movie.genres),
            type: movie.type,
            country: movie.country,
            directors: getEsRankScore(movie.directors),
            open_date: movie.openDate,
            reg_date: movie.regDate,
            mod_date: movie.modDate,
            meta_data: {}
        };
    }

    convertToDomain(input: MovieIndex): Movie {
        return {
            movieNo: input.id,
            title: input.title,
            genres: getKeyStringsFromEsRankScore(input.genres),
            type: input.type,
            country: input.country,
            directors: getKeyStringsFromEsRankScore(input.directors),
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
