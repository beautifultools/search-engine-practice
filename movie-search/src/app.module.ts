import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ElasticsearchModule } from '@nestjs/elasticsearch';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GlobalModule } from './global/global.module';
import { SearchModule } from './domain/search/search.module';
import { MovieModule } from './domain/movie/movie.module';
import { UserModule } from './domain/user/user.module';

@Module({
  imports: [
    GlobalModule,
    SearchModule,
    MovieModule,
    UserModule,
    TypeOrmModule.forRoot(),
    ElasticsearchModule.register({
      node: 'http://localhost:9200',
    }), ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
}
