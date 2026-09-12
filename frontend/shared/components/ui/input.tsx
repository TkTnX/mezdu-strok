import { RegisterOptions, UseFormRegisterReturn } from 'react-hook-form'

interface Props {
	label: string
	placeholder: string
	icon: React.ReactNode
	additional?: React.ReactNode
	className?: string
	register: UseFormRegisterReturn
	error?: string
	type?: string
}

export const Input = ({
	label,
	placeholder,
	icon,
	additional,
	className,
	register,
	error,
	type
}: Props) => {
	return (
		<label className={className}>
			<span className='font-semibold text-black'>{label}</span>
			<div className='border-accent-light mt-2 flex w-full items-center gap-3 rounded-lg border p-3'>
				{icon}
				<input
					{...register}
					className='flex-1'
					placeholder={placeholder}
					type={type}
				/>
				{additional}
			</div>
			{error && <p className='text-left text-xs text-red-500'>{error}</p>}
		</label>
	)
}
