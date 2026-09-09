import { Button, Input } from '@/shared'
import { EyeOffIcon, LockKeyhole, Mail } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

interface Props {
	type: 'login' | 'register'
}

export const AuthForm = ({ type }: Props) => {
	const isLogin = type === 'login'
	return (
		<div className='mx-auto my-auto flex h-fit w-full max-w-125 flex-col items-center justify-center rounded-xl bg-white p-10 shadow-2xs'>
			<Image
				src={
					isLogin
						? '/images/icons/book_login.svg'
						: '/images/icons/book_register.svg'
				}
				alt='Фото формы'
				width={150}
				height={150}
			/>
			<h1 className='text-2xl font-bold'>
				{isLogin ? 'Войти в' : 'Создать'} аккаунт
			</h1>
			{isLogin ? (
				<p className='text-secondary mt-2 text-center text-sm'>
					Добро пожаловать обратно! <br /> Войдите, чтобы продолжить
					пользоваться сервисом полностью.
				</p>
			) : (
				<p className='text-secondary mt-2 text-center text-sm'>
					Зарегистрируйтесь, чтобы писать рецензии{' '}
				</p>
			)}
			<form className='mt-4 grid w-full gap-3'>
				{!isLogin && (
					<Input
						label='Логин'
						icon={<Mail size={20} className='text-secondary' />}
						placeholder='user'
						name='username'
					/>
				)}
				<Input
					label={`${isLogin ? 'Email или логин' : 'Email'}`}
					icon={<Mail size={20} className='text-secondary' />}
					placeholder='example@domain.com'
					name='email'
				/>
				<Input
					label='Пароль'
					icon={<LockKeyhole size={20} className='text-secondary' />}
					placeholder='Введите пароль'
					name='password'
					additional={
						<button>
							<EyeOffIcon size={20} className='text-secondary' />
						</button>
					}
				/>
				{!isLogin && (
					<Input
						label='Повторите пароль'
						icon={
							<LockKeyhole size={20} className='text-secondary' />
						}
						placeholder='Повторите пароль'
						name='password'
						additional={
							<button>
								<EyeOffIcon
									size={20}
									className='text-secondary'
								/>
							</button>
						}
					/>
				)}
				{isLogin ? (
					<button className='text-main w-fit text-left font-semibold hover:opacity-80'>
						Забыли пароль?
					</button>
				) : (
					<label className='text-secondary flex items-start gap-2'>
						<input className='mt-1' type='checkbox' />
						<span>
							Я согласен с{' '}
							<a href={'#'} className='text-main'>
								условиями использования и политикой
								конфиденциальности
							</a>
						</span>
					</label>
				)}
				<Button className='mt-4 h-12 w-full'>
					{isLogin ? 'Войти' : 'Зарегистрироваться'}
				</Button>
				<div className='flex items-center gap-3'>
					<div className='bg-accent-light h-px w-full' />
					<p className='text-secondary'>или</p>
					<div className='bg-accent-light h-px w-full' />
				</div>
			</form>
			<Button
				variant={'outline'}
				className={'border-accent-light mt-5 h-10 w-full text-black'}
			>
				<Image
					src={'/images/icons/google.svg'}
					alt='Google icon'
					width={20}
					height={20}
				/>
				{isLogin ? 'Войти с помощью' : 'Продолжить с'} Google
			</Button>
			<p className='text-secondary mt-5 text-sm'>
				{isLogin ? 'Нет аккаунта?' : 'Уже есть аккаунт?'}{' '}
				<Link
					className='text-main font-semibold'
					href={isLogin ? '/auth/register' : '/auth/login'}
				>
					{isLogin ? 'Зарегистрироваться' : 'Войти'}
				</Link>
			</p>
		</div>
	)
}
