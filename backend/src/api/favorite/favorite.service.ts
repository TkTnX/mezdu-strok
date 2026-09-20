import { PrismaService } from '@/src/prisma/prisma.service';
import { Injectable, NotFoundException } from '@nestjs/common';
import { Request } from 'express';

@Injectable()
export class FavoriteService {
  public constructor(private readonly prismaService: PrismaService) {}

  public async getAll(req: Request & { session: any }) {
    const favorites = await this.prismaService.favorite.findMany({
      where: { userId: req.session.user.id },
      include: {
        book: {
          include: {
            author: { select: { name: true } },
            _count: { select: { reviews: true } },
          },
        },
      },
    });

    if (!favorites) throw new NotFoundException('Избранные не найдены!');

    return favorites;
  }
}
