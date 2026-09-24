'use client'
import { ErrorMessage, Input, Skeleton } from '@/shared/components/ui'
import { useBooks } from '@/shared/hooks'
import { BookIcon } from 'lucide-react'
import { useState } from 'react'
import { useDebounce } from 'use-debounce'


export const ChooseBook = ({
	setBookId,
	bookId,

}: {
	setBookId: (id: string | null) => void
		bookId: string | null
		
}) => {
	const [text, setText] = useState('')
	const [value] = useDebounce(text, 1000)
	const { useGetBooks } = useBooks()
	const { data, isPending, error } = useGetBooks({
		query: `title=${value}`
	})
	return (
		<div>
			<Input
				value={text}
				onChange={setText}
				icon={<BookIcon className='text-main' />}
				placeholder='Выбрать книгу'
			/>
			{value && !bookId && (
				<div className='mt-3'>
					{error ? (
						<ErrorMessage error={error} />
					) : isPending ? (
						[...new Array(5)].map((_, index) => (
							<Skeleton className='h-5 w-full' key={index} />
						))
					) : data.length > 0 ? (
						data.map(book => (
							<button
								onClick={() => {
									setBookId(book.id)
									setText(book.title)
								}}
								type='button'
								key={book.id}
								className='bg-accent-light/40 w-full rounded-2xl p-2 text-left'
							>
								<h4 className='text-sm'>{book.title}</h4>
								<p className='text-xs'>{book.author.name}</p>
							</button>
						))
					) : (
						<p className='text-secondary text-center text-xs'>
							Книг не найдено
						</p>
					)}
				</div>
			)}
		</div>
	)
}
