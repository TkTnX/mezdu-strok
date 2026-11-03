import { sendCodeToEmail } from '@/shared/api'
import { useMutation, UseMutationOptions } from '@tanstack/react-query'

export function useCodes() {
	const useSendCodeToEmail = (
		options?: Omit<
			UseMutationOptions<unknown, unknown, unknown>,
			'mutationFn'
		>
	) =>
		useMutation({
			mutationFn: (email: string) => sendCodeToEmail(email),
			...options
		})

	return {
		useSendCodeToEmail
	}
}
