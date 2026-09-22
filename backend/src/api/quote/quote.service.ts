import { CreateQuoteDto } from './dto';
import { PrismaService } from '@/src/prisma/prisma.service';
import { Injectable, NotFoundException } from '@nestjs/common';
import { Request } from 'express';

@Injectable()
export class QuoteService {
  public constructor(private readonly prismaService: PrismaService) {}

  async getAll() {
    const quotes = await this.prismaService.quote.findMany({
      include: {
        author: { select: { firstname: true, lastname: true, username: true } },
        book: {
          select: {
            title: true,
            id: true,
            author: { select: { name: true } },
            genre: { select: { name: true } },
          },
        },
      },
    });

    return quotes || [];
  }

  async delete(id: string, req: Request & { session: any }) {
    const user = req.session.user;
    const quote = await this.prismaService.quote.findUnique({ where: { id } });

    if (!quote) throw new NotFoundException('Цитата не найдена');

    if (quote.authorId !== user.id)
      throw new NotFoundException('Цитата не найдена');

    return this.prismaService.quote.delete({ where: { id } });
  }

  async create(dto: CreateQuoteDto, req: Request & { session: any }) {
    const user = req.session.user;
    const quote = await this.prismaService.quote.create({
      data: { ...dto, authorId: user.id },
    });

    if (!quote) throw new NotFoundException('Цитата не создана');

    return quote;
  }
}
