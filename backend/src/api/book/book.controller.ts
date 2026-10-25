import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Query,
  Req,
  UploadedFile,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { BookService } from './book.service';
import { CreateBookDto } from './dto/create.dto';
import { AuthGuard } from '@/src/guards';
import { Request } from 'express';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';

@Controller('books')
export class BookController {
  public constructor(private readonly bookService: BookService) {}

  @Get()
  public getAll(@Query() query: Record<string, any>) {
    return this.bookService.getAll(query);
  }

  @Get('filters')
  public getFilters() {
    return this.bookService.getFilters();
    }

  @Get(':id')
  public getById(@Param('id') id: string) {
    return this.bookService.getById(id);
  }

  @UseGuards(AuthGuard)
  @Post()
    @UseInterceptors(
        FileInterceptor('preview', {
          storage: diskStorage({
            destination: './upload',
            filename: (req, file, cb) => {
              const uniqueName =
                `${Date.now()}-${Math.round(Math.random() * 1e9)}` +
                extname(file.originalname);
    
              cb(null, uniqueName);
            },
          }),
        }),
      )
  public create(@Body() dto: CreateBookDto, @UploadedFile() file: Express.Multer.File) {
    return this.bookService.create(dto, file);
  }

  @UseGuards(AuthGuard)
  @Post(':id/like')
  public addToFav(@Param('id') id: string, @Req() req: Request & { session: any }) {
    return this.bookService.addToFav(id, req);
  }
}
