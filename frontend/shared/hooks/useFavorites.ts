import { getFavorites } from "@/shared/api";
import { IFavorite } from "@/shared/types";
import { useQuery } from "@tanstack/react-query";

export function useFavorites() {
    const useGetFavorites = () => useQuery({
        queryKey: ['favorites'],
        queryFn: (): Promise<IFavorite[]> => getFavorites()
    })

    return {
        useGetFavorites
    }
}