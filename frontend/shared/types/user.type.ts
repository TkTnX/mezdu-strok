import { IReview } from "."

export interface IUser {
    id: string,
    firstname: string
    lastname: string
    username: string
    bio?: string
    avatar?: string
    email: string
    password: string


    // favorites?: IFavorite[]
    reviews?: IReview[]
    // quotes?: IQuote[]
    createdAt: string
}