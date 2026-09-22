import * as z from 'zod'

export const quoteResolver = z.object({
    quote: z.string('Цитата должна быть строкой').nonempty('Цитата обязательна'),
})

export type QuoteResolverType = z.infer<typeof quoteResolver>