import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Query,
  Req,
  UseGuards,
} from '@nestjs/common';
import { ReviewService } from './review.service';
import { CreateReviewDto } from './dto/create.dto';
import { AuthGuard, RolesGuard } from '@/src/guards';
import { Roles } from '@/src/decorators';
import { ERole } from '@/src/generated/prisma/enums';
@Controller('reviews')
export class ReviewController {
  constructor(private readonly reviewService: ReviewService) {}

  @UseGuards(AuthGuard)
  @Post()
  create(@Body() dto: CreateReviewDto, @Req() req: Request & { session: any }) {
    return this.reviewService.create(dto, req);
  }

  @UseGuards(AuthGuard)
  @Post(':id/like')
  like(@Param('id') id: string, @Req() req: Request & { session: any }) {
    return this.reviewService.like(id, req);
  }

  @Get()
  get(@Query() query: Record<string, any>) {
    return this.reviewService.get(query);
  }

  @UseGuards(AuthGuard, RolesGuard)
  @Roles(ERole.ADMIN)
  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.reviewService.delete(id);
  }
}
