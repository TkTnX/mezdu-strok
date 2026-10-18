
import { create } from 'zustand'

interface AdminStore {
    openAddBook: boolean
    setOpenAddBook: (open: boolean) => void
}

export const useAdminStore = create<AdminStore>(set => ({
    openAddBook: false,
    setOpenAddBook: (open: boolean) => set(() => ({ openAddBook: open }))
}))

