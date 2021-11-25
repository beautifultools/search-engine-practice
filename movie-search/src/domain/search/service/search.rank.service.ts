import { User } from '../../user/entity/user';
import { Injectable } from '@nestjs/common';
import { ElasticsearchService } from '@nestjs/elasticsearch';
import { ES_INDEXES } from '../../../global/constant/elastic-search';

@Injectable()
export class SearchRankService {
  constructor(private elasticsearchService: ElasticsearchService) {
  }

  async getRankFeaturesOfUser(user: User): Promise<RankFeature[]> {
    return [
      ...this.getUserFavRankFeature(user),
      ...await this.getUserRecentVisitRankFeature(user),
    ];
  }

  private getUserFavRankFeature(user: User): RankFeature[] {
    const rankFeatures: RankFeature[] = [];

    if (user?.favDirector) {
      rankFeatures[rankFeatures.length] = { rank_feature: { field: `directors.${user.favDirector}` } };
    }

    if (user?.favGenre) {
      rankFeatures[rankFeatures.length] = { rank_feature: { field: `genres.${user.favGenre}` } };
    }

    return rankFeatures;
  }

  private async getUserRecentVisitRankFeature(user: User): Promise<RankFeature[]> {
    const { body } = await this.elasticsearchService.search({
      index: ES_INDEXES.LOG_MOVIE_DETAIL_VIEW,
      body: {
        query: {
          match: {
            user: user.name,
          },
        },
      },
    });
    const movieHits = body?.hits?.hits || [];
    const visits = movieHits.map(movieHit => movieHit._source);

    const genreScoreMap:Record<string, number> = visits.map(visit => visit.genres).reduce((genreMap, genres) => {
      genres.split(',').forEach(genre => {
        genreMap[genre] = (genreMap[genre] || 0) + 1;
      });

      return genreMap;
    }, {});

    const directorScoreMap:Record<string, number> = visits.map(visit => visit.directors).reduce((directorMap, directors) => {
      directors.split(',').forEach(director => {
        directorMap[director] = (directorMap[director] || 0) + 1;
      });

      return directorMap;
    }, {});

    return [
      ...Object.keys(genreScoreMap).map(genre => ({ rank_feature: { field: `genres.${genre}`, boost: genreScoreMap[genre] } })),
      ...Object.keys(directorScoreMap).filter(director => director != '').map(director => ({
        rank_feature: {
          field: `directors.${director}`,
          boost: directorScoreMap[director],
        },
      })),
    ];
  }

  async getRealTimeRankFeatures(): Promise<RankFeature[]> {
    return [];
  }
}
