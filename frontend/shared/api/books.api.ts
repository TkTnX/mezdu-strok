import { axiosInstance } from '@/shared/lib'
import { ICreateBook } from '@/shared/types'

export const getBooks = async () => {
    const { data } = await axiosInstance.get('books')
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
