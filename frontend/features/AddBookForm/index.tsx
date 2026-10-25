/* eslint-disable react-hooks/incompatible-library */
'use client'
import {
	bookResolver,
	BookResolverType,
	Button,
	ErrorMessage,
	Input,
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	useBooks,
	useFilters
} from '@/shared'
import { useAdminStore } from '@/shared/stores'
import { zodResolver } from '@hookform/resolvers/zod'
import { Plus } from 'lucide-react'
import { useEffect } from 'react'
import { Controller, useForm, useWatch } from 'react-hook-form'
import { toast } from 'react-toastify'

export const AddBookForm = () => {
	const { useCreateBook } = useBooks()
	const { mutate, isPending: createBookPending } = useCreateBook()
	const { useGetFilters } = useFilters()
	const { data, isPending, error } = useGetFilters()

	const { setBookData, setOpenAddBook } = useAdminStore()
	const {
		handleSubmit,
		register,
		formState: { errors },
		control,
		reset
	} = useForm<BookResolverType>({
		resolver: zodResolver(bookResolver)
	})

	const formData = useWatch({ control })

	useEffect(() => {
		setBookData({
			title: formData.title || '',
			description: formData.description || '',
			preview: formData.preview,
			authorId: formData.authorId || '',
			genreId: formData.genreId || '',
			publisherId: formData.publisherId || '',
			pages: formData.pages || 0,
			year: formData.year || 0,
			tags: formData.tags || ''
		})
	}, [formData, setBookData])

	const onSubmit = (values: BookResolverType) => {
		const formData = new FormData()

		Object.entries(values).forEach(([key, value]) => {
			console.log(key, value)
			formData.append(key, value)
		})

		if (values.preview) {
			formData.append('preview', values.preview[0])
		}

		mutate(formData, {
			onSuccess: () => {
				toast.success('Книга успешно добавлена!')
				reset()
				setOpenAddBook(false)
			}
		})
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
					className='border-accent-light mt-2 flex h-50 w-full resize-none items-center gap-3 rounded-lg border p-3 outline-none'
				></textarea>
			</label>
			<Input
				label='Год'
				type='number'
				register={register('year', { valueAsNumber: true })}
				placeholder='2000'
				error={errors.year?.message}
			/>
			<Input
				label='Теги'
				register={register('tags')}
				placeholder='тег, тег, тег'
				error={errors.tags?.message}
			/>
			<Input
				label='Количество страниц'
				register={register('pages', { valueAsNumber: true })}
				placeholder='342'
				type='number'
				error={errors.pages?.message}
			/>
			<Controller
				name='authorId'
				control={control}
				render={({ field }) => (
					<Select value={field.value} onValueChange={field.onChange}>
						<label>
							<span className='font-semibold text-black'>
								Автор
							</span>
							<SelectTrigger className={'mt-2 h-12! w-full'}>
								<span className='text-gray-500'>
									{formData.authorId
										? data?.authors.find(
												p =>
													String(p.id) ===
													formData.authorId
											)?.name
										: 'Автор'}
								</span>
							</SelectTrigger>
						</label>
						<SelectContent>
							{error ? (
								<ErrorMessage error={error} />
							) : isPending ? (
								[...new Array(5)].map((_, index) => (
									<SelectItem
										className={'h-10 w-full'}
										key={index}
									/>
								))
							) : (
								data.authors.map(author => (
									<SelectItem
										value={author.id}
										className={'cursor-pointer'}
										key={author.id}
									>
										{author.name}
									</SelectItem>
								))
							)}
						</SelectContent>
					</Select>
				)}
			/>
			<Controller
				name='genreId'
				control={control}
				render={({ field }) => (
					<Select value={field.value} onValueChange={field.onChange}>
						<label>
							<span className='font-semibold text-black'>
								Жанр
							</span>
							<SelectTrigger className={'mt-2 h-12! w-full'}>
								<span className='text-gray-500'>
									{formData.genreId
										? data?.genres.find(
												p =>
													String(p.id) ===
													formData.genreId
											)?.name
										: 'Жанр'}
								</span>
							</SelectTrigger>
						</label>
						<SelectContent>
							{error ? (
								<ErrorMessage error={error} />
							) : isPending ? (
								[...new Array(5)].map((_, index) => (
									<SelectItem
										className={'h-10 w-full'}
										key={index}
									/>
								))
							) : (
								data.genres.map(genre => (
									<SelectItem
										value={genre.id}
										className={'cursor-pointer'}
										key={genre.id}
									>
										{genre.name}
									</SelectItem>
								))
							)}
						</SelectContent>
					</Select>
				)}
			/>
			<Controller
				name='publisherId'
				control={control}
				render={({ field }) => (
					<Select value={field.value} onValueChange={field.onChange}>
						<label>
							<span className='font-semibold text-black'>
								Издательство
							</span>
							<SelectTrigger className={'mt-2 h-12! w-full'}>
								<span className='text-gray-500'>
									{formData.publisherId
										? data?.publishers.find(
												p =>
													String(p.id) ===
													formData.publisherId
											)?.name
										: 'Издательство'}
								</span>
							</SelectTrigger>
						</label>
						<SelectContent>
							{error ? (
								<ErrorMessage error={error} />
							) : isPending ? (
								[...new Array(5)].map((_, index) => (
									<SelectItem
										className={'h-10 w-full'}
										key={index}
									/>
								))
							) : (
								data.publishers.map(publisher => (
									<SelectItem
										value={publisher.id}
										className={'cursor-pointer'}
										key={publisher.id}
									>
										{publisher.name}
									</SelectItem>
								))
							)}
						</SelectContent>
					</Select>
				)}
			/>

			<Button
				disabled={isPending || createBookPending}
				className={
					'col-span-2 h-10 disabled:pointer-events-none disabled:opacity-50'
				}
				type='submit'
			>
				Добавить
			</Button>
		</form>
	)
}
