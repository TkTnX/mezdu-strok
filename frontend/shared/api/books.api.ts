import { axiosInstance } from '@/shared/lib'
import { ICreateBook } from '@/shared/types'

export const getBooks = async ({ take, sort }: { take?: number; sort?: string }) => {
    const { data } = await axiosInstance.get(`books?take=${take}&sort=${sort}`)
    return data
}

export const getBookById = async (id: string) => {
    const { data } = await axiosInstance.get(`books/${id}`)
    return data
}

export const createBook = async (body: ICreateBook) => {
    const { data } = await axiosInstance.post('books', body)
    return data
}
