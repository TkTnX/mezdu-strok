import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue
} from '@/shared'

export const Filters = () => {
	return (
		<div className='mt-5 flex flex-wrap gap-4'>
			<Select>
				<SelectTrigger>
					<SelectValue placeholder='Автор' />
				</SelectTrigger>
				<SelectContent>
					<SelectItem value='А. С. Пушкин'>А. С. Пушкин</SelectItem>
					<SelectItem value='Ф. Достоевский'>
						Ф. Достоевский
					</SelectItem>
					<SelectItem value='М. Ю. Лермонтов'>
						М. Ю. Лермонтов
					</SelectItem>
				</SelectContent>
			</Select>
			<Select>
				<SelectTrigger>
					<SelectValue placeholder='Жанр' />
				</SelectTrigger>
				<SelectContent>
					<SelectItem value='Роман'>Роман</SelectItem>
					<SelectItem value='Романтика'>Романтика</SelectItem>
					<SelectItem value='Сказка'>Сказка</SelectItem>
				</SelectContent>
			</Select>
			<Select>
				<SelectTrigger>
					<SelectValue placeholder='Издательство' />
				</SelectTrigger>
				<SelectContent>
					<SelectItem value='1'>1</SelectItem>
					<SelectItem value='2'>2</SelectItem>
					<SelectItem value='3'>3</SelectItem>
				</SelectContent>
			</Select>
			<Select>
				<SelectTrigger>
					<SelectValue placeholder='Оценка' />
				</SelectTrigger>
				<SelectContent>
					<SelectItem value='Больше 80'>Больше 80</SelectItem>
					<SelectItem value='До 60'>До 60</SelectItem>
					<SelectItem value='3'>3</SelectItem>
				</SelectContent>
			</Select>
			<button disabled={true} className='text-main disabled:opacity-50 disabled:pointer-events-none'>Сбросить</button>
		</div>
	)
}
