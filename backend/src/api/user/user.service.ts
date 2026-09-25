import { UpdateUserDto } from './dto';
import { PrismaService } from '@/src/prisma/prisma.service';
import { Injectable, NotFoundException } from '@nestjs/common';
import { Request } from 'express';

@Injectable()
export class UserService {
  public constructor(private readonly prismaService: PrismaService) {}

  async getMe(req: Request & { session: any }) {
    if (!req.session.user) return null;
    const user = await this.prismaService.user.findUnique({
      where: { id: req.session.user.id },
      omit: {
        password: true,
      },
      include: {
        reviews: {
          select: { rating: true },
        },
        _count: {
          select: {
            favorites: true,
            reviews: true,
          },
        },
      },
    });

    if (!user) throw new NotFoundException('Пользователь не найден');

    return user;
  }

  async getById(id: string) {
    const user = await this.prismaService.user.findUnique({
      where: { id },
      omit: {
        password: true,
      },
    });

    if (!user) throw new NotFoundException('Пользователь не найден');

    return user;
  }

  async update(req: Request & { session: any }, dto: UpdateUserDto) {
    const user = await this.prismaService.user.update({
      where: { id: req.session.user.id },
      data: dto,
    });
    console.log(user);
    if (!user) throw new NotFoundException('Пользователь не обновлен');

    return user;
  }
}

// TODO: Обработка дубликата юзернейма
// TODO: загрузка аватарки
// TODO: Проверить чтоб всё работало при регистрации