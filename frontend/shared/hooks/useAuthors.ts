import { getAuthors } from "@/shared/api";
import { useQuery } from "@tanstack/react-query";

export function useAuthors() {
    const useGetAuthors = ({ take }: { take: number }) =>
		useQuery({
			queryKey: ['authors'],
			queryFn: () => getAuthors({take})
		})

    return {
        useGetAuthors
    }
}