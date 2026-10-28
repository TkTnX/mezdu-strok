import { AuthorResolverType, BookResolverType } from '@/shared/resolvers'
import { create } from 'zustand'

interface AdminStore {
	openAddAuthor: boolean
	setOpenAddAuthor: (open: boolean) => void
	authorData: AuthorResolverType
	setAuthorData: (data: AuthorResolverType) => void

	openAddBook: boolean
	setOpenAddBook: (open: boolean) => void
	bookData: BookResolverType
	setBookData: (data: BookResolverType) => void
}

export const useAdminStore = create<AdminStore>((set) => ({
	openAddAuthor: false,
	setOpenAddAuthor: (open: boolean) => set(() => ({ openAddAuthor: open })),
	authorData: {
		name: '',
		avatar: undefined,
		bio: ''
	},
	setAuthorData: data => set(() => ({ authorData: data })),


	openAddBook: false,
	setOpenAddBook: (open: boolean) => set(() => ({ openAddBook: open })),
	bookData: {
		title: '',
		description: '',
		authorId: '',
		genreId: '',
		publisherId: '',
		pages: 0,
		year: 0,
		tags: '',
		preview: ''
	},
	setBookData: data => set(() => ({ bookData: data }))
}))
