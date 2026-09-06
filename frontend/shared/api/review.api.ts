import { axiosInstance } from '@/shared/lib'
import { ICreateReview } from '@/shared/types'

export async function createReview(body: ICreateReview) {
	const { data } = await axiosInstance.post('reviews', body)

	return data
}

export async function getReviews(query: Record<string, string>) {
    const { data } = await axiosInstance.get(`reviews`, {
        params: query
    })

	return data
}
