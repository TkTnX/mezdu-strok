import { getFavorites, setFavorites } from '@/shared/api'
import { IFavorite } from '@/shared/types'
import { useMutation, UseMutationOptions, useQuery } from '@tanstack/react-query'

export function useFavorites() {
	const useGetFavorites = (table: string, userId?:string) =>
		useQuery({
			queryKey: ['favorites', table],
			queryFn: (): Promise<IFavorite[]> => getFavorites(table, userId)
        })
    
    const useSetFavorites = (table: string, id: string, options?: Omit<UseMutationOptions<unknown | unknown | unknown>, 'mutationFn'>) => useMutation({
        mutationFn: () => setFavorites(table, id),
        ...options
    })

	return {
        useGetFavorites,
        useSetFavorites
	}
}
