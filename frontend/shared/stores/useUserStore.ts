import { IUser } from '@/shared/types'
import { create } from 'zustand'

interface UserStore {
    user: IUser | null
    isPending: boolean
    setUser: (user: IUser) => void
    setIsPending: (isPending: boolean) => void
}

export const useUserStore = create<UserStore>(set => ({
    user: null,
    setUser: (user: IUser) => set(() => ({ user })),
    isPending: false,
    setIsPending: (isPending: boolean) => set(() => ({ isPending }))
}))

