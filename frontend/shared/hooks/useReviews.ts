import { createReview, getReviews, likeReview } from '@/shared/api'
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
	
	const useLikeReview = (
		options?: UseMutationOptions<unknown, unknown, unknown>
	) =>
		useMutation({
			mutationFn: (id: string) => likeReview(id),
			...options
		})
	
	const useGetReviews = (query: Record<string, unknown>) =>
		useQuery({
			queryKey: ['reviews', query],
			queryFn: (): Promise<IReview[]> => getReviews(query)
		})

	return { useCreateReview, useGetReviews, useLikeReview }
}
