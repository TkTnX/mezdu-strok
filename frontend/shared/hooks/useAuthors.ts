import { createAuthor, getAuthors } from "@/shared/api";
import { IAuthor } from "@/shared/types";
import { useMutation, useQuery } from "@tanstack/react-query";

export function useAuthors() {
    const useGetAuthors = ({ take }: { take: number }) =>
		useQuery({
			queryKey: ['authors'],
			queryFn: () => getAuthors({take})
		})

    	const useCreateAuthor = () =>
			useMutation({
				mutationFn: (formData: FormData): Promise<IAuthor> =>
					createAuthor(formData)
			})
    
    return {
        useGetAuthors,
        useCreateAuthor
    }
}