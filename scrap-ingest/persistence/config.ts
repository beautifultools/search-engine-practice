const ELASTIC_SEARCH_CONFIG = Object.freeze({
    url: "http://localhost:9200"
});

const MYSQL_CONFIG = Object.freeze({
    host: "localhost",
    port: 9907,
    username: "user",
    password: "user-pw",
    defaultDatabase: "ipvp",
});

export {
    ELASTIC_SEARCH_CONFIG,
    MYSQL_CONFIG,
}
