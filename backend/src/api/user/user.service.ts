import { UpdateUserDto } from './dto';
import { PrismaService } from '@/src/prisma/prisma.service';
import { Injectable, NotFoundException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Request } from 'express';

@Injectable()
export class UserService {
  public constructor(
    private readonly prismaService: PrismaService,
    private readonly configService: ConfigService,
  ) {}

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

  async update(
    req: Request & { session: any },
    dto: UpdateUserDto,
    file: Express.Multer.File,
  ) {
    let avatar: string | undefined;
    console.log(`FILE `, file);
    if (file) {
      avatar = `${this.configService.getOrThrow('SERVER_URL')}/uploads/${file.filename}`;
    }

    const user = await this.prismaService.user.update({
      where: { id: req.session.user.id },
      data: {
        ...dto,
        ...(avatar && { avatar }),
      },
    });
    if (!user) throw new NotFoundException('Пользователь не обновлен');

    return user;
  }
}

// TODO: загрузка аватарки
