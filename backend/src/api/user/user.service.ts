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
}
