import { Body, Controller, Get, Param, Post, Query, Req } from '@nestjs/common';
import { ReviewService } from './review.service';
import { CreateReviewDto } from './dto/create.dto';

@Controller('reviews')
export class ReviewController {
  constructor(private readonly reviewService: ReviewService) {}

  @Post()
  create(@Body() dto: CreateReviewDto, @Req() req: Request & { session: any }) {
    return this.reviewService.create(dto, req);
  }

  @Post(':id/like')
  like(@Param('id') id: string, @Req() req: Request & { session: any }) {
    return this.reviewService.like(id, req);
  }

  @Get()
  get(@Query() query: Record<string, any>) {
    return this.reviewService.get(query);
  }
}
