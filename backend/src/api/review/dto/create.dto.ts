import { IsInt, IsNotEmpty, IsString, MaxLength, MinLength } from 'class-validator';

export class CreateReviewDto {
  @IsNotEmpty({ message: 'Заголовок не должен быть пустым' })
  @IsString({ message: 'Заголовок должен быть строкой' })
  @MaxLength(100, { message: 'Заголовок не должен быть длиннее 100 символов' })
  title!: string;

  @IsNotEmpty({ message: 'Текст не должен быть пустым' })
  @IsString({ message: 'Текст должен быть строкой' })
  @MaxLength(8500, { message: 'Текст не должен быть длиннее 8500 символов' })
  @MinLength(300, { message: 'Текст не должен быть короче 300 символов' })
  review!: string;

  @IsNotEmpty({ message: 'Оценка не должна быть пустой' })
  @IsInt({ message: 'Оценка должна быть числом' })
  characters!: number;

  @IsNotEmpty({ message: 'Оценка не должна быть пустой' })
  @IsInt({ message: 'Оценка должна быть числом' })
  idea!: number;

  @IsNotEmpty({ message: 'Оценка не должна быть пустой' })
  @IsInt({ message: 'Оценка должна быть числом' })
  impression!: number;

  @IsNotEmpty({ message: 'Оценка не должна быть пустой' })
  @IsInt({ message: 'Оценка должна быть числом' })
  language!: number;

  @IsNotEmpty({ message: 'Оценка не должна быть пустой' })
  @IsInt({ message: 'Оценка должна быть числом' })
    story!: number;
    
    @IsNotEmpty({ message: 'Рейтинг не должен быть пустой' })
    @IsInt({ message: 'Рейтинг должен быть числом' })
    rating!: number

    @IsNotEmpty({ message: 'Книга не должна быть пустой' })
    @IsString({ message: 'Книга должна быть строкой' })
    bookId!: string
}
