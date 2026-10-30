import { Body, Controller, Delete, Get, Param, Post, Query, UseGuards } from '@nestjs/common';
import { PublisherService } from './publisher.service';
import { CreatePublisherDto } from './dto/create-publisher.dto';
import { Roles } from '@/src/decorators';
import { ERole } from '@/src/generated/prisma/enums';
import { AuthGuard, RolesGuard } from '@/src/guards';

@Controller('publishers')
export class PublisherController {
  constructor(private readonly publisherService: PublisherService) {}

  @Get()
  public getPublishers(@Query() query: Record<string, any>) {
    return this.publisherService.getPublishers(query);
  }

  @UseGuards(AuthGuard, RolesGuard)
  @Roles(ERole.ADMIN)
  @Post()
  public create(@Body() dto: CreatePublisherDto) {
    return this.publisherService.create(dto);
  }

  @UseGuards(AuthGuard, RolesGuard)
  @Roles(ERole.ADMIN)
  @Delete(':id')
  public delete(@Param('id') id: string) {
    return this.publisherService.delete(id);
  }
}
