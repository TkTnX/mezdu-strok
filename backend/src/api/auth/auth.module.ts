import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { PrismaService } from '../../../src/prisma/prisma.service';
import { GoogleStrategy } from '../../../src/strategies/google.strategy';
import { CodeService } from '../../../src/api/code/code.service';

@Module({
  controllers: [AuthController],
  providers: [AuthService, PrismaService, GoogleStrategy, CodeService],
})
export class AuthModule {}
