'use client'
import { Quote } from '@/entities'
import { ErrorMessage, Skeleton, useQuotes } from '@/shared'

export const Quotes = () => {
	const { useGetQuotes } = useQuotes()
	const { data, isPending, error } = useGetQuotes()

	if (error) return <ErrorMessage error={error} />

	return (
		<div className='mt-10 grid grid-cols-3 gap-5'>
	
			{isPending ? (
				[...new Array(5)].map((_, index) => (
					<Skeleton className='h-100 w-full' key={index} />
				))
			) : data.length > 0 ? (
				data.map(quote => <Quote quote={quote} key={quote.id} />)
			) : (
				<p className='text-secondary col-span-3 text-center text-3xl font-bold'>
					Цитат нет!
				</p>
			)}
		</div>
	)
}
