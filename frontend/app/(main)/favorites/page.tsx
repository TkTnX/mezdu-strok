import { FavoriteAuthors, FavoriteBooks } from "@/widgets"

const FavoritesPage = () => {
	return (
		<section className='vsm:pl-10! flex-1 p-4'>
			<h1 className='text-2xl font-bold sm:text-4xl'>Избранное</h1>
			<FavoriteBooks />
			<FavoriteAuthors />
		</section>
	)
}

export default FavoritesPage
