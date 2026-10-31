import { googleAuth, login, logout, register } from '@/shared/api'
import { ILogin, IRegister } from '@/shared/types'
import { useMutation, UseMutationOptions } from '@tanstack/react-query'

export function useAuth() {
	const useLoginMutation = (
		options?: Omit<
			UseMutationOptions<unknown, unknown, unknown>,
			'mutationFn'
		>
	) =>
		useMutation({
			mutationFn: (body: ILogin) => login(body),
			...options
		})
	
	
	const useRegisterMutation = (
		options?: Omit<
			UseMutationOptions<unknown, unknown, unknown>,
			'mutationFn'
		>
	) =>
		useMutation({
			mutationFn: (body: Omit<IRegister, 'passwordRepeat'>) => register(body),
			...options
		})

	const useLogoutMutation = (
		options?: Omit<
			UseMutationOptions<unknown, unknown, unknown>,
			'mutationFn'
		>
	) =>
		useMutation({
			mutationFn: () => logout(),
			...options
		})
	


	return {
		useLoginMutation,
		useRegisterMutation,
		useLogoutMutation,
	}
}
