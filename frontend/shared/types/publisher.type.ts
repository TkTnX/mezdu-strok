import { IBook } from "."

export interface IPublisher {
    id: string
    name: string
    books: IBook[]
    createdAt: string
}

export interface ICreatePublisher {
    name: string
}