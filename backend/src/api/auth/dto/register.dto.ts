import {
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  MinLength,
} from 'class-validator';

export class RegisterDto {
  @IsString({ message: 'Имя должно быть строкой' })
  @IsOptional()
  firstname?: string;

  @IsString({ message: 'Фамилия должна быть строкой' })
  @IsOptional()
  lastname?: string;

  @IsNotEmpty({ message: 'Логин не должен быть пустым' })
  @IsString({ message: 'Логин должен быть строкой' })
  @MinLength(3, { message: 'Логин должен быть не менее 3 символов' })
  username!: string;

  @IsNotEmpty({ message: 'Почта не должна быть пустой' })
  @IsString({ message: 'Почта должна быть строкой' })
  @IsEmail({}, { message: 'Некорректная почта' })
  email!: string;

  @IsNotEmpty({ message: 'Пароль не должен быть пустой' })
  @IsString({ message: 'Пароль должен быть строкой' })
  @MinLength(8, { message: 'Пароль должен быть не менее 8 символов' })
  password!: string;
}
