import { IUser } from "."

export interface IReview {
	id: string
	bookId: string
	userId: string
	review: string
	rating: number
	createdAt: string
	title: string
	characters: number
	idea: number
	impression: number
	language: number
	story: number
	user?: IUser
	likes: { userId: string }[]
}

export interface ICreateReview {
    title: string
    review: string
    characters: number
    idea: number
    impression: number
    language: number
    story: number
    rating: number
    bookId: string
}