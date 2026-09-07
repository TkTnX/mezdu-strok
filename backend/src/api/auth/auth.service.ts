import { LoginDto, RegisterDto } from '@/src/api/auth/dto';
import { PrismaService } from '@/src/prisma/prisma.service';
import { Injectable, NotFoundException } from '@nestjs/common';
import bcrypt from 'bcryptjs';
@Injectable()
export class AuthService {
  public constructor(private readonly prismaService: PrismaService) {}

  async register(dto: RegisterDto) {
    const user = await this.prismaService.user.findFirst({
        where: {
            OR: [
                { email: dto.email },
                { username: dto.username },
          ]
      },
    });
      
      if (user) throw new NotFoundException('Пользователь уже существует');

        const salt = bcrypt.genSaltSync(10);
        dto.password = bcrypt.hashSync(dto.password, salt);

      return this.prismaService.user.create({ data: dto });
    }
    
    async login(dto: LoginDto) {
        const user = await this.prismaService.user.findUnique({
            where: { email: dto.email },
        })
        
        if (!user) throw new NotFoundException('Неверные данные хода!')
        
        const isValidPassword = bcrypt.compareSync(dto.password, user.password);

        if(!isValidPassword) throw new NotFoundException('Неверные данные хода!')
        
        return user
    }
}
