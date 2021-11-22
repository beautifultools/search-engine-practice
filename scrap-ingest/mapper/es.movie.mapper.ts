import {MovieIndex} from "../persistence/es/movie.index";
import {MovieMapper} from "./interface/movie.mapper";
import {Movie} from "../domain/entity/movie";


class EsMovieMapper implements MovieMapper<MovieIndex> {
    convertMovieTo(movie: Movie): MovieIndex {
        return {
            id: movie.movieNo,
            title: movie.title,
            genres: this.getSimpleScoresForES(movie.genre),
            type: movie.type,
            country: movie.country,
            directors: this.getSimpleScoresForES(movie.director),
            open_date: movie.openDate,
            reg_date: movie.regDate,
            mod_date: movie.modDate,
            meta_data: {}
        };
    }

    convertToMovie(input: MovieIndex): Movie {
        return undefined;
    }

    getSimpleScoresForES(target: string, delimiter:string = ","): Record<string, number>{
        const scores:Record<string, number> = {};
        target.split(delimiter).forEach((item, i)=>{
            scores[item] = 1/(i+1);
        });
        return scores;
    }
}

const movieMapper = new EsMovieMapper();

export {
    movieMapper as EsMovieMapper
}
