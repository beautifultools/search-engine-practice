import {getMoviesFromOpenAPI} from "./openapi/movie.openapi";
import {getMySqlConnection} from './persistence/mysql/connector';
import {MysqlMovieMapper} from "./mapper/mysql.movie.mapper";

(async () => {
    const mysqlConnection = await getMySqlConnection();

    const movies = await getMoviesFromOpenAPI({});
    movies?.forEach(movie => {
        mysqlConnection.manager.save(MysqlMovieMapper.convertMovieTo(movie));
    })
})();

