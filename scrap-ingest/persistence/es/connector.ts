import {Client} from "@elastic/elasticsearch";
import {ELASTIC_SEARCH_CONFIG} from "../config";

const getEsClient = () => {
    return new Client({ node: ELASTIC_SEARCH_CONFIG.url });
};

export {
    getEsClient
}
