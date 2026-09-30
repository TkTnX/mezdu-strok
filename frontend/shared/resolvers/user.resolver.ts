import * as z from 'zod'

export const updateUserResolver = z.object({
	firstname: z.string().min(3, 'Имя обязательно'),
	lastname: z.string().min(3, 'Фамилия обязательна'),
	bio: z.string().optional(),
	avatar: z.any().optional(),
	username: z.string().min(3, 'Имя пользователя обязательно')
})
export const updateUserRegResolver = z.object({
	firstname: z.string().min(3, 'Имя обязательно'),
	lastname: z.string().min(3, 'Фамилия обязательна'),
	bio: z.string().optional(),
	avatar: z.any().optional(),
	username: z.string().optional()
})

export type UpdateUserType = z.infer<typeof updateUserResolver>
export type UpdateUserRegType = z.infer<typeof updateUserRegResolver>
