import { AxiosError } from 'axios'
import { toast } from 'react-toastify'

export function showErrorMessage(error: unknown) {
	console.log(error)
	const err = error as Error | AxiosError
	if (err instanceof AxiosError) {
		if (Array.isArray(err.response?.data.message))
			return err.response?.data.message.map((msg: string) =>
				toast.error(msg)
			)

		return toast.error(err.response?.data.message)
	}

	return toast.error(err.message)
}
