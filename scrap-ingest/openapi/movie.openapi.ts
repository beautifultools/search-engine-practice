import axios from 'axios';
import {Movie} from "../domain/entity/movie";
import {OpenApiMovieMapper} from "../mapper/openapi.movie.mapper";

const API_KEY = "1bc4fbe6c3765d12e90ceed78514cee1";

type MovieSearchParam = {
    startYear?: number;
    endYear?: number;
    pageNo?: number;
    itemPerPage?: number;
}

async function getMoviesFromOpenAPI({startYear = 2020, endYear = 2021, pageNo = 1, itemPerPage = 100}: MovieSearchParam): Promise<Array<Movie>> {
    const requestURL = `http://www.kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieList.json?key=${API_KEY}&curPage=${pageNo}&itemPerPage=${itemPerPage}&openStartDt=${startYear}&openEndDt=${endYear}`;
    return await axios(requestURL)
        .then(r => r?.data?.movieListResult?.movieList)
        .then(movies => movies.map(OpenApiMovieMapper.convertToMovie));
}

export {
    getMoviesFromOpenAPI
}
