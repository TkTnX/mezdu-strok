import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { BookModule } from './api/book/book.module';
import { PrismaModule } from './prisma/prisma.module';
import { ReviewModule } from './api/review/review.module';
import { UserModule } from './api/user/user.module';
import { AuthModule } from './api/auth/auth.module';
import { FavoriteModule } from './api/favorite/favorite.module';

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
  ],
})
export class AppModule {}
