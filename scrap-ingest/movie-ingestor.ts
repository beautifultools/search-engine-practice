import {getMySqlConnection} from './persistence/mysql/connector';
import {MovieEntity} from "./persistence/mysql/movie.entity";
import {getEsClient} from "./persistence/es/connector";
import {EsMovieMapper} from "./mapper/es.movie.mapper";

(async () => {
    const mySqlConnection = await getMySqlConnection();
    const esClient = getEsClient();

    const savedMovies = await mySqlConnection.manager.find(MovieEntity);
    savedMovies.forEach((movie) => {
        esClient.index({
            index: 'movies',
            body: EsMovieMapper.convertMovieTo(movie)
        })
    });
})();

