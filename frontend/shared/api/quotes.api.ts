import { axiosInstance } from '@/shared/lib'
import { ICreateQuote } from '@/shared/types'

export async function getQuotes(query: Record<string, unknown>) {
	const { data } = await axiosInstance.get('quotes', { params: query })
	return data
}

export async function createQuote(body: ICreateQuote) {
	const { data } = await axiosInstance.post('quotes', body)
	return data
}

export async function deleteQuote(id: string) {
	const { data } = await axiosInstance.delete(`quotes/${id}`)
	return data
}
