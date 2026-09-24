import { Button, useQuotes } from '@/shared'
import { useQueryClient } from '@tanstack/react-query'
import { toast } from 'react-toastify'

export const DeleteQuoteButton = ({ quoteId }: { quoteId: string }) => {
	const queryClient = useQueryClient()
	const { useDeleteQuote } = useQuotes()
	const { mutate, isPending } = useDeleteQuote()

	const onClick = () =>
		mutate(quoteId, {
			onSuccess: () => {
				toast.success('Цитата успешно удалена!')
				queryClient.invalidateQueries({ queryKey: ['quotes'] })
			}
		})

	return (
		<Button
			className={'w-full bg-red-500'}
			onClick={onClick}
			disabled={isPending}
		>
			Удалить цитату
		</Button>
	)
}
