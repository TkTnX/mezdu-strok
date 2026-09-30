import { updateUser } from "@/shared/api";
import { useMutation, UseMutationOptions } from "@tanstack/react-query";

export function useUser() {
    const useUpdateUser = (options?: Omit<UseMutationOptions<unknown, unknown, unknown>, 'mutationFn'>) => useMutation({
        mutationFn: (data: FormData) => updateUser(data),
        ...options
    })

    return {
		useUpdateUser
	}
}