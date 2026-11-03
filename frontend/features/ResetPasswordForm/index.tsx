'use client'
import { Button, Input } from '@/shared'
import { useCodes } from '@/shared/hooks'
import {  SubmitEvent, useState } from 'react'

export const ResetPasswordForm = () => {
    const [email, setEmail] = useState('')
    const [error, setError] = useState<null | string>(null)
    const { useSendCodeToEmail } = useCodes()
    const {mutate, isPending} = useSendCodeToEmail()
	const onSubmit = (e: SubmitEvent<HTMLFormElement>) => {
        e.preventDefault()
        if(!email) setError('Введите почту!')
		mutate(email)
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
                    name='email'
                    error={error || ''}
				/>
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

// TODO: В админке отображать данные
// TODO: 