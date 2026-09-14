import * as z from 'zod'

export const reviewResolver = z.object({
	characters: z.number('Оцените книгу по качеству персонажей').min(1).max(10),
	story: z.number('Оцените книгу по качеству сюжета').min(1).max(10),
	language: z.number('Оцените книгу по качеству языка').min(1).max(10),
	idea: z.number('Оцените книгу по качеству идей').min(1).max(10),
	impression: z
		.number('Оцените книгу по качеству впечатления')
		.min(1)
		.max(10),
	title: z
		.string('Название обязательно')
		.nonempty('Название обязательно')
		.min(3, 'Минимальная длина заголовка - 3 символа'),
	text: z
		.string('Отзыв обязателен')
		.nonempty('Отзыв обязателен')
		.min(300, 'Минимальная длина рецензии - 300 символов')
})

export type ReviewResolverType = z.infer<typeof reviewResolver>
