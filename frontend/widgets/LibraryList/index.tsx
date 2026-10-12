'use client'
import { LibraryBook } from '@/entities'
import { ErrorMessage, Skeleton, SORT_ITEMS, useBooks } from '@/shared'
import { useRouter, useSearchParams } from 'next/navigation'
import { Select, SelectContent, SelectItem, SelectTrigger } from '@/shared'
import { useState } from 'react'
import { useFiltersStore } from '@/shared/stores'
export const LibraryList = () => {
	const { filters, setFilters } = useFiltersStore()
	const router = useRouter()
	const searchParams = useSearchParams()
	const [selectedSearch, setSelectedSearch] = useState<string | null>(
		searchParams.get('sort')
	)
	const params = new URLSearchParams(searchParams.toString())
	const { useGetBooks } = useBooks()
	const { data, isPending, error } = useGetBooks({
		query: params.toString()
	})

	if (error) return <ErrorMessage error={error} />

	const handleChangeVal = (val: string | null, name: string) => {
		setFilters({ ...filters, [name]: val })
		setSelectedSearch(val)
		const params = new URLSearchParams(window.location.search)
		if (val) {
			params.set(name, val)
		} else {
			params.delete(name)
		}
		router.push(`?${params.toString()}`)
	}

	return (
		<div>
			<div className='text-secondary mt-5 flex flex-wrap items-center justify-between gap-2 md:gap-3'>
				<p>Найдено: {data?.length} книги</p>
				<label className='flex w-full cursor-pointer flex-col sm:w-fit sm:flex-row sm:items-center'>
					<span className='hidden sm:inline'>Сортировка:</span>{' '}
					<Select
						onValueChange={(val: string | null) =>
							handleChangeVal(val, 'sort')
						}
					>
						<SelectTrigger
							className={'w-full sm:w-fit sm:border-none'}
						>
							{selectedSearch ? (
								<span>
									{
										SORT_ITEMS.find(
											item =>
												item.value === selectedSearch
										)?.label
									}
								</span>
							) : (
								<span>По умолчанию</span>
							)}
						</SelectTrigger>
						<SelectContent>
							{SORT_ITEMS.map((item, index) => (
								<SelectItem key={index} value={item.value}>
									{item.label}
								</SelectItem>
							))}
						</SelectContent>
					</Select>
				</label>
			</div>
			<div className='vsm:grid-cols-1 mt-5 grid grid-cols-2 gap-2'>
				{isPending ? (
					[...new Array(6)].map((_, i) => (
						<Skeleton
							key={i}
							className='bg-accent-light h-40 w-full'
						/>
					))
				) : data.length > 0 ? (
					data.map(book => <LibraryBook key={book.id} book={book} />)
				) : (
					<p className='text-secondary text-center'>
						Книги не найдены!
					</p>
				)}
			</div>
		</div>
	)
}
