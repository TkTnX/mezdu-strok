import { CreateBookDto } from './dto/create.dto';
import { PrismaService } from '@/src/prisma/prisma.service';
import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';

@Injectable()
export class BookService {
  public constructor(private readonly prismaService: PrismaService) {}

  public async getAll() {
    const books = await this.prismaService.book.findMany({
      include: {
        author: true,
        genre: true,
        publisher: true,
        _count: { select: { reviews: true } },
      },
    });

    return books;
  }

  public async getById(id: string) {
    const book = await this.prismaService.book.findUnique({
      where: { id },
      include: { author: true, genre: true, publisher: true, _count: {select: {reviews: true}} },
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
}
