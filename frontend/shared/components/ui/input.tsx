import { cn } from '@/shared/lib/index'
import { Dispatch, SetStateAction } from 'react'
import { UseFormRegisterReturn } from 'react-hook-form'

interface Props {
	label?: string
	placeholder: string
	icon: React.ReactNode
	additional?: React.ReactNode
	className?: string
	register?: UseFormRegisterReturn
	error?: string
	type?: string
	value?: string
	onChange?: Dispatch<SetStateAction<string>>
}

export const Input = ({
	label,
	placeholder,
	icon,
	additional,
	className,
	register,
	error,
	type,
	value,
	onChange
}: Props) => {
	return (
		<label>
			{label && <span className='font-semibold text-black'>{label}</span>}
			<div className='border-accent-light mt-2 flex w-full items-center gap-3 rounded-lg border p-3'>
				{icon}
				<input
					value={value}
					onChange={(e) => onChange?.(e.target.value)}
					{...register}
					className={cn('flex-1', className)}
					placeholder={placeholder}
					type={type}
				/>
				{additional}
			</div>
			{error && <p className='text-left text-xs text-red-500'>{error}</p>}
		</label>
	)
}
