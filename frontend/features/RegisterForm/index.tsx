'use client'
import {
	Button,
	getMe,
	Input,
	registerResolver,
	RegisterResolverType,
	useAuth
} from '@/shared'
import { showErrorMessage } from '@/shared/helpers'
import { useUserStore } from '@/shared/stores'
import { zodResolver } from '@hookform/resolvers/zod'
import {
	EyeIcon,
	EyeOffIcon,
	Loader2Icon,
	LockKeyhole,
	Mail
} from 'lucide-react'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'

export const RegisterForm = () => {
	const { setUser } = useUserStore()
	const router = useRouter()
	const [showPass, setShowPass] = useState(false)
	const [isConfirmed, setIsConfirmed] = useState(false)
	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm<RegisterResolverType>({
		resolver: zodResolver(registerResolver)
	})
	const { useRegisterMutation } = useAuth()
	const { mutate, isPending } = useRegisterMutation({
		onError: error => showErrorMessage(error),
		onSuccess: async () => {
			const user = await getMe()
			setUser(user)
			router.push('/')
			toast.success('Вы успешно зарегистрировались!')
		}
	})

	const onSubmit = (values: RegisterResolverType) => {
		if (values.password !== values.passwordRepeat) {
			toast.error('Пароли не совпадают!')
		}
		const { passwordRepeat, ...rest } = values

		return mutate(rest)
	}

	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			className='mt-4 grid w-full gap-3'
		>
			<Input
				label='Логин'
				icon={<Mail size={20} className='text-secondary' />}
				placeholder='user'
				register={register('username', { required: true })}
				error={errors.username?.message}
			/>
			<Input
				label={`Email`}
				icon={<Mail size={20} className='text-secondary' />}
				placeholder='example@domain.com'
				register={register('email', { required: true })}
				error={errors.email?.message}
			/>
			<Input
				label='Пароль'
				icon={<LockKeyhole size={20} className='text-secondary' />}
				placeholder='Введите пароль'
				register={register('password', { required: true })}
				type={showPass ? 'text' : 'password'}
				additional={
					<button
						type='button'
						onClick={() => setShowPass(!showPass)}
					>
						{showPass ? (
							<EyeIcon size={20} className='text-secondary' />
						) : (
							<EyeOffIcon size={20} className='text-secondary' />
						)}
					</button>
				}
				error={errors.password?.message}
			/>
			<Input
				label='Повторите пароль'
				icon={<LockKeyhole size={20} className='text-secondary' />}
				placeholder='Повторите пароль'
				register={register('passwordRepeat', { required: true })}
				error={errors.passwordRepeat?.message}
				type={showPass ? 'text' : 'password'}
				additional={
					<button
						type='button'
						onClick={() => setShowPass(!showPass)}
					>
						{showPass ? (
							<EyeIcon size={20} className='text-secondary' />
						) : (
							<EyeOffIcon size={20} className='text-secondary' />
						)}
					</button>
				}
			/>

			<label className='text-secondary flex items-start gap-2'>
				<input
					onChange={e => setIsConfirmed(e.target.checked)}
					checked={isConfirmed}
					className='mt-1'
					type='checkbox'
				/>
				<span>
					Я согласен с{' '}
					<a href={'#'} className='text-main'>
						условиями использования и политикой конфиденциальности
					</a>
				</span>
			</label>
			<Button
				type='submit'
				disabled={isPending || !isConfirmed}
				className='mt-4 h-12 w-full disabled:pointer-events-none disabled:opacity-50'
			>
				{isPending ? (
					<Loader2Icon size={20} className='mx-auto animate-spin' />
				) : (
					'Зарегистрироваться'
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
