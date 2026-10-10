import { getFilters } from "@/shared/api";
import { IFilters } from "@/shared/types";
import { useQuery } from "@tanstack/react-query";

export function useFilters() {
    const useGetFilters = () => useQuery({
        queryKey: ['filters'],
        queryFn: (): Promise<IFilters> => getFilters()
    })

    return {
        useGetFilters
    }
}