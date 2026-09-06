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
    reviews?: IReview[]
    _count: {
        reviews: number
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