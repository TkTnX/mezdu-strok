'use client'
import { Button, cn, useBooks } from '@/shared'
import { useUserStore } from '@/shared/stores'
import { Bookmark, Loader2Icon } from 'lucide-react'
import { useEffect, useState } from 'react'

interface Props {
	id: string
	likes: { userId: string }[]
}
export const AddBookToFav = ({ id, likes }: Props) => {
	const { user } = useUserStore()
	const [count, setCount] = useState(likes.length)
	const [isFav, setIsFav] = useState(
		likes.some(like => like.userId === user?.id)
	)
	const { useAddBookToFav } = useBooks()
	const { mutate, isPending } = useAddBookToFav({
		onSuccess: () => {
			if (isFav) {
				setCount(prev => prev - 1)
				setIsFav(false)
			} else {
				setCount(prev => prev + 1)
				setIsFav(true)
			}
		}
	})

	useEffect(() => {
		// eslint-disable-next-line react-hooks/set-state-in-effect
		setIsFav(likes.some(like => like.userId === user?.id))
	}, [likes, user?.id])

	return (
		<Button
			onClick={() => mutate(id)}
			disabled={isPending}
			className={cn(
				'border-main text-main h-15 w-20 gap-1 hover:text-white disabled:pointer-events-none disabled:opacity-50',
				isFav && 'bg-main text-white'
			)}
			variant={'outline'}
		>
			{isPending ? (
				<Loader2Icon className='animate-spin' />
			) : (
				<Bookmark />
			)}
			<span className='font-bold'>{count}</span>
		</Button>
	)
}
