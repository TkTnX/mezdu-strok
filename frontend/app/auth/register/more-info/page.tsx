import { AddMoreInfoForm } from '@/features'
import Image from 'next/image'

const AuthMoreInfoPage = () => {
	return (
		<section className='mx-auto my-10 flex h-fit w-full max-w-125 flex-col items-center justify-center rounded-xl bg-white px-10 py-5 shadow-2xl'>
			<Image
				src='/images/icons/book_register.svg'
				alt='Фото формы'
				width={100}
				height={100}
			/>
			<h1 className='text-xl font-bold'>Давайте познакомимся!</h1>

			<p className='text-secondary mt-2 text-center text-sm'>
				Расскажите немного о себе
			</p>
			<AddMoreInfoForm />
		</section>
	)
}

export default AuthMoreInfoPage
