import { IsNotEmpty, IsString, MinLength } from 'class-validator';

export class LoginDto {
  @IsNotEmpty({ message: 'Почта или логин не должны быть пустыми' })
  @IsString({ message: 'Почта или логин должны быть строкой' })
  emailOrUsername!: string;

  @IsNotEmpty({ message: 'Пароль не должен быть пустой' })
  @IsString({ message: 'Пароль должен быть строкой' })
  @MinLength(8, { message: 'Пароль должен быть не менее 8 символов' })
  password!: string;
}
