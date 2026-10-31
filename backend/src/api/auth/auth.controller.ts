import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  Req,
  Request,
  Res,
  UseGuards,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto, RegisterDto } from '@/src/api/auth/dto';
import { Request as RequestType, Response } from 'express';
import { AuthGuard } from '@nestjs/passport';
import { ConfigService } from '@nestjs/config';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService, private readonly configService: ConfigService) {}

  @HttpCode(HttpStatus.CREATED)
  @Post('register')
  register(@Body() dto: RegisterDto, @Request() req: RequestType) {
    return this.authService.register(dto, req);
  }

  @HttpCode(HttpStatus.OK)
  @Post('login')
  login(@Body() dto: LoginDto, @Request() req: RequestType) {
    return this.authService.login(dto, req);
  }

  @Post('logout')
  logout(@Request() req: RequestType) {
    return this.authService.logout(req);
  }

  @Get('google')
  @UseGuards(AuthGuard('google'))
  async googleAuth() {}

  @Get('google/redirect')
  @UseGuards(AuthGuard('google'))
  async googleAuthRedirect(@Req() req: RequestType & { user: any, session: any }, @Res() res: Response) {
    const user = await this.authService.googleLogin(req.user);

    req.session.user = {
      id: user.id,
      username: user.username,
      email: user.email,
      role: user.role,
    };

    req.session.save((err: any) => {
      if (err) {
        console.log(err);
      }
    });

    res.redirect(this.configService.getOrThrow('CLIENT_URL'));
  }
}
