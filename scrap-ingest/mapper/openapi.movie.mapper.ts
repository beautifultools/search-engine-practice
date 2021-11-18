import {MovieEntity} from "../persistence/mysql/movie.entity";
import {Movie} from "../domain/entity/movie";
import {MovieMapper} from "./interface/movie.mapper";
import {OpenApiResponseData} from "../openapi/openapi.type";

class OpenApiMovieMapper implements MovieMapper<OpenApiResponseData>{
    convertMovieTo(movie: Movie): OpenApiResponseData {
        return undefined;
    }

    public convertToMovie(input: OpenApiResponseData): Movie {
        const movie = new Movie();

        movie.movieNo = Number.parseInt(input.movieCd);
        movie.title = input.movieNm;
        movie.genre = input.movieNm ;
        movie.type = input.typeNm;
        movie.country = input.repNationNm;
        movie.director = input.directors[0]?.peopleNm;
        movie.openDate = this.convertOpenDateToDate(input.openDt);

        return movie;
    }

    private convertOpenDateToDate(openDate:string){
        const date = new Date();

        const year = Number(openDate.substr(0, 4));
        const month = Number(openDate.substr(4,2)) - 1;
        const day = Number(openDate.substr(6,2));
        date.setFullYear(year, month, day);

        return date;
    }
}

const movieMapper = new OpenApiMovieMapper();

export {
    movieMapper as OpenApiMovieMapper
}
