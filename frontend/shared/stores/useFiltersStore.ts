import { create } from 'zustand'

interface FiltersStore {
	filters: {
		author: string | null
		genre: string | null
		publisher: string | null
		rating: string | null
	}
	setFilters: (filters: {
		author: string | null
		genre: string | null
		publisher: string | null
        rating: string | null
	}) => void
}

export const useFiltersStore = create<FiltersStore>(set => ({
    filters: {
        author: null,
        genre: null,
        publisher: null,
        rating: null
    },
    setFilters: filters => set(() => ({ filters }))
}))
