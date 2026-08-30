import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { BookService } from './book.service';
import { CreateBookDto } from './dto/create.dto';

@Controller('books')
export class BookController {
  public constructor(private readonly bookService: BookService) { }
  
  @Get()
  public getAll() {
    return this.bookService.getAll(); 
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
