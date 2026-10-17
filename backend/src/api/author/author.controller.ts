import { Controller, Get, Query } from '@nestjs/common';
import { AuthorService } from './author.service';

@Controller('authors')
export class AuthorController {
  constructor(private readonly authorService: AuthorService) { }
  
  @Get()
  public getAuthors(@Query() query: Record<string, any>) {
    return this.authorService.getAuthors(query)
  }
}
