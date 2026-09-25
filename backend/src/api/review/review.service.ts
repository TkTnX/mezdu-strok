import { CreateReviewDto } from './dto/create.dto';
import { PrismaService } from '@/src/prisma/prisma.service';
import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class ReviewService {
  public constructor(private readonly prismaService: PrismaService) {}

  public async create(dto: CreateReviewDto, req: Request & { session: any }) {
    const review = await this.prismaService.review.create({
      data: { ...dto, userId: req.session.user.id },
    });

    const averages = await this.prismaService.review.aggregate({
      where: {
        bookId: dto.bookId,
      },
      _avg: {
        rating: true,
        story: true,
        idea: true,
        impression: true,
        language: true,
        characters: true,
      },
    });

    await this.prismaService.book.update({
      where: { id: dto.bookId },
      data: {
        rating: averages._avg.rating ?? 0,
        story: averages._avg.story ?? 0,
        idea: averages._avg.idea ?? 0,
        impression: averages._avg.impression ?? 0,
        language: averages._avg.language ?? 0,
        characters: averages._avg.characters ?? 0,
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

    if (like) {
      await this.prismaService.reviewLike.delete({
        where: {
          id: like.id,
        },
      });
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
    const sort = query?.sortBy && query.sortBy.split('-');
    const reviews = await this.prismaService.review.findMany({
      where: {
        bookId: query.bookId || undefined,
        userId: query.userId || undefined,
      },
      include: {
        user: true,
        likes: {
          select: {
            userId: true,
          },
        },
        book: query.bookId
          ? undefined
          : { select: { title: true, id: true, preview: true } },
      },
      orderBy: {
        [sort?.[0]]: sort?.[1],
      },
      take: +query?.take || undefined,
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
