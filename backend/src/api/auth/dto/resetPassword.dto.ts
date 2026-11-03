import { IsNotEmpty, IsString, Length, MinLength } from 'class-validator';

export class ResetPasswordDto {
  @IsNotEmpty({ message: 'Код не должен быть пустым' })
  @IsString({ message: 'Код должен быть строкой' })
  @Length(6, 6, { message: 'Длина кода должна быть 6 символов' })
  code!: string;

  @IsNotEmpty({ message: 'Почта не должна быть пустой' })
  @IsString({ message: 'Почта должна быть строкой' })
  email!: string;

  @IsNotEmpty({ message: 'Пароль не должен быть пустой' })
  @IsString({ message: 'Пароль должен быть строкой' })
  @MinLength(8, { message: 'Пароль должен быть не менее 8 символов' })
  newPassword!: string;
}
