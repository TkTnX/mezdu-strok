import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Query,
  Req,
  UseGuards,
} from '@nestjs/common';
import { BookService } from './book.service';
import { CreateBookDto } from './dto/create.dto';
import { AuthGuard } from '@/src/guards';
import { Request } from 'express';

@Controller('books')
export class BookController {
  public constructor(private readonly bookService: BookService) {}

  @Get()
  public getAll(@Query() query: Record<string, any>) {
    return this.bookService.getAll(query);
  }

  @Get(':id')
  public getById(@Param('id') id: string) {
    return this.bookService.getById(id);
  }

  @UseGuards(AuthGuard)
  @Post()
  public create(@Body() dto: CreateBookDto) {
    return this.bookService.create(dto);
  }

  @UseGuards(AuthGuard)
  @Post(':id/like')
  public addToFav(@Param('id') id: string, @Req() req: Request & { session: any }) {
    return this.bookService.addToFav(id, req);
  }
}
