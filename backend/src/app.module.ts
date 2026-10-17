import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { BookModule } from './api/book/book.module';
import { PrismaModule } from './prisma/prisma.module';
import { ReviewModule } from './api/review/review.module';
import { UserModule } from './api/user/user.module';
import { AuthModule } from './api/auth/auth.module';
import { FavoriteModule } from './api/favorite/favorite.module';
import { QuoteModule } from './api/quote/quote.module';
import { SearchModule } from './api/search/search.module';
import { AuthorModule } from './api/author/author.module';
import { PublisherModule } from './api/publisher/publisher.module';


@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),

    BookModule,
    PrismaModule,
    ReviewModule,
    UserModule,
    AuthModule,
    FavoriteModule,
    QuoteModule,
    SearchModule,
    AuthorModule,
    PublisherModule,
  ],
})
export class AppModule {}
