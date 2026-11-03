import { ResetPasswordForm } from '@/features'
import Image from 'next/image'

const ResetPasswordPage = () => {
	return (
		<section className='mx-auto my-10 flex h-fit w-full max-w-125 flex-col items-center justify-center rounded-xl bg-white px-10 py-5 shadow-2xl'>
			<Image
				src={'/images/icons/book_login.svg'}
				alt='Вход в аккаунт'
				width={100}
				height={100}
			/>
			<h1 className='text-xl font-bold'>Восстановление пароля</h1>
			<p className='text-secondary mt-2 text-center text-sm'>
				Введите ваш email, на который мы пришлём письмо для восстановления парля
            </p>
            <ResetPasswordForm />
		</section>
	)
}

export default ResetPasswordPage
