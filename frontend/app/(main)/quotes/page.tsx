import { AddQuote } from '@/shared'
import { Quotes } from '@/widgets'

const QuotesPage = () => {
	return (
		<section className='vsm:pl-10! flex-1 p-4'>
			<div className='flex items-center justify-between'>
				<h1 className='text-2xl font-bold sm:text-4xl'>Цитаты</h1>
				<AddQuote  />
            </div>
            <Quotes />
		</section>
	)
}

export default QuotesPage
