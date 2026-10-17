import { PrismaService } from '@/src/prisma/prisma.service';
import { Injectable } from '@nestjs/common';

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
}
