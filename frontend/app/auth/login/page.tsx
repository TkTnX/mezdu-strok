import { LoginForm } from '@/features'
import { Button } from '@/shared'
import Image from 'next/image'
import Link from 'next/link'

const LoginPage = () => {
	return (
		<section className='mx-auto my-10 flex h-fit w-full max-w-125 flex-col items-center justify-center rounded-xl bg-white px-10 py-5 shadow-2xl'>
			<Image
				src={'/images/icons/book_login.svg'}
				alt='Вход в аккаунт'
				width={100}
				height={100}
			/>
			<h1 className='text-xl font-bold'>Войти в аккаунт</h1>
			<p className='text-secondary mt-2 text-center text-sm'>
				Добро пожаловать обратно! <br /> Войдите, чтобы продолжить
				пользоваться сервисом полностью.
			</p>
			<LoginForm />
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
				Войти с помощью Google
			</Button>
			<p className='text-secondary mt-5 flex gap-1 text-sm'>
				Нет аккаунта?
				<Link
					className='text-main font-semibold'
					href={'/auth/register'}
				>
					Зарегистрироваться
				</Link>
			</p>
		</section>
	)
}

export default LoginPage
