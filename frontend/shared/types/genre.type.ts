import { IBook } from "."

export interface IGenre {
    id: string
    name: string
    books: IBook[]
    createdAt: string
}

export interface ICreateGenre {
    name: string
}