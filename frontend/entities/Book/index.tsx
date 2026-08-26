import { BookAudioIcon } from 'lucide-react'
import Image from 'next/image'

export const Book = () => {
	return (
		<div className='flex w-full flex-col items-center text-center lg:block lg:text-left'>
			<div className='vsm:h-70 relative h-55 w-full max-w-55 sm:h-80'>
				<Image
					fill
					src={'/images/books/book1.jpg'}
					alt='Book 1'
					className='rounded-lg'
				/>
			</div>
			<h5 className='mt-3 max-w-55 text-lg font-semibold'>
				Преступление и наказание
			</h5>
			<p className='text-secondary text-sm'>Федор Достоевский</p>
			<div className='mt-3 flex items-center gap-2'>
				<BookAudioIcon />
				<p className='font-bold'>78</p>
			</div>
		</div>
	)
}
