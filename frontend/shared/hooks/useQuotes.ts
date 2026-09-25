import { createQuote, deleteQuote, getQuotes } from "@/shared/api";
import { ICreateQuote, IQuote } from "@/shared/types";
import { useMutation, useQuery } from "@tanstack/react-query";

export function useQuotes() {
    const useGetQuotes = (query: Record<string,unknown>) =>
		useQuery({
			queryKey: ['quotes', query],
			queryFn: (): Promise<IQuote[]> => getQuotes(query)
		})

    const useCreateQuote = () => useMutation({
        mutationFn: (data: ICreateQuote) => createQuote(data)
    })

    const useDeleteQuote = () => useMutation({
        mutationFn: (id: string) => deleteQuote(id)
    })

    return {
        useGetQuotes,
        useCreateQuote,
        useDeleteQuote
    }
}