import {
	REVIEWS_SORT,
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger
} from '@/shared'
import { useState } from 'react'

interface Props {
    setSortBy: (value: string) => void
}

export const ReviewsSort = ({setSortBy}: Props) => {
	const [label, setLabel] = useState('Новые')
	return (
		<label className='flex cursor-pointer flex-wrap items-center gap-3'>
			<span className='font-semibold'>Сортировать по:</span>{' '}
			<Select>
				<SelectTrigger
					className={'bg-accent-light vsm:flex-none vsm:w-60 flex-1'}
				>
					<p>{label}</p>
				</SelectTrigger>
				<SelectContent>
					{REVIEWS_SORT.map((item, index) => (
						<SelectItem
                            onClick={() => {
                                setLabel(item.label)
                                setSortBy(item.value)
                            }}
							key={index}
							className={'cursor-pointer'}
							value={item.value}
						>
							{item.label}
						</SelectItem>
					))}
				</SelectContent>
			</Select>
		</label>
	)
}
