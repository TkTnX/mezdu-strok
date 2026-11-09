import { LoginDto, RegisterDto, ResetPasswordDto } from '@/src/api/auth/dto';
import { CodeService } from '@/src/api/code/code.service';
import { emailTemplate } from '@/src/lib';
import { PrismaService } from '@/src/prisma/prisma.service';
import { Injectable, NotFoundException } from '@nestjs/common';
import bcrypt from 'bcryptjs';
import { Request, Response } from 'express';
@Injectable()
export class AuthService {
  public constructor(
    private readonly prismaService: PrismaService,
    private readonly codeService: CodeService,
  ) {}

  async register(dto: RegisterDto, req: Request & { session: any }) {
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
      role: user.role,
    };

    return user;
  }

  async login(dto: LoginDto, req: Request & { session: any }) {
    const user = await this.prismaService.user.findFirst({
      where: {
        OR: [{ email: dto.emailOrUsername }, { username: dto.emailOrUsername }],
      },
    });

    if (!user) throw new NotFoundException('Неверные данные входа!');

    const isValidPassword = bcrypt.compareSync(dto.password, user.password!);

    if (!isValidPassword) throw new NotFoundException('Неверные данные входа!');

    req.session.user = {
      id: user.id,
      username: user.username,
      email: user.email,
      role: user.role,
    };

    return user;
  }

  async logout(req: Request & { session: any }) {
    req.session.destroy((err: any) => {
      if (err) {
        console.log(err);
      }
    });
  }

  async resetPassword(dto: ResetPasswordDto) {
    const user = await this.prismaService.user.findUnique({
      where: {
        email: dto.email,
      },
    });

    if (!user) throw new NotFoundException('Пользователь не найден!');

    const code = await this.prismaService.code.findFirst({
      where: {
        code: dto.code,
      },
    });

    if (!code) throw new NotFoundException('Код не подходит!');

    const salt = bcrypt.genSaltSync(10);
    const password = await bcrypt.hash(dto.newPassword, salt);
    return await this.prismaService.user.update({
      where: { id: user.id },
      data: { password },
    });
  }

  async googleLogin(googleUser: any) {
    const user = await this.prismaService.user.upsert({
      where: {
        email: googleUser.email,
      },
      update: {
        googleId: googleUser.id,
      },
      create: {
        email: googleUser.email,
        username: `${googleUser.email.split('@')[0]}`,
        avatar: googleUser.picture,
        googleId: googleUser.id,
        firstname: googleUser.firstName,
        lastname: googleUser.lastName,
        role: 'USER',
      },
    });

    return user;
  }
}
