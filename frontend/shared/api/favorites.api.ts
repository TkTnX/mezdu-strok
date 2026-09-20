import { axiosInstance } from "@/shared/lib"

export const getFavorites = async () => {
    const { data } = await axiosInstance.get('favorites')
    
    return data
} 