import { IAuthor, IBook, IUser } from "."

export interface IFavorite {
    id: string,
    bookId?: string
    book?: IBook
    userId: string
    user: IUser
    author?: IAuthor
    authorId?: string
    createdAt: string

}