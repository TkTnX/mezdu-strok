import { CreatePublisherDto } from './dto/create-publisher.dto';
import { PrismaService } from '@/src/prisma/prisma.service';
import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class PublisherService {
  public constructor(private readonly prismaService: PrismaService) {}

  public getPublishers(query: Record<string, any>) {
    const { take } = query;
    const publishers = this.prismaService.publisher.findMany({
      take: +take,
    });

    return publishers || [];
  }

  public create(dto: CreatePublisherDto) {
    return this.prismaService.publisher.create({ data: { name: dto.title } });
  }

  public async delete(id: string) {
    console.log(id);
    const publisher = await this.prismaService.publisher.findUnique({
      where: { id },
    });

    if (!publisher) throw new NotFoundException('Издательство не найдено');

    return this.prismaService.publisher.delete({ where: { id } });
  }
}
