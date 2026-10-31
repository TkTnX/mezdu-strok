'use client'
import Image from 'next/image'

export const GoogleButton = () => {
	return (
		<a
			href={'http://localhost:4444/auth/google'}
			className={
				'border-accent-light bg-main mt-5 flex h-10 w-full items-center justify-center gap-4 rounded-lg transition text-white hover:opacity-80 disabled:pointer-events-none disabled:opacity-50'
			}
		>
			<Image
				src={'/images/icons/google.svg'}
				alt='Google icon'
				width={20}
				height={20}
			/>
			Войти с помощью Google
		</a>
	)
}
