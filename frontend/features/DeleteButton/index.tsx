import { axiosInstance, Button, cn } from '@/shared'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { Loader2, X } from 'lucide-react'
import { toast } from 'react-toastify'

interface Props {
	id: string
	table: 'reviews' | 'books' | 'authors' | 'publishers'
	className?:string
}

export const DeleteButton = ({ id, table, className }: Props) => {
	const queryClient = useQueryClient()
	const { mutate, isPending } = useMutation({
		mutationFn: () => axiosInstance.delete(`/${table}/${id}`),
		onSuccess: () => {
			toast.success('Успешное удаление!')
			queryClient.invalidateQueries({ queryKey: [table, {}] })
		},
		onError: err => {
			console.log(err)
			toast.error('Ошибка при удалении!')
		}
	})
	return (
		<Button
			disabled={isPending}
			onClick={() => mutate()}
			className={cn(
				'absolute right-2 bottom-2 disabled:pointer-events-none disabled:opacity-50', className
			)}
		>
			{isPending ? <Loader2 className='animate-spin' /> : <X />}
		</Button>
	)
}
