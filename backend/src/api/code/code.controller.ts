import { Body, Controller, Post } from '@nestjs/common';
import { CodeService } from './code.service';
import { EmailDto } from '@/src/api/code/dto';

@Controller('codes')
export class CodeController {
  constructor(private readonly codeService: CodeService) {}

  @Post('send-code')
  public sendCode(@Body() dto: EmailDto) {
    return this.codeService.sendCode(dto);
  }
}
