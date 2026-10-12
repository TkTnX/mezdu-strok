import { PrismaService } from '@/src/prisma/prisma.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class SearchService {
  public constructor(private readonly prismaService: PrismaService) {}

  public async search(value: string) {
    const books = await this.prismaService.book.findMany({
      where: {
        OR: [
          { title: { contains: value, mode: 'insensitive' } },
          { author: { name: { contains: value, mode: 'insensitive' } } },
          { genre: { name: { contains: value, mode: 'insensitive' } } },
        ],
      },
      include: {
        author: { select: { name: true } },
        genre: { select: { name: true } },
      },
    });

    const authors = await this.prismaService.author.findMany({
      where: {
        name: {
          contains: value,
          mode: 'insensitive',
        },
      },
    });

    const genres = await this.prismaService.genre.findMany({
      where: {
        name: {
          contains: value,
          mode: 'insensitive',
        },
      },
    });

    return {
      books,
      authors,
      genres,
    };
  }
}
