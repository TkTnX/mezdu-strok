'use client'
import {
	Button,
	ChooseBook,
	Input,
	quoteResolver,
	QuoteResolverType,
	useQuotes
} from '@/shared'
import { zodResolver } from '@hookform/resolvers/zod'
import { useQueryClient } from '@tanstack/react-query'
import { QuoteIcon } from 'lucide-react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'

export const AddQuoteForm = () => {
	const queryClient = useQueryClient()
	const [bookId, setBookId] = useState<string | null>(null)
	const { useCreateQuote } = useQuotes()
	const { mutate, isPending } = useCreateQuote()
	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm<QuoteResolverType>({
		resolver: zodResolver(quoteResolver)
	})

	const onSubmit = (data: QuoteResolverType) => {
		if (!bookId) return toast.error('Выберите книгу')

		return mutate(
			{ ...data, bookId },
			{
				onSuccess: () => {
					toast.success('Цитата успешно добавлена!')
					queryClient.invalidateQueries({ queryKey: ['quotes', {}] })
					
				}
			}
		)
	}

	return (
		<form onSubmit={handleSubmit(onSubmit)} className=''>
			<Input
				register={register('quote')}
				placeholder='Цитата'
				error={errors.quote?.message}
				icon={<QuoteIcon className='text-main' />}
			/>
			<ChooseBook bookId={bookId} setBookId={setBookId} />
			<Button
				disabled={isPending}
				className={'mt-4 h-10 w-full'}
				type='submit'
			>
				Добавить
			</Button>
		</form>
	)
}
