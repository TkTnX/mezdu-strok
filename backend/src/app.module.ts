import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { BookModule } from './api/book/book.module';
import { PrismaModule } from './prisma/prisma.module';
import { ReviewModule } from './api/review/review.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    BookModule,
    PrismaModule,
    ReviewModule,
  ],
})
export class AppModule {}
