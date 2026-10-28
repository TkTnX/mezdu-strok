import * as z from 'zod'

export const authorResolver = z.object({
	name: z
		.string('Имя обязательно')
		.nonempty('Имя обязательно')
		.min(6, 'Минимальная длина имени - 6 символов'),
	bio: z
		.string('Описание обязательно')
		.nonempty('Описание обязательно'),
	avatar: z.any().optional(),
})

export type AuthorResolverType = z.infer<typeof authorResolver>
