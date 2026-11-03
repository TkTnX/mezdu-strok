import { IsNotEmpty, IsString, MinLength } from 'class-validator';

export class EmailDto {
  @IsNotEmpty({ message: 'Почта не должна быть пустой' })
  @IsString({ message: 'Почта должна быть строкой' })
    to!: string
    

    @IsNotEmpty({ message: 'Тема сообщения не должна быть пустой' })
    @IsString({ message: 'Тема сообщения должна быть строкой' })
    subject!: string


}
