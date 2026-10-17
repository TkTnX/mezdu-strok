import { Controller, Get, Query } from '@nestjs/common';
import { PublisherService } from './publisher.service';

@Controller('publishers')
export class PublisherController {
  constructor(private readonly publisherService: PublisherService) { }
  
    @Get()
    public getPublishers(@Query() query: Record<string, any>) {
      return this.publisherService.getPublishers(query);
    }
}
