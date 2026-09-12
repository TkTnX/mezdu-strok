import * as z from 'zod'

export const loginResolver = z.object({
    emailOrUsername: z.email('Почта обязательна').or(z.string().min(3, 'Имя пользователя обязательно')),
    password: z.string().min(8, 'Пароль обязателен'),
})

export type LoginResolverType = z.infer<typeof loginResolver>