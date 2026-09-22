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