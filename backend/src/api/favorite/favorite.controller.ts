import { Body, Controller, Get, Param, Post, Req, UseGuards } from '@nestjs/common';
import { FavoriteService } from './favorite.service';
import { Request } from 'express';
import { AuthGuard } from '@/src/guards';
import { FavoriteDto } from '@/src/api/favorite/dto';

@Controller('favorites')
export class FavoriteController {
  constructor(private readonly favoriteService: FavoriteService) {}

  @UseGuards(AuthGuard)
  @Get(':table')
  async getAll(
    @Param('table') table: string,
    @Req() req: Request & { session: any },
  ) {
    return this.favoriteService.getAll(req, table);
  }

  @UseGuards(AuthGuard)
  @Post(':table')
  async setFav(
    @Param('table') table: string,
    @Body() dto: FavoriteDto,
    @Req() req: Request & { session: any },
  ) {
    return this.favoriteService.setFav(table, dto.id, req);
  }
}
