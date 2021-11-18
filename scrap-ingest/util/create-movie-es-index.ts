import axios from "axios";

const url = "http://localhost:9200/movies";

const payload = {
    "settings": {
        "index": {
            "number_of_shards": 1,
            "number_of_replicas": 1
        },
        "analysis": {
            "analyzer": {
                "analyzer-name": {
                    "type": "custom",
                    "tokenizer": "keyword",
                    "filter": "lowercase"
                }
            }
        }
    },
    "mappings": {
        "properties": {
            "id": {
                "type": "long"
            },
            "title": {
                "type": "text"
            },
            "genre": {
                "type": "text"
            },
            "type": {
                "type": "text"
            },
            "country": {
                "type": "text"
            },
            "director": {
                "type": "text"
            },
            "open_date": {
                "type": "date"
            },
            "reg_date": {
                "type": "date"
            },
            "mod_date": {
                "type": "date"
            },
            "meta_data": {
                "type": "object"
            }
        }
    }
};

const headers = {
    'Content-Type': 'application/json'
};

axios.put(url, payload, {headers}).then(r=>{
    console.log(r)
});
