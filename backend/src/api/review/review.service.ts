import { CreateReviewDto } from './dto/create.dto';
import { PrismaService } from '@/src/prisma/prisma.service';
import {
  BadGatewayException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';


@Injectable()
export class ReviewService {
  public constructor(private readonly prismaService: PrismaService) {}

  public async create(dto: CreateReviewDto) {
    const review = await this.prismaService.review.create({
      data: { ...dto, userId: '1' },
    });

    if (!review) throw new BadGatewayException('Рецензия не создана');

    const reviews = await this.prismaService.review.findMany({
      where: { bookId: dto.bookId },
    });
    await this.prismaService.book.update({
      where: { id: dto.bookId },
      data: {
        rating:
          reviews.reduce((acc, review) => acc + review.rating, 0) /
          reviews.length,
      },
    });
    return review;
  }

  public async get(query: Record<string, any>) {
    const sort = query.sortBy && query.sortBy.split('-');

    const reviews = await this.prismaService.review.findMany({
      where: {
        bookId: query.bookId || undefined,
      },
      include: {
        user: true,
        _count: {
          select: {
            likes: true,
          },
        },
      },
      orderBy: {
        [sort[0]]: sort[1],
      },
    });

    if (!reviews) throw new NotFoundException('Рецензии не найдены');

    return reviews;
  }
}
