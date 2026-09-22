import {
	Combobox,
	ComboboxContent,
	ComboboxEmpty,
	ComboboxInput,
	ComboboxItem,
	ComboboxList
} from '@/shared/components/ui'
import { useBooks } from '@/shared/hooks'
import { IBook } from '@/shared/types'

interface Props {
	label?: string
	icon: React.ReactNode
}

export const ChooseBook = ({ label, icon }: Props) => {
	const { useGetBooks } = useBooks()
	const { data, isPending, error } = useGetBooks({})
	return (
		<label>
			{label && <span className='font-semibold text-black'>{label}</span>}
			<div className='border-accent-light mt-2 flex w-full items-center gap-3 rounded-lg border p-3'>
				{icon}
				<Combobox
					items={data}
					itemToStringValue={(book: IBook) => book.title}
				>
					<ComboboxInput placeholder='Выберите книгу' />
					<ComboboxContent>
						<ComboboxEmpty>Книги не найдены</ComboboxEmpty>
						<ComboboxList>
							{item => (
								<ComboboxItem key={item} value={item}>
									{item.title}
								</ComboboxItem>
							)}
						</ComboboxList>
					</ComboboxContent>
				</Combobox>
			</div>
		</label>
	)
}
