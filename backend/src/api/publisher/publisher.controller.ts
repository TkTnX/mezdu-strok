import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { PublisherService } from './publisher.service';
import { CreatePublisherDto } from './dto/create-publisher.dto';

@Controller('publishers')
export class PublisherController {
  constructor(private readonly publisherService: PublisherService) {}

  @Get()
  public getPublishers(@Query() query: Record<string, any>) {
    return this.publisherService.getPublishers(query);
  }

  @Post()
  public create(@Body() dto: CreatePublisherDto) {
    return this.publisherService.create(dto);
  }
}
