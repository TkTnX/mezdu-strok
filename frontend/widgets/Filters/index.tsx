'use client'
import {
	ErrorMessage,
	RATING_FILTER,
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	useFilters
} from '@/shared'
import { useFiltersStore } from '@/shared/stores'
import { useRouter, useSearchParams } from 'next/navigation'

export const Filters = () => {
	const searchParams = useSearchParams()
	const router = useRouter()
	const { filters, setFilters } = useFiltersStore()
	const { useGetFilters } = useFilters()
	const { data, isPending, error } = useGetFilters()

	const handleChangeVal = (val: string | null, name: string) => {
		setFilters({ ...filters, [name]: val })
		const params = new URLSearchParams(window.location.search)
		if (val) {
			params.set(name, val)
		} else {
			params.delete(name)
		}
		router.push(`?${params.toString()}`)
	}

	const resetFilters = () => {
		setFilters({ author: null, genre: null, publisher: null, rating: null })
		const params = new URLSearchParams(window.location.search)
		Object.keys(filters).forEach(key => params.delete(key))
		router.push(`?${params.toString()}`)
	}
	return (
		<div className='mt-5 flex flex-wrap gap-4'>
			<Select
				onValueChange={(val: string | null) =>
					handleChangeVal(val, 'author')
				}
			>
				<SelectTrigger>
					<span>
						{filters.author
							? data?.authors.find(
									p => String(p.id) === filters.author
								)?.name
							: 'Автор'}
					</span>
				</SelectTrigger>
				<SelectContent>
					{error ? (
						<ErrorMessage error={error} />
					) : isPending ? (
						[...new Array(5)].map((_, index) => (
							<SelectItem className={'h-10 w-full'} key={index} />
						))
					) : (
						data.authors.map(author => (
							<SelectItem
								value={author.id}
								className={'cursor-pointer'}
								key={author.id}
							>
								{author.name}
							</SelectItem>
						))
					)}
				</SelectContent>
			</Select>
			<Select
				onValueChange={(val: string | null) =>
					handleChangeVal(val, 'genre')
				}
			>
				<SelectTrigger>
					<span>
						{filters.genre
							? data?.genres.find(
									p => String(p.id) === filters.genre
								)?.name
							: 'Жанр'}
					</span>
				</SelectTrigger>
				<SelectContent>
					{error ? (
						<ErrorMessage error={error} />
					) : isPending ? (
						[...new Array(5)].map((_, index) => (
							<SelectItem className={'h-10 w-full'} key={index} />
						))
					) : (
						data.genres.map(genre => (
							<SelectItem
								value={genre.id}
								className={'cursor-pointer'}
								key={genre.id}
							>
								{genre.name}
							</SelectItem>
						))
					)}
				</SelectContent>
			</Select>
			<Select
				onValueChange={(val: string | null) =>
					handleChangeVal(val, 'publisher')
				}
			>
				<SelectTrigger>
					<span>
						{filters.publisher
							? data?.publishers.find(
									p => String(p.id) === filters.publisher
								)?.name
							: 'Издательство'}
					</span>
				</SelectTrigger>
				<SelectContent>
					{error ? (
						<ErrorMessage error={error} />
					) : isPending ? (
						[...new Array(5)].map((_, index) => (
							<SelectItem
								className={'h-10 w-full cursor-pointer'}
								key={index}
							/>
						))
					) : (
						data.publishers.map(publisher => (
							<SelectItem
								value={publisher.id}

								className={'cursor-pointer'}
								key={publisher.id}
							>
								{publisher.name}
							</SelectItem>
						))
					)}
				</SelectContent>
			</Select>
			<Select
				onValueChange={(val: string | null) =>
					handleChangeVal(val, 'rating')
				}
			>
				<SelectTrigger>
					<span>
						{filters.rating
							? RATING_FILTER.find(
									p => p.value === filters.rating
								)?.label
							: 'Рейтинг'}
					</span>
				</SelectTrigger>
				<SelectContent>
					{RATING_FILTER.map((item, index) => (
						<SelectItem
							className={'cursor-pointer'}
							value={item.value}
							key={index}
						>
							{item.label}
						</SelectItem>
					))}
				</SelectContent>
			</Select>
			<button
				disabled={searchParams.size === 0}
				onClick={() => resetFilters()}
				className='text-main disabled:pointer-events-none disabled:opacity-50'
			>
				Сбросить
			</button>
		</div>
	)
}
