import {
  IsArray,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  MaxLength,
} from 'class-validator';

export class CreateBookDto {
  @IsNotEmpty({ message: 'Название книги не должно быть пустым' })
  @IsString({ message: 'Название книги должно быть строкой' })
  title!: string;

  @IsOptional()
  @IsString({ message: 'Описание должно быть строкой' })
  @MaxLength(1000, { message: 'Описание не должно быть длиннее 1000 символов' })
  description?: string;

  @IsNotEmpty({ message: 'Год не должен быть пустым' })
  @IsNumber({}, { message: 'Год должен быть числом' })
  year!: number;

  @IsString({ message: 'Изображение должно быть строкой' })
  preview?: string;

  @IsNotEmpty({ message: 'Теги не должны быть пустыми' })
  @IsArray({ message: 'Теги должны быть массивом' })
  @IsString({ each: true, message: 'Каждый тег должен быть строкой' })
  tags!: string[];

  @IsNotEmpty({ message: 'Количество страниц не должно быть пустым' })
  @IsNumber({}, { message: 'Количество страниц должно быть числом' })
  pages!: number;

  @IsNotEmpty({ message: 'Автор не должен быть пустым' })
  @IsString({ message: 'Автор должен быть строкой' })
  authorId!: string;

  @IsNotEmpty({ message: 'Жанр не должен быть пустым' })
  @IsString({ message: 'Жанр должен быть строкой' })
  genreId!: string;

  @IsNotEmpty({ message: 'Издательство не должно быть пустым' })
  @IsString({ message: 'Издательство должно быть строкой' })
  publisherId!: string;
}
