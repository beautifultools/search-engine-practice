import {getMoviesFromOpenAPI} from "./openapi/movie.openapi";
import {getMySqlConnection} from './persistence/mysql/connector';
import {MysqlMovieMapper} from "./mapper/mysql.movie.mapper";
import {inspect} from "util";
import {_sleep} from "./util/time";

(async () => {
    const mysqlConnection = await getMySqlConnection();

    const movies = await getMoviesFromOpenAPI({});
    const queryRunCheckers = movies?.map(async movie => {
        return await mysqlConnection.manager.save(MysqlMovieMapper.convertMovieTo(movie));
    });

    while(true){
        if(isAllCompleted(queryRunCheckers)){
            await mysqlConnection.close();
            break;
        }
        await _sleep(1000);
    }
})();

function isAllCompleted(checkers: Promise<any>[]):boolean{
    let complete = true;
    for (let checker of checkers) {
        if (inspect(checker).includes("pending")) {
            complete = false;
        }
    }
    return complete;
}
