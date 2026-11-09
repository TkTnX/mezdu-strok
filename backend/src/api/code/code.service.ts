import { EmailDto } from '../../../src/api/code/dto';
import { emailTemplate } from '../../../src/lib';
import { PrismaService } from '../../../src/prisma/prisma.service';
import { BadGatewayException, Injectable } from '@nestjs/common';

@Injectable()
export class CodeService {
  public constructor(private readonly prismaService: PrismaService) {}

  public async sendCode(dto: EmailDto) {
    const { subject, to } = dto;
    const code = await this.generateCode();

    await emailTemplate(
      to,
      subject,
      `<h1>Восстановление пароля</h1> <p>Код: ${code.code}</p>`,
    );

    return true;
  }

  public async generateCode() {
    const now = new Date();

    await this.prismaService.code.deleteMany({
      where: {
        expiresAt: {
          lte: now,
        },
      },
    });

    const code = await this.prismaService.code.create({
      data: {
        code: String(Math.floor(100000 + Math.random() * 900000)),
        expiresAt: new Date(now.setMinutes(now.getMinutes() + 5)),
      },
    });

    if (!code) throw new BadGatewayException('Не удалось создать код');

    return code;
  }
}
