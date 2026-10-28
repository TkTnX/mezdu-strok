/* eslint-disable react-hooks/incompatible-library */
'use client'
import {
	Button,
	Input,
	publisherResolver,
	PublisherResolverType,
	usePublishers
} from '@/shared'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'

export const AddPublisherForm = () => {
	const { useCreatePublisher } = usePublishers()
	const { mutate, isPending } = useCreatePublisher()
	const {
		handleSubmit,
		register,
		formState: { errors },
		reset
	} = useForm<PublisherResolverType>({
		resolver: zodResolver(publisherResolver)
	})

	const onSubmit = (values: PublisherResolverType) => {
		mutate(values, {
			onSuccess: () => {
				toast.success('Издательство успешно добавлено!')
				reset()
			}
		})
	}

	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			className='flex flex-col gap-3 pb-4'
		>
			<Input
				label='Название издательства'
				register={register('title')}
				placeholder='Название'
				error={errors.title?.message}
			/>
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
