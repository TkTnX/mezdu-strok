import { IBook } from "."

export interface IAuthor {
	id: string
	name: string
	avatar: string
	bio: string

	favorites: { userId: string }[]
	books: IBook[]
	createdAt: string
}

export interface ICreateAuthor {
    name: string
    avatar: string
    bio: string
}