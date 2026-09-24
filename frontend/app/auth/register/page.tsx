import { RegisterForm } from '@/features'
import { Button } from '@/shared'
import Image from 'next/image'
import Link from 'next/link'

const RegisterPage = () => {
	return (
		<section className='mx-auto my-10 flex h-fit w-full max-w-125 flex-col items-center justify-center rounded-xl bg-white px-10 py-5 shadow-2xl'>
			<Image
				src='/images/icons/book_register.svg'
				alt='Фото формы'
				width={100}
				height={100}
			/>
			<h1 className='text-xl font-bold'>Создать аккаунт</h1>

			<p className='text-secondary mt-2 text-center text-sm'>
				Зарегистрируйтесь, чтобы писать рецензии{' '}
			</p>
			<RegisterForm />
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
				Продолжить с Google
			</Button>

			<p className='text-secondary mt-5 flex items-center justify-center gap-1 text-sm'>
				Уже есть аккаунт?
				<Link className='text-main font-semibold' href={'/auth/login'}>
					{'Войти'}
				</Link>
			</p>
		</section>
	)
}

export default RegisterPage
