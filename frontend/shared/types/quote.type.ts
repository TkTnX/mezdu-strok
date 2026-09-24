import { IBook, IUser } from "."

export interface IQuote {
    id: string
    quote: string
    bookId: string
    book: IBook
    authorId: string
    author: IUser
    createdAt: string
}

export interface ICreateQuote {
    quote: string
    bookId: string

}