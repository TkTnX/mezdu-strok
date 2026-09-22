import { getQuotes } from "@/shared/api";
import { IQuote } from "@/shared/types";
import { useQuery } from "@tanstack/react-query";

export function useQuotes() {
    const useGetQuotes = () => useQuery({
        queryKey: ['quotes'],
        queryFn: (): Promise<IQuote[]> => getQuotes()
    })

    return {
        useGetQuotes
    }
}