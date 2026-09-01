import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { BookService } from './book.service';
import { CreateBookDto } from './dto/create.dto';

@Controller('books')
export class BookController {
  public constructor(private readonly bookService: BookService) { }
  
  @Get()
  public getAll(@Query() query: Record<string, any>) {
    return this.bookService.getAll(query); 
  }

  @Get(':id')
  public getById(@Param('id') id: string) {
    return this.bookService.getById(id);
  }

  @Post()
  public create(@Body() dto: CreateBookDto) {
    return this.bookService.create(dto)
  }
}
