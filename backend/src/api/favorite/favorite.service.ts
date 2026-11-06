import { PrismaService } from '@/src/prisma/prisma.service';
import { Injectable, NotFoundException } from '@nestjs/common';
import { Request } from 'express';

@Injectable()
export class FavoriteService {
  public constructor(private readonly prismaService: PrismaService) {}

  public async getAll(req: Request & { session: any }, table: string, query?: Record<string, string>) {
    const userId = query?.userId
    const favorites = await this.prismaService.favorite.findMany({
      where: {
        AND: [
          {
            userId: userId || req.session.user.id,
          },
          {
            type: table,
          },
        ],
      },
      include: {
        book: {
          include: {
            author: { select: { name: true } },
            _count: { select: { reviews: true } },
          },
        },
        author: true,
      },
    });

    if (!favorites) throw new NotFoundException('Избранные не найдены!');

    return favorites;
  }

  public async setFav(
    table: string,
    id: string,
    req: Request & { session: any },
  ) {
    const tableWithoutS = table.slice(0, -1);

    const isFav = await this.prismaService.favorite.findFirst({
      where: {
        AND: [
          {
            type: table,
          },
          {
            [`${tableWithoutS}Id`]: id,
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
          [`${tableWithoutS}Id`]: id,
          userId: req.session.user.id,
          type: table,
        },
      });
    }

    return { message: 'Значение изменено!' };
  }
}
