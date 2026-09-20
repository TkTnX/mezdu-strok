import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { FavoriteService } from './favorite.service';
import { Request } from 'express';
import { AuthGuard } from '@/src/guards';

@Controller('favorites')
export class FavoriteController {
  constructor(private readonly favoriteService: FavoriteService) {}

  @UseGuards(AuthGuard)
  @Get()
  async getAll(@Req() req: Request & { session: any }) {
    return this.favoriteService.getAll(req);
  }
}
