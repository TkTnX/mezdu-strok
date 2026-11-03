import { PrismaService } from '@/src/prisma/prisma.service';
import { BadGatewayException, Injectable } from '@nestjs/common';

@Injectable()
export class CodeService {
  public constructor(private readonly prismaService: PrismaService) {}

  public async generateCode() {
    const now = new Date();
    const code = await this.prismaService.code.create({
      data: {
        code: String(Math.ceil(Math.random() * 100000)),
        expiresAt: new Date(now.setMinutes(now.getMinutes() + 5)),
      },
    });
      
      if (!code) throw new BadGatewayException('Не удалось создать код')
      return code
  }
}
