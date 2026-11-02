export const declensions = (num: number, words: string[]) => {
	if (num === 1 || num % 10 === 1) {
		return `${num} ${words[0]}`
	} else if (num <= 4 || (num % 10 >= 2 && num % 10 <= 4)) {
		return `${num} ${words[1]}`
	} else {
		return `${num} ${words[2]}`
	}
}
