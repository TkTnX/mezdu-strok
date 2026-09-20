import { IBook, IUser } from "."

export interface IFavorite {
    id: string,
    bookId: string
    book: IBook
    userId: string
    user: IUser
    createdAt: string
}