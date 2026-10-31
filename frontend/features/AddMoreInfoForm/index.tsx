'use client'
import {
	Button,
	getMe,
	Input,
	IUser,
	updateUserRegResolver,
	UpdateUserRegType,
	updateUserResolver,
	UpdateUserType,
	useUser
} from '@/shared'
import { showErrorMessage } from '@/shared/helpers'
import { useUserStore } from '@/shared/stores'
import { zodResolver } from '@hookform/resolvers/zod'
import { AtSignIcon, Loader2Icon, User, UserCircle2Icon } from 'lucide-react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'

interface Props {
	user?: IUser | null
	setOpen: (open: boolean) => void
}

export const AddMoreInfoForm = ({ user, setOpen }: Props) => {
	const router = useRouter()
	const {
		register,
		handleSubmit,
		formState: { errors },
		watch
	} = useForm<UpdateUserType | UpdateUserRegType>({
		resolver: zodResolver(user ? updateUserResolver : updateUserRegResolver)
	})
	const { setUser } = useUserStore()
	const { useUpdateUser } = useUser()
	const { mutate, isPending } = useUpdateUser({
		onError: error => showErrorMessage(error),
		onSuccess: async () => {
			toast.success(
				user
					? 'Вы успешно обновили данные!'
					: 'Вы успешно завершили регистрацию!'
			)
			const newUser = await getMe()

			if (!user) {
				router.push('/')
			}
			setUser(newUser)
			setOpen?.(false)
		}
	})

	const onSubmit = (data: UpdateUserType | UpdateUserRegType) => {
		const formData = new FormData()

		formData.append('firstname', data.firstname)
		formData.append('lastname', data.lastname)

		if (data.username) {
			formData.append('username', data.username)
		}

		if (data.bio) {
			formData.append('bio', data.bio)
		}
		if (data.avatar?.[0]) {
			formData.append('avatar', data.avatar[0])
		}

		mutate(formData)
	}
	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			className='mt-4 grid w-full gap-3'
		>
			<label className='flex cursor-pointer flex-col items-center justify-center'>
				{watch().avatar?.[0] ? (
					<Image
						src={URL.createObjectURL(watch().avatar[0])}
						alt=''
						width={128}
						height={128}
						className='h-32 w-32 rounded-full object-cover'
					/>
				) : user?.avatar ? (
					<Image
						alt='Аватар пользователя'
						className='h-32 w-32 rounded-full object-cover'
						src={user.avatar}
						width={128}
						height={128}
						unoptimized
					/>
				) : (
					<span className='bg-accent-light text-main cursor-pointer rounded-full'>
						<UserCircle2Icon
							size={128}
							className='stroke-main'
							strokeWidth={1}
						/>
					</span>
				)}

				<input
					accept='image/*'
					{...register('avatar')}

					hidden
					type='file'
				/>
			</label>
			{user && (
				<Input
					label='Юзернейм'
					icon={<AtSignIcon size={20} className='text-secondary' />}
					placeholder='@username'
					register={register('username')}
					error={errors.username?.message}
					defaultValue={user?.username}
				/>
			)}
			<Input
				label='Имя'
				icon={<User size={20} className='text-secondary' />}
				placeholder='Иван'
				register={register('firstname', { required: true })}
				error={errors.firstname?.message}
				defaultValue={user?.firstname}
			/>

			<Input
				label='Фамилия'
				icon={<User size={20} className='text-secondary' />}
				placeholder='Иванов'
				register={register('lastname', { required: true })}
				error={errors.lastname?.message}
				defaultValue={user?.lastname}
			/>

			<label className='w-full items-start'>
				<span className='font-semibold text-black'>Описание</span>

				<div className='border-accent-light mt-2 w-full rounded-lg border'>
					<textarea
						{...register('bio')}
						className='h-30 w-full resize-none p-3 outline-none'
						placeholder={'Описание'}
						defaultValue={user?.bio}
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
				) : user ? (
					'Изменить'
				) : (
					'Закончить регистрацию'
				)}
			</Button>
		</form>
	)
}
