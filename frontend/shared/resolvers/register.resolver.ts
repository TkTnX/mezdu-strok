import * as z from 'zod'

export const registerResolver = z.object({
    email: z.email('Почта обязательна'),
    username: z.string().min(3, 'Имя пользователя обязательно'),
    password: z.string().min(8, 'Пароль обязателен'),
    passwordRepeat: z.string().min(8, 'Пароль обязателен'),
    
})

export type RegisterResolverType = z.infer<typeof registerResolver>