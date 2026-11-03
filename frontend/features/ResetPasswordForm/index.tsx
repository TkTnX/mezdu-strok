'use client'
import { Button, Input, InputOTP, InputOTPGroup, InputOTPSlot } from '@/shared'
import { useAuth, useCodes } from '@/shared/hooks'
import { REGEXP_ONLY_DIGITS } from 'input-otp'
import { SubmitEvent, useState } from 'react'
import { toast } from 'react-toastify'

export const ResetPasswordForm = () => {
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
		} else if (email && (!newPassword || !code)) {
			setError('Заполните все поля!')
		}
		if (!code && !newPassword) {
			sendCodeMutation(
				{ email, subject: 'Восстановление пароля' },
				{
					onSuccess: () => {
						toast.success('Письмо отправлено на почту!')
						setOpenCode(true)
					}
				}
			)
		} else {
			resetPasswordMutation({
				email,
				code: code!,
				newPassword: newPassword!
			})
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
					disabled={isPending}
					className={'h-10 w-full'}
				>
					Отправить код
				</Button>
			</form>
		</div>
	)
}

// TODO: Функция удаления кода через 5 минут

// TODO: В админке отображать данные
