import { Controller, Get, Param, Req } from '@nestjs/common';
import { UserService } from './user.service';
import { Request } from 'express';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) { }
  
  @Get('me')
  async getMe(@Req() req: Request & { session: any }) {
    return this.userService.getById(req.session.user.id);
    } 

  @Get(':id')
  async getById(@Param('id') id: string) {
    return this.userService.getById(id);
  }
}
