'use client'
import { Button, useAuth } from '@/shared'
import { useRouter } from 'next/navigation'
import { toast } from 'react-toastify'

export const LogoutButton = () => {
	const router = useRouter()
	const { useLogoutMutation } = useAuth()
	const { mutate, isPending } = useLogoutMutation({
		onSuccess: () => {
			toast.success("Успешный выход из аккаунта!")
			router.push('/')
		}
	})
	
	return <Button disabled={isPending} onClick={() => mutate()} className='h-10 disabled:opacity-50 disabled:pointer-events-none'>Выйти из аккаунта</Button>
}
