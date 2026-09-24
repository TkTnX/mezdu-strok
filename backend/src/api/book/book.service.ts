import { CreateBookDto } from './dto/create.dto';
import { PrismaService } from '@/src/prisma/prisma.service';
import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { Request } from 'express';

@Injectable()
export class BookService {
  public constructor(private readonly prismaService: PrismaService) {}

  public async getAll(query: Record<string, any>) {
    const books = await this.prismaService.book.findMany({
      where: {
        title: {
          contains: query?.title || undefined,
          mode: 'insensitive',
        },
      },
      include: {
        author: true,
        genre: true,
        publisher: true,
        _count: { select: { reviews: true } },
      },
      orderBy: {
        [query.sort && query.sort.split('-')[0]]:
          query.sort && query.sort.split('-')[1],
      },
      take: +query?.take || undefined,
    });
    return books;
  }

  public async getById(id: string) {
    const book = await this.prismaService.book.findUnique({
      where: { id },
      include: {
        author: true,
        genre: true,
        publisher: true,
        _count: { select: { reviews: true, favorites: true } },
        favorites: {
          select: {
            userId: true,
          },
        },
      },
    });

    if (!book) {
      throw new NotFoundException('Книга не найдена');
    }

    return book;
  }

  public async create(data: CreateBookDto) {
    const book = await this.prismaService.book.create({ data });

    if (!book) {
      throw new BadRequestException('Книга не создана');
    }

    return book;
  }

  public async addToFav(id: string, req: Request & { session: any }) {
    const book = await this.getById(id);

    const isFav = await this.prismaService.favorite.findFirst({
      where: {
        OR: [
          {
            bookId: id,
          },
          {
            userId: req.session.user.id,
          },
        ],
      },
    });

    if (isFav) {
      await this.prismaService.favorite.delete({
        where: {
          id: isFav.id,
        },
      });
    } else {
      await this.prismaService.favorite.create({
        data: {
          bookId: id,
          userId: req.session.user.id,
        },
      });
    }

    return book;
  }
}
