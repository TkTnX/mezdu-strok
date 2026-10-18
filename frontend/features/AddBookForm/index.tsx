'use client'
import { bookResolver, BookResolverType, Button, Input } from '@/shared'
import { zodResolver } from '@hookform/resolvers/zod'
import { Plus } from 'lucide-react'
import { useForm } from 'react-hook-form'

export const AddBookForm = () => {
	const {
		handleSubmit,
		register,
		formState: { errors }
	} = useForm<BookResolverType>({
		resolver: zodResolver(bookResolver)
	})

	const onSubmit = (values: BookResolverType) => {
		console.log(values)
	}
	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			className='grid grid-cols-2 gap-3 pb-4'
		>
			<label className='block cursor-pointer'>
				<span className='font-semibold text-black'>Изображение</span>
				<span className='bg-accent-light text-main mt-2 flex w-full cursor-pointer items-center justify-center'>
					<Plus size={64} className='stroke-main' strokeWidth={1} />
				</span>

				<input
					accept='image/*'
					{...register('preview')}

					hidden
					type='file'
				/>
			</label>
			<Input
				label='Название книги'
				register={register('title')}
				placeholder='Название'
				error={errors.title?.message}
			/>
			<label>
				<span className='font-semibold text-black'>Описание</span>

				<textarea
					{...register('description')}
					placeholder='Интересная книга'
					className='outline-none border-accent-light mt-2 flex h-50 w-full resize-none items-center gap-3 rounded-lg border p-3'
				></textarea>
			</label>
			<Input
				label='Год'
				register={register('year')}
				placeholder='2000'
				error={errors.year?.message}
			/>
			<Input
				label='Теги'
				register={register('tags')}
				placeholder='#тег #тег #тег'
				error={errors.tags?.message}
			/>
			<Input
				label='Количество страниц'
				register={register('pages')}
				placeholder='342'
				error={errors.pages?.message}
			/>
			<Input
				label='Автор'
				register={register('authorId')}
				placeholder='Автор'
				error={errors.authorId?.message}
			/>
			<Input
				label='Жанр'
				register={register('genreId')}
				placeholder='Жанр'
				error={errors.tags?.message}
			/>
			<Input
				label='Издательство'
				register={register('publisherId')}
				placeholder='Издательство'
				error={errors.tags?.message}
			/>
			<Button className={'col-span-2 h-10'}>Добавить</Button>
		</form>
	)
}
