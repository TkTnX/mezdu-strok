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
    role: ERole


    // favorites?: IFavorite[]
    reviews?: IReview[]
    // quotes?: IQuote[]
    _count: {
        reviews: number
        favorites: number
    }
    createdAt: string
}

export interface ILogin {
    emailOrUsername: string
    password: string
}

export interface IRegister {
    username: string
    email: string
    password: string
    passwordRepeat: string
}

export enum ERole {
    USER = 'USER',
    ADMIN = 'ADMIN'
}