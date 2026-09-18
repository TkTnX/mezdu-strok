import { updateUser } from "@/shared/api";
import { UpdateUserType } from "@/shared/resolvers";
import { useMutation, UseMutationOptions } from "@tanstack/react-query";

export function useUser() {
    const useUpdateUser = (options?: Omit<UseMutationOptions<unknown, unknown, unknown>, 'mutationFn'>) => useMutation({
        mutationFn: (data: UpdateUserType) => updateUser(data),
        ...options
    })

    return {
		useUpdateUser
	}
}