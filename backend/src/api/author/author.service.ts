import { PrismaService } from '@/src/prisma/prisma.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthorService {
  public constructor(private readonly prismaService: PrismaService) {}

  public getAuthors(query: Record<string, any>) {
    const { take } = query;
    const authors = this.prismaService.author.findMany({
      take: +take,
    });

    return authors || [];
  }
}
