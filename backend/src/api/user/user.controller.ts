import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Req,
  UploadedFile,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { UserService } from './user.service';
import { Request } from 'express';
import { UpdateUserDto } from './dto';
import { AuthGuard } from '@/src/guards';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('me')
  async getMe(@Req() req: Request & { session: any }) {
    return this.userService.getMe(req);
  }

  @Get(':id')
  async getById(@Param('id') id: string) {
    return this.userService.getById(id);
  }

  @UseGuards(AuthGuard)
  @Patch('me')
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
  async update(
    @Req() req: Request & { session: any },
    @Body() dto: UpdateUserDto,
    @UploadedFile()
    file: Express.Multer.File,
  ) {
    return this.userService.update(req, dto, file);
  }
}
