import {createConnection} from "typeorm";
import {MYSQL_CONFIG} from "../config";

const getMySqlConnection = () => {
    return createConnection({
        type: "mysql",
        host: MYSQL_CONFIG.host,
        port: MYSQL_CONFIG.port,
        username: MYSQL_CONFIG.username,
        password: MYSQL_CONFIG.password,
        database: MYSQL_CONFIG.defaultDatabase,
        entities: [
            __dirname + "/**/*.entity.ts"
        ],
    })
};

export {getMySqlConnection}
