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
    const { rating, take, sort, title, ...restQuery } = query;
    const where = {
      ...(title && {
        title: {
          contains: title,
          mode: 'insensitive' as const,
        },
      }),

      ...Object.fromEntries(
        Object.entries({
          authorId: restQuery.author,
          genreId: restQuery.genre,
          publisherId: restQuery.publisher,
        }).filter(([, value]) => value),
      ),

      ...(rating &&
        (() => {
          const [operator, value] = rating.split('-');

          return {
            rating: {
              [operator]: Number(value),
            },
          };
        })()),
    };

    const books = await this.prismaService.book.findMany({
      where,
      include: {
        author: true,
        genre: true,
        publisher: true,
        _count: { select: { reviews: true } },
      },
      orderBy: {
        [sort && sort.split('-')[0]]: sort && sort.split('-')[1],
      },
      take: +take || undefined,
    });
    return books;
  }

  public async getFilters() {
    const [authors, genres, publishers] = await Promise.all([
      this.prismaService.author.findMany({
        select: { id: true, name: true },
        orderBy: { name: 'asc' },
      }),
      this.prismaService.genre.findMany({
        select: { id: true, name: true },
        orderBy: { name: 'asc' },
      }),
      this.prismaService.publisher.findMany({
        select: { id: true, name: true },
        orderBy: { name: 'asc' },
      }),
    ]);

    return { authors, genres, publishers };
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

  public async create(data: CreateBookDto, file: Express.Multer.File) {
    let preview: string | undefined;
    console.log(file);
    if (file) {
      preview = `${process.env.SERVER_URL}/uploads/${file.filename}`;
    }
    console.log(preview);
    const book = await this.prismaService.book.create({
      data: {
        ...data,
        preview,
        tags: data.tags.split(',').map((tag) => tag.trim()),
        year: Number(data.year),
        pages: Number(data.pages),
      },
    });

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
