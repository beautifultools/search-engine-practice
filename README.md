# Search Engine Practice

## Description

This is a search engine practice using elastic search ranking feature.  
I used the movie data of korean film council open api because it is easy to acquire.

## Structure

- scrap-ingest
  - movie-scraper
    scrap movie data and store to mysql.
    
  - movie-ingestor
  
    ingest data from mysql to elastic search.
  
- movie-search

  - provide simple movie search feature by keywords.
  - store search logs to elastic search for ranking.
  - (To do) improve search quality by knowlege graph using neo4j


## How to Start

### Start Dababases

```bash
# This script is using docker. So you need to install docker beforehand
$ ./startDbs.sh
```

### Scrap

```bash
# scrap data. 
$ ./runScraper.sh

# scraper also can receive a loop count. 1 loop stores 100 movie data.
$ ./runScraper.sh 10
```

### Ingest

```bash
$ ./runIngestor.sh 
```

### Start Movie Search

```bash
$ ./runMovieSearch.sh
```

## License

This is [MIT licensed](LICENSE).
