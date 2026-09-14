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

  public async create(dto: CreateReviewDto, req: Request & { session: any }) {
    const review = await this.prismaService.review.create({
      data: { ...dto, userId: req.session.user.id },
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
        story:
          reviews.reduce((acc, review) => acc + review.story, 0) /
          reviews.length,
        idea:
          reviews.reduce((acc, review) => acc + review.idea, 0) /
          reviews.length,
        impression:
          reviews.reduce((acc, review) => acc + review.impression, 0) /
          reviews.length,
        language:
          reviews.reduce((acc, review) => acc + review.language, 0) /
          reviews.length,
        characters:
          reviews.reduce((acc, review) => acc + review.characters, 0) /
          reviews.length,
      },
    });
    return review;
  }

  public async like(id: string, req: Request & { session: any }) {
    await this.getById(id);

    const like = await this.prismaService.reviewLike.findFirst({
      where: {
        AND: [
          {
            reviewId: id,
          },
          {
            userId: req.session.user.id,
          },
        ],
      },
    });

    if(like) {
      await this.prismaService.reviewLike.delete({
        where: {
          id: like.id
        }
      })
    } else {
      await this.prismaService.reviewLike.create({
        data: {
          reviewId: id,
          userId: req.session.user.id,
        },
      });
    }

    return like ? { message: 'Лайк удален' } : { message: 'Лайк добавлен' };
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

  public async getById(id: string) {
    const review = await this.prismaService.review.findUnique({
      where: {
        id,
      },
      include: {
        _count: {
          select: { likes: true },
        },
        user: {
          omit: {
            password: true,
          },
        },
      },
    });

    if (!review) throw new NotFoundException('Рецензия не найдена');

    return review;
  }
}
