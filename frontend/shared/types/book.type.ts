import { IAuthor, IGenre, IPublisher, IReview } from '.'

export interface IBook {
    id: string
    title: string
    description?: string
    year: number
    preview?: string
    tags: string[]
    pages: number
    authorId: string
    author: IAuthor
    genreId: string
    genre: IGenre
    publisherId: string
    publisher: IPublisher
    createdAt: string
    rating?: number
    story: number
    characters: number
    idea: number
    impression: number
    language: number
    reviews?: IReview[]
    favorites: { userId: string }[]
    _count: {
        reviews: number
        favorites: number
    }
}

export interface ICreateBook {
    title: string
    description?: string
    year: number
    preview?: string
    tags: string[]
    pages: number
    authorId: string
    genreId: string
    publisherId: string
}