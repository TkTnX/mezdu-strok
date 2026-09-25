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
import { QuoteService } from './quote.service';
import { CreateQuoteDto } from './dto';
import { Request } from 'express';
import { AuthGuard } from '@/src/guards';

@Controller('quotes')
export class QuoteController {
  constructor(private readonly quoteService: QuoteService) {}

  @Get()
  getAll(@Query() query: Record<string, any>) {
    return this.quoteService.getAll(query);
  }

  @UseGuards(AuthGuard)
  @Delete(':id')
  delete(@Param('id') id: string, @Req() req: Request & { session: any }) {
    return this.quoteService.delete(id, req);
  }

  @UseGuards(AuthGuard)
  @Post()
  create(@Body() dto: CreateQuoteDto, @Req() req: Request & { session: any }) {
    return this.quoteService.create(dto, req);
  }
}
