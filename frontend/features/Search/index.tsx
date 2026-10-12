'use client'
import { cn } from '@/shared'
import { SearchIcon, X } from 'lucide-react'
import { useRouter, useSearchParams } from 'next/navigation'
import { useState } from 'react'

interface Props {
	open?: boolean
	setOpen?: React.Dispatch<React.SetStateAction<boolean>>
	className?: string
}

export const Search = ({ setOpen, open, className }: Props) => {
	const router = useRouter()
	const searchParams = useSearchParams()
	const [value, setValue] = useState(searchParams.get('value') || '')

	const onSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
		e.preventDefault()
		if (!value) return
		router.push(`/search?value=${value}`)
	}

	return (
		<form
			onSubmit={e => onSubmit(e)}
			className={cn(
				'bg-accent-light hidden max-w-112.5 flex-1 items-center gap-2 rounded-full p-2 sm:flex',
				className
			)}
		>
			<SearchIcon size={16} />
			<input
				value={value}
				onChange={e => setValue(e.target.value)}
				className='flex-1'
				type='text'
				placeholder='Поиск по книгам и авторам'
			/>
			{(value || open) && (
				<button
					type='button'
					onClick={() => {
						setValue('')
						setOpen?.(false)
					}}
				>
					<X size={16} />
				</button>
			)}
		</form>
	)
}
