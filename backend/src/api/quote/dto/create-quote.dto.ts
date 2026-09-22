import { IsNotEmpty, IsString } from "class-validator";

export class CreateQuoteDto {
    @IsNotEmpty({ message: 'Цитата не должна быть пустой' })
    @IsString({ message: 'Цитата должна быть строкой' })
    quote!: string

    @IsNotEmpty({ message: 'Книга не должна быть пустой' })
    @IsString({ message: 'Книга должна быть строкой' })
    bookId!: string
}