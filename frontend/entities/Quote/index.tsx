import { IQuote, QuoteDropdown } from '@/shared'
import { useUserStore } from '@/shared/stores'
import { BookIcon, LucideQuote, MoreHorizontal } from 'lucide-react'

interface Props {
	quote: IQuote
}

export const Quote = ({ quote }: Props) => {
	const {user} = useUserStore()
	return (
		<blockquote className='bg-accent-light/40 border-accent-light flex flex-col rounded-md border px-7 py-5'>
			<div className='flex items-center justify-between'>
				<LucideQuote size={32} className='text-main/30 rotate-180' />
				{quote.authorId === user?.id && (
					<QuoteDropdown quoteId={quote.id} />
				)}
			</div>
			<q className='font-cormorant mt-5 inline-block flex-1 text-2xl xl:text-4xl'>
				{quote.quote}
			</q>
			<div className='mt-5'>
				<p className='text-secondary'>{quote.book.author.name}</p>
				<p className='text-secondary/50'>{quote.book.title} </p>
			</div>
			<div className='mt-4 flex items-center justify-between gap-5'>
				<div className='text-main flex items-center gap-5'>
					<BookIcon />
					<p>{quote.book.genre.name}</p>
				</div>
				<p className='text-secondary flex flex-col items-end text-xs'>
					{quote.author?.firstname + ' ' + quote.author?.lastname}
					<span>@{quote.author.username}</span>
				</p>
			</div>
		</blockquote>
	)
}
