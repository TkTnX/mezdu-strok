import { IsNotEmpty, IsString } from 'class-validator';

export class FavoriteDto {
  @IsNotEmpty({ message: 'ID не должно быть пустым' })
  @IsString({ message: 'ID должно быть строкой' })
  id!: string;
}
