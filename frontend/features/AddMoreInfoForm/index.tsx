'use client'
import {
	Button,
	Input,
	updateUserResolver,
	UpdateUserType,
	useUser
} from '@/shared'
import { showErrorMessage } from '@/shared/helpers'
import { zodResolver } from '@hookform/resolvers/zod'
import { Loader2Icon, User, UserCircle2Icon } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'

export const AddMoreInfoForm = () => {
	const router = useRouter()
	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm<UpdateUserType>({
		resolver: zodResolver(updateUserResolver)
	})
	const { useUpdateUser } = useUser()
	const { mutate, isPending } = useUpdateUser({
		onError: error => showErrorMessage(error),
		onSuccess: async () => {
			router.push('/')
			toast.success('Вы успешно завершили регистрацию!')
		}
	})

	return (
		<form
			onSubmit={handleSubmit(data => mutate({ ...data, avatar: null }))}
			className='mt-4 grid w-full gap-3'
		>
			<label className='flex flex-col items-center justify-center'>
				<span className='bg-accent-light text-main cursor-pointer rounded-full'>
					<UserCircle2Icon
						size={128}
						className='stroke-main'
						strokeWidth={1}
					/>
				</span>
				<input
					accept='image/*'
					{...register('avatar')}
					hidden
					type='file'
				/>
			</label>
			<Input
				label='Имя'
				icon={<User size={20} className='text-secondary' />}
				placeholder='Иван'
				register={register('firstname', { required: true })}
				error={errors.firstname?.message}
			/>
			<Input
				label='Фамилия'
				icon={<User size={20} className='text-secondary' />}
				placeholder='Иванов'
				register={register('lastname', { required: true })}
				error={errors.lastname?.message}
			/>
			<label className='w-full items-start'>
				<span className='font-semibold text-black'>Описание</span>

				<div className='border-accent-light mt-2 w-full rounded-lg border'>
					<textarea
						{...register('bio')}
						className='h-30 w-full resize-none p-3 outline-none'
						placeholder={'Описание'}
					/>
				</div>
			</label>
			<Button
				type='submit'
				disabled={isPending}
				className='mt-4 h-12 w-full disabled:pointer-events-none disabled:opacity-50'
			>
				{isPending ? (
					<Loader2Icon size={20} className='mx-auto animate-spin' />
				) : (
					'Закончить регистрацию'
				)}
			</Button>
		</form>
	)
}
