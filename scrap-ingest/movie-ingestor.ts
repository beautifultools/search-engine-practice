import {getMySqlConnection} from './persistence/mysql/connector';
import {MovieEntity} from "./persistence/mysql/movie.entity";
import {getEsClient} from "./persistence/es/connector";
import {EsMovieMapper} from "./mapper/es.movie.mapper";
import {_sleep} from "./util/time";

(async () => {
    const mySqlConnection = await getMySqlConnection();
    const esClient = getEsClient();

    const savedMovies = await mySqlConnection.manager.find(MovieEntity);
    for (const movie of savedMovies) {
        esClient.index({
            index: 'movies',
            body: EsMovieMapper.convertMovieTo(movie)
        });
        await _sleep(1);
    }
    await mySqlConnection.close();
})();

