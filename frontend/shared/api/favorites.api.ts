import { axiosInstance } from "@/shared/lib"

export const getFavorites = async (table: string, userId?:string) => {
    const { data } = await axiosInstance.get(`favorites/${table}?${userId ? `userId=${userId}` : ''}`)
    
    return data
} 

export const setFavorites = async (table: string, id: string) => {
	const { data } = await axiosInstance.post(`favorites/${table}`, { id })

	return data
} 