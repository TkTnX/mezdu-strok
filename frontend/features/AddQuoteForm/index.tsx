'use client'
import { Button, ChooseBook, Input, quoteResolver } from '@/shared'
import { zodResolver } from '@hookform/resolvers/zod'
import { BookIcon, QuoteIcon } from 'lucide-react'
import { useForm } from 'react-hook-form'

export const AddQuoteForm = () => {
	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm({
		resolver: zodResolver(quoteResolver)
	})
	return (
		<form onSubmit={handleSubmit(data => console.log(data))} className=''>
			<Input
				register={register('quote')}
				placeholder='Цитата'
				error={errors.quote?.message}
				icon={<QuoteIcon className='text-main' />}
			/>
			<ChooseBook icon={<BookIcon className='text-main' />} />
			<Button className={'mt-4 h-10 w-full'} type='submit'>
				Добавить
			</Button>
		</form>
	)
}
