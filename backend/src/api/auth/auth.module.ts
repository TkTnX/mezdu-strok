import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { PrismaService } from '@/src/prisma/prisma.service';
import { GoogleStrategy } from '@/src/strategies/google.strategy';

@Module({
  controllers: [AuthController],
  providers: [AuthService, PrismaService, GoogleStrategy],
})
export class AuthModule {}
