import { IUser } from '@/shared/types'
import { create } from 'zustand'

interface UserStore {
    user: IUser | null
    isPending: boolean
    setUser: (user: IUser | null) => void
    setIsPending: (isPending: boolean) => void
}

export const useUserStore = create<UserStore>(set => ({
    user: null,
    setUser: (user) => set(() => ({ user })),
    isPending: true,
    setIsPending: (isPending) => set(() => ({ isPending }))
}))

