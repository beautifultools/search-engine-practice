import {getMoviesFromOpenAPI} from "./openapi/movie.openapi";
import {getMySqlConnection} from './persistence/mysql/connector';
import {MysqlMovieMapper} from "./mapper/mysql.movie.mapper";
import {inspect} from "util";
import {_sleep} from "./util/time";

(async () => {
    const loopCount = process.argv.length >= 3 ? process.argv[2] : 1;

    for(let pageNo = 1; pageNo <= loopCount; pageNo++){
        scrap(pageNo).then(()=>{
            console.log(`Page ${pageNo} is completed. Loop count is ${loopCount}`)
        });
    }
})();

async function scrap(pageNo:number = 1){
    const mysqlConnection = await getMySqlConnection();
    const movies = await getMoviesFromOpenAPI({pageNo});
    const executedQueries = movies?.map(async movie => {
        return await mysqlConnection.manager.save(MysqlMovieMapper.convertMovieTo(movie));
    });

    while (true) {
        if (isAllCompleted(executedQueries)) {
            await mysqlConnection.close();
            break;
        }
        await _sleep(1000);
    }
}

function isAllCompleted(checkers: Promise<any>[]):boolean{
    let complete = true;
    for (let checker of checkers) {
        if (inspect(checker).includes("pending")) {
            complete = false;
        }
    }
    return complete;
}
