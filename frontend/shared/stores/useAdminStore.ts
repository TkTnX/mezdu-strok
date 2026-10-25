import { BookResolverType } from '@/shared/resolvers'
import { create } from 'zustand'

interface AdminStore {
	openAddBook: boolean
	setOpenAddBook: (open: boolean) => void
	bookData: BookResolverType
	setBookData: (data: BookResolverType) => void
}

export const useAdminStore = create<AdminStore>((set, get) => ({
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
		tags: [],
		preview: ''
	},
	setBookData: data => set(() => ({ bookData: data }))
}))
