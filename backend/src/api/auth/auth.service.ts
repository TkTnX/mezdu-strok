import { LoginDto, RegisterDto } from '@/src/api/auth/dto';
import { PrismaService } from '@/src/prisma/prisma.service';
import { Injectable, NotFoundException } from '@nestjs/common';
import bcrypt from 'bcryptjs';
import { Request } from 'express';
@Injectable()
export class AuthService {
  public constructor(private readonly prismaService: PrismaService) {}

  async register(dto: RegisterDto, req: Request & {session: any}) {
    const isExists = await this.prismaService.user.findFirst({
      where: {
        OR: [{ email: dto.email }, { username: dto.username }],
      },
    });

    if (isExists) throw new NotFoundException('Пользователь уже существует');

    const salt = bcrypt.genSaltSync(10);
    dto.password = bcrypt.hashSync(dto.password, salt);

    const user = await this.prismaService.user.create({ data: dto });

    if (!user) throw new NotFoundException('Пользователь не создан');

    req.session.user = {
      id: user.id,
      username: user.username,
      email: user.email,
    };



    return user;
  }

  async login(dto: LoginDto, req: Request & {session: any}) {
    const user = await this.prismaService.user.findUnique({
      where: { email: dto.email },
    });

    if (!user) throw new NotFoundException('Неверные данные хода!');

    const isValidPassword = bcrypt.compareSync(dto.password, user.password);

    if (!isValidPassword) throw new NotFoundException('Неверные данные хода!');

    req.session.user = {id: user.id, username: user.username, email: user.email};

    return user;
  }

  async logout(req: Request & {session: any}) {
    req.session.destroy((err: any) => {
      if (err) {
        console.log(err)
      }
    });
  }
}
