import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Req,
  UseGuards,
} from '@nestjs/common';
import { UserService } from './user.service';
import { Request } from 'express';
import { UpdateUserDto } from './dto';
import { AuthGuard } from '@/src/guards';

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
  async update(
    @Req() req: Request & { session: any },
    @Body() dto: UpdateUserDto,
  ) {
    return this.userService.update(req, dto);
  }
}
