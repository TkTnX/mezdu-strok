import { getUser, IUser } from '@/shared'
import { Profile } from '@/widgets'

const UserPage = async ({
	params
}: {
	params: Promise<{ username: string }>
}) => {
	const { username } = await params
	const user: IUser = await getUser(username)

	return <Profile userByUsername={user} />
}

export default UserPage
