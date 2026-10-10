import { axiosInstance } from "@/shared/lib"

export async function getFilters() {
    const {data} = await axiosInstance.get('books/filters')
    return data
}