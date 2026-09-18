import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class UpdateUserDto {
  @IsNotEmpty({ message: 'Имя не должно быть пустым' })
  @IsString({ message: 'Имя должно быть строкой' })
  firstname!: string;

  @IsNotEmpty({ message: 'Фамилия не должна быть пустой' })
  @IsString({ message: 'Фамилия должна быть строкой' })
  lastname!: string;

  @IsString({ message: 'Описание должно быть строкой' })
  @IsOptional()
  bio?: string;

  @IsOptional()
  avatar?: string | null;
}
