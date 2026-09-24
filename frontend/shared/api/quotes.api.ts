import { axiosInstance } from "@/shared/lib"
import { ICreateQuote } from "@/shared/types"

export async function getQuotes() {
    const { data } = await axiosInstance.get('quotes')
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