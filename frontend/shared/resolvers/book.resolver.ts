import * as z from 'zod'

export const bookResolver = z.object({
	title: z
		.string('Название обязательно')
		.nonempty('Название обязательно')
		.min(3, 'Минимальная длина заголовка - 3 символа'),
	description: z
		.string('Описание обязательно')
		.nonempty('Описание обязательно')
		.min(300, 'Минимальная длина рецензии - 300 символов'),
	authorId: z.string('Автор обязателен').nonempty('Автор обязателен'),
	genreId: z.string('Жанр обязателен').nonempty('Жанр обязателен'),
	publisherId: z.string('Издательство обязательно').nonempty('Издательство обязательно'),
	preview: z.string().optional(),
	pages: z.number('Количество страниц обязательно').min(1),
	year: z.number('Год обязателен').min(1),
	tags: z.array(z.string()).min(1, 'Минимальное количество тегов - 1')
})

export type BookResolverType = z.infer<typeof bookResolver>
