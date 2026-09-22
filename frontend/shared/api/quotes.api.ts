import { axiosInstance } from "@/shared/lib"

export async function getQuotes() {
    const { data } = await axiosInstance.get('quotes')
    return data
}