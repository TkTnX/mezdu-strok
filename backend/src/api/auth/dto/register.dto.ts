import { IsEmail, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class RegisterDto {
  @IsString({ message: 'Имя должно быть строкой' })
  @IsOptional()
  firstname?: string;

  @IsString({ message: 'Фамилия должна быть строкой' })
  @IsOptional()
  lastname?: string;

  @IsNotEmpty({ message: 'Логин не должен быть пустым' })
  @IsString({ message: 'Логин должен быть строкой' })
    username!: string;
    
    @IsNotEmpty({ message: 'Почта не должна быть пустой' })
    @IsString({ message: 'Почта должна быть строкой' })
    @IsEmail({}, { message: 'Некорректная почта' })
    email!: string;

    @IsNotEmpty({ message: 'Пароль не должен быть пустой' })
    @IsString({ message: 'Пароль должен быть строкой' })
    password!: string
}
