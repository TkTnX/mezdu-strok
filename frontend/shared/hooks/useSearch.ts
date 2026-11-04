/* eslint-disable react-hooks/rules-of-hooks */
import { getStats, search } from '@/shared/api'
import { useQuery } from '@tanstack/react-query'

export function useSearch() {
	const useGetSearch = (value: string) =>
		useQuery({ queryKey: ['search', value], queryFn: () => search(value) })

	const useGetStats = () =>
		useQuery({ queryKey: ['stats'], queryFn: () => getStats() })
	return {
		useGetSearch,
		useGetStats
	}
}
