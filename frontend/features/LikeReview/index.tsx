import { cn, useReviews } from '@/shared'
import { useUserStore } from '@/shared/stores'
import { useQueryClient } from '@tanstack/react-query'
import { HeartHandshakeIcon, Loader2 } from 'lucide-react'
import { toast } from 'react-toastify'

interface Props {
	id: string
	likes: { userId: string }[]
}

export const LikeReview = ({ id, likes }: Props) => {
	const { user } = useUserStore()
	const { useLikeReview } = useReviews()
	const queryClient = useQueryClient()
	const { mutate, isPending } = useLikeReview({
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ['reviews', {}] })
			toast.success('Рецензия успешно оценена')
		}
	})
	return (
		<button
			disabled={isPending}
			onClick={() => mutate(id)}
			className={cn(
				'border-main bg-main/30 mt-3 flex items-center gap-2 rounded-full border px-4 py-2 text-white disabled:pointer-events-none disabled:opacity-50',
				{
					'bg-main': likes.some(like => like.userId === user?.id)
				}
			)}
		>
			{isPending ? (
				<Loader2 className='animate-spin' />
			) : (
				<>
					<HeartHandshakeIcon />
					{likes.length}
				</>
			)}
		</button>
	)
}
