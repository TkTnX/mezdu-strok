import {
  IsArray,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  MaxLength,
  Min,
  MinLength,
} from 'class-validator';

export class CreatePublisherDto {
  @IsNotEmpty({ message: 'Название книги не должно быть пустым' })
  @IsString({ message: 'Название книги должно быть строкой' })
  @MinLength(4, { message: 'Минимальная длина названия - 4 символа' })
  title!: string;
}
