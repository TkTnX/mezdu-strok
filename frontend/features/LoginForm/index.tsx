'use client'
import {
	Button,
	getMe,
	Input,
	loginResolver,
	LoginResolverType,
	useAuth
} from '@/shared'
import {
	EyeIcon,
	EyeOffIcon,
	Loader2Icon,
	LockKeyhole,
	Mail
} from 'lucide-react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from 'react'
import { showErrorMessage } from '@/shared/helpers'
import { useRouter } from 'next/navigation'
import { toast } from 'react-toastify'
import { useUserStore } from '@/shared/stores'
// TODO: FIX АДАПТИВ КАРТИНОК КНИГ
export const LoginForm = () => {
	const router = useRouter()
	const [showPass, setShowPass] = useState('password')
	const {setUser} = useUserStore()
	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm<LoginResolverType>({
		resolver: zodResolver(loginResolver)
	})

	const { useLoginMutation } = useAuth()
	const { mutate, isPending } = useLoginMutation({
		onError: error => showErrorMessage(error),
		onSuccess: async () => {
			const user = await getMe()
			setUser(user)
			router.push('/')
			toast.success('Вы успешно вошли в аккаунт!')
			console.log(user)
		}
	})
	return (
		<form
			onSubmit={handleSubmit(data => mutate(data))}
			className='mt-4 grid w-full gap-3'
		>
			<Input
				label={'Email или логин'}
				icon={<Mail size={20} className='text-secondary' />}
				placeholder='example@domain.com'
				register={register('emailOrUsername', { required: true })}
				error={errors.emailOrUsername?.message}
			/>
			<Input
				label='Пароль'
				icon={<LockKeyhole size={20} className='text-secondary' />}
				placeholder='Введите пароль'
				register={register('password', { required: true })}
				additional={
					<button
						onClick={() =>
							setShowPass(
								showPass === 'password' ? 'text' : 'password'
							)
						}
						type='button'
					>
						{showPass === 'password' ? (
							<EyeOffIcon size={20} className='text-secondary' />
						) : (
							<EyeIcon size={20} className='text-secondary' />
						)}
					</button>
				}
				type={showPass}
				error={errors.password?.message}
			/>
			<button className='text-main w-fit text-left font-semibold hover:opacity-80'>
				Забыли пароль?
			</button>

			<Button
				disabled={isPending}
				type='submit'
				className='mt-4 h-12 w-full disabled:pointer-events-none disabled:opacity-50'
			>
				{isPending ? (
					<Loader2Icon size={20} className='mx-auto animate-spin' />
				) : (
					'Войти'
				)}
			</Button>
			<div className='flex items-center gap-3'>
				<div className='bg-accent-light h-px w-full' />
				<p className='text-secondary'>или</p>
				<div className='bg-accent-light h-px w-full' />
			</div>
		</form>
	)
}
