'use client'
import { Button, Input, InputOTP, InputOTPGroup, InputOTPSlot } from '@/shared'
import { showErrorMessage } from '@/shared/helpers'
import { useAuth, useCodes } from '@/shared/hooks'
import { REGEXP_ONLY_DIGITS } from 'input-otp'
import { useRouter } from 'next/navigation'
import { SubmitEvent, useState } from 'react'
import { toast } from 'react-toastify'

export const ResetPasswordForm = () => {
	const router = useRouter()
	const [newPassword, setNewPassword] = useState<null | string>(null)
	const [code, setCode] = useState<null | string>(null)
	const [openCode, setOpenCode] = useState(false)
	const [email, setEmail] = useState('')
	const [error, setError] = useState<null | string>(null)
	const { useSendCodeToEmail } = useCodes()
	const { useResetPassword } = useAuth()
	const { mutate: sendCodeMutation, isPending } = useSendCodeToEmail()
	const { mutate: resetPasswordMutation } = useResetPassword()
	const onSubmit = (e: SubmitEvent<HTMLFormElement>) => {
		e.preventDefault()
		if (!email) {
			setError('Введите почту!')
		}
		if (!code && !newPassword) {
			sendCodeMutation(
				{ email, subject: 'Восстановление пароля' },
				{
					onSuccess: () => {
						toast.success('Письмо отправлено на почту!')
						setOpenCode(true)
						setError(null)
					}
				}
			)
		} else {
			resetPasswordMutation(
				{
					email,
					code: code!,
					newPassword: newPassword!
				},
				{
					onError: err => showErrorMessage(err),
					onSuccess: () => {
						toast.success('Пароль изменён!')
						router.push('/auth/login')
					}
				}
			)
		}
	}
	return (
		<div className='w-full'>
			<form
				onSubmit={e => onSubmit(e)}
				className='mt-4 flex w-full flex-col gap-2'
			>
				<Input
					onChange={value => setEmail(value)}
					placeholder='Email'
					label='Ваш Email'
					type='email'
					error={error || ''}
				/>
				{openCode && (
					<>
						<InputOTP
							onChange={value => setCode(value)}
							pattern={REGEXP_ONLY_DIGITS}
							maxLength={6}
						>
							<InputOTPGroup className='w-full'>
								<InputOTPSlot
									className='border-accent-light flex-1 focus-within:outline-0'
									index={0}
								/>
								<InputOTPSlot
									className='border-accent-light flex-1 focus-within:outline-0'
									index={1}
								/>
								<InputOTPSlot
									className='border-accent-light flex-1 focus-within:outline-0'
									index={2}
								/>
								<InputOTPSlot
									className='border-accent-light flex-1 focus-within:outline-0'
									index={3}
								/>
								<InputOTPSlot
									className='border-accent-light flex-1 focus-within:outline-0'
									index={4}
								/>
								<InputOTPSlot
									className='border-accent-light flex-1 focus-within:outline-0'
									index={5}
								/>
							</InputOTPGroup>
						</InputOTP>
						<Input
							onChange={value => setNewPassword(value as string)}
							placeholder='Новый пароль'
							label='Новый пароль'
							type='password'
							error={error || ''}
						/>
					</>
				)}
				<Button
					type='submit'
					disabled={
						isPending || (openCode && (!code || !newPassword))
					}
					className={'h-10 w-full'}
				>
					{openCode ? 'Изменить пароль' : 'Отправить код'}
				</Button>
			</form>
		</div>
	)
}

