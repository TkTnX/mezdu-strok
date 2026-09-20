import { axiosInstance } from '@/shared/lib'
import { ICreateReview } from '@/shared/types'

export async function createReview(body: ICreateReview) {
	const { data } = await axiosInstance.post('reviews', body)

	return data
}

export async function likeReview(id: string) {
	const { data } = await axiosInstance.post(`reviews/${id}/like`)
	return data
}

export async function getReviews(query: Record<string, unknown>) {
	const { data } = await axiosInstance.get(`reviews`, {
		params: query
	})

	return data
}
