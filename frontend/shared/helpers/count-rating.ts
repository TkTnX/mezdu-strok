import { IRating } from '@/shared/types'

export function countRating(values: IRating) {
    const { characters, idea, impression, language, story } = values
    
	const score =
		story * 2 +
		characters * 2 +
		language * 1.5 +
		idea * 1.5 +
        impression * 2
    
	return score
}
