import { Controller, Post } from '@nestjs/common';
import { CodeService } from './code.service';

@Controller('codes')
export class CodeController {
  constructor(private readonly codeService: CodeService) { }
  
  @Post('send-code')
  public sendCode() {
    return this.codeService.generateCode()
  }
}
