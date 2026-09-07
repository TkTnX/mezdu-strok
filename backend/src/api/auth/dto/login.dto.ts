import { IsNotEmpty, IsString } from "class-validator"

export class LoginDto {
    @IsNotEmpty({ message: 'Почта не должна быть пустой' })
    @IsString({ message: 'Почта должна быть строкой' })
    email!: string

    @IsNotEmpty({ message: 'Пароль не должен быть пустой' })
    @IsString({ message: 'Пароль должен быть строкой' })
    password!: string
}