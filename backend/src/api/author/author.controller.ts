import { Body, Controller, Get, Post, Query, UploadedFile, UseGuards, UseInterceptors } from '@nestjs/common';
import { AuthorService } from './author.service';
import { AuthGuard } from '@/src/guards';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';
import { CreateAuthorDto } from './dto/create-author.dto';

@Controller('authors')
export class AuthorController {
  constructor(private readonly authorService: AuthorService) { }
  
  @Get()
  public getAuthors(@Query() query: Record<string, any>) {
    return this.authorService.getAuthors(query)
  }

    @UseGuards(AuthGuard)
  @Post()
  @UseInterceptors(
          FileInterceptor('avatar', {
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
    public create(@Body() dto: CreateAuthorDto, @UploadedFile() file: Express.Multer.File) {
      return this.authorService.create(dto, file);
    }
}
