import { Favorites } from '@/widgets'
// TODO: ADD QUOTES
// TODO: ADMIN PAGE
const FavoritesPage = () => {
	return (
		<section className='vsm:pl-10! flex-1 p-4'>
			<h1 className='text-2xl font-bold sm:text-4xl'>Избранное</h1>
			<Favorites />
		</section>
	)
}

export default FavoritesPage
