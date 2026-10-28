import { IsNotEmpty, IsOptional, IsString, MaxLength } from 'class-validator';

export class CreateAuthorDto {
  @IsNotEmpty({ message: 'Название книги не должно быть пустым' })
  @IsString({ message: 'Название книги должно быть строкой' })
  name!: string;

  @IsOptional()
  @IsString({ message: 'Описание должно быть строкой' })
  @MaxLength(1000, { message: 'Описание не должно быть длиннее 1000 символов' })
  bio!: string;

  @IsString({ message: 'Изображение должно быть строкой' })
  avatar?: string;
}
