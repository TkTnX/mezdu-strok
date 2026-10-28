import { CreateAuthorDto } from './dto/create-author.dto';
import { PrismaService } from '@/src/prisma/prisma.service';
import { BadRequestException, Injectable } from '@nestjs/common';

@Injectable()
export class AuthorService {
  public constructor(private readonly prismaService: PrismaService) {}

  public getAuthors(query: Record<string, any>) {
    const { take } = query;
    const authors = this.prismaService.author.findMany({
      take: +take,
    });

    return authors || [];
  }

  public async create(dto: CreateAuthorDto, file: Express.Multer.File) {
 let avatar: string | undefined;
    if (file) {
      avatar = `${process.env.SERVER_URL}/uploads/${file.filename}`;
    }
    const author = await this.prismaService.author.create({
      data: {
        ...dto,
        avatar,
      },
    });

    if (!author) {
      throw new BadRequestException('Автор не создан');
    }

    return author;
  }
}
