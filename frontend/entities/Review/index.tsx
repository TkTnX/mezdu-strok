import { BookAudioIcon } from 'lucide-react'
import Image from 'next/image'

type Props = {
	className?: string
}

export const Review = ({ className }: Props) => {
	return (
		<div
			className={`border-accent-light flex flex-col items-start gap-5 rounded-lg border px-4 py-5 md:flex-row md:gap-20 ${className}`}
		>
			<div className='flex gap-4'>
				<Image
					className='rounded-full object-cover'
					src={'/images/users/user1.png'}
					alt='User'
					width={50}
					height={50}
				/>
				<div>
					<h6 className='font-bold text-nowrap'>Тимур Г.</h6>
					<p className='text-secondary text-sm'>19 марта 2025</p>
				</div>
			</div>
			<div>
				<div className='flex flex-wrap items-center gap-3'>
					<div className='flex items-center gap-2'>
						<BookAudioIcon />
						<p className='font-bold'>78</p>
					</div>
					<h6 className='font-bold'>Преступление и наказание</h6>
				</div>
				<p className='mt-5'>
					Гениальное произведение! Булгаков создал настоящий шедевр,
					который невозможно забыть.
				</p>
			</div>
		</div>
	)
}
