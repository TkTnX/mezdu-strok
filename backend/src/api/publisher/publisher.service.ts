import { CreatePublisherDto } from './dto/create-publisher.dto';
import { PrismaService } from '@/src/prisma/prisma.service';
import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class PublisherService {
  public constructor(private readonly prismaService: PrismaService) {}

  public async getPublishers(query: Record<string, any>) {
    const { take } = query;
    const publishers = await this.prismaService.publisher.findMany({
      take: take ? +take : undefined,
    });

    return publishers || [];
  }

  public async getPublisher(id: string) {
    const publisher = await this.prismaService.publisher.findUnique({
      where: { id },
      include: {
        books: {
          include: { author: true, _count: { select: { reviews: true } } },
        },
      },
    });

    if (!publisher) throw new NotFoundException('Издательство не найдено');

    return publisher;
  }

  public create(dto: CreatePublisherDto) {
    return this.prismaService.publisher.create({ data: { name: dto.title } });
  }

  public async delete(id: string) {
    const publisher = await this.prismaService.publisher.findUnique({
      where: { id },
    });

    if (!publisher) throw new NotFoundException('Издательство не найдено');

    return this.prismaService.publisher.delete({ where: { id } });
  }
}
