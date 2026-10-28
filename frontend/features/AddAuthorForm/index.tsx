/* eslint-disable react-hooks/incompatible-library */
'use client'
import {
	authorResolver,
	AuthorResolverType,
	Button,
	Input,
	useAuthors
} from '@/shared'
import { useAdminStore } from '@/shared/stores'
import { zodResolver } from '@hookform/resolvers/zod'
import { Plus } from 'lucide-react'
import { useEffect } from 'react'
import { useForm, useWatch } from 'react-hook-form'
import { toast } from 'react-toastify'

export const AddAuthorForm = () => {
	const { useCreateAuthor } = useAuthors()
	const { mutate, isPending } = useCreateAuthor()
	const { setAuthorData, setOpenAddAuthor } = useAdminStore()
	const {
		handleSubmit,
		register,
		formState: { errors },
		control,
		reset
	} = useForm<AuthorResolverType>({
		resolver: zodResolver(authorResolver)
	})

	const formData = useWatch({ control })

	useEffect(() => {
		setAuthorData({
			name: formData.name || '',
			bio: formData.bio || '',
			avatar: formData.avatar
		})
	}, [formData, setAuthorData])

	const onSubmit = (values: AuthorResolverType) => {
		const formData = new FormData()
		Object.entries(values).forEach(([key, value]) =>
			formData.append(key, value)
		)

		if (values.avatar) {
			formData.append('avatar', values.avatar[0])
		}

		mutate(formData, {
			onSuccess: () => {
				toast.success('Автор успешно добавлен!')
				reset()
				setOpenAddAuthor(false)
			}
		})
	}

	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			className='flex flex-col gap-3 pb-4 xl:min-w-100'
		>
			<label className='block cursor-pointer'>
				<span className='font-semibold text-black'>Изображение</span>
				<span className='bg-accent-light text-main mt-2 flex w-full cursor-pointer items-center justify-center'>
					<Plus size={64} className='stroke-main' strokeWidth={1} />
				</span>
				<input
					accept='image/*'
					{...register('avatar')}
					hidden
					type='file'
				/>
			</label>
			<Input
				label='Имя автора'
				register={register('name')}
				placeholder='Имя автора'
				error={errors.name?.message}
			/>
			<label>
				<span className='font-semibold text-black'>Описание</span>
				<textarea
					{...register('bio')}
					placeholder='Автор пишет о...'
					className='border-accent-light mt-2 flex h-50 w-full resize-none items-center gap-3 rounded-lg border p-3 outline-none'
				></textarea>
			</label>

			<Button
				disabled={isPending}
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
