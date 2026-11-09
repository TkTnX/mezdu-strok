import { Module } from '@nestjs/common';
import { CodeService } from './code.service';
import { CodeController } from './code.controller';
import { PrismaService } from '../../../src/prisma/prisma.service';

@Module({
  controllers: [CodeController],
  providers: [CodeService, PrismaService],
})
export class CodeModule {}
