import * as z from 'zod'

export const publisherResolver = z.object({
	title: z
		.string('Название обязательно')
		.nonempty('Название обязательно')
		.min(4, 'Минимальная длина названия - 4 символа'),
})

export type PublisherResolverType = z.infer<typeof publisherResolver>
