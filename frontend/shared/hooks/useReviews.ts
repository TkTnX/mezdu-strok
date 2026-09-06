import { createReview, getReviews } from '@/shared/api'
import { ICreateReview, IReview } from '@/shared/types'
import { useMutation, UseMutationOptions, useQuery } from '@tanstack/react-query'

export function useReviews() {
	const useCreateReview = (
		options?: UseMutationOptions<unknown, unknown, unknown>
	) =>
		useMutation({
			mutationFn: (body: ICreateReview) => createReview(body),
			...options
		})
	
	const useGetReviews = (query: Record<string, string>) =>
		useQuery({
			queryKey: ['reviews', query],
			queryFn: (): Promise<IReview[]> => getReviews(query)
		})

	return { useCreateReview, useGetReviews }
}
