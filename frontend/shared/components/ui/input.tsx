interface Props {
	label: string
	name: string
	placeholder: string
	icon: React.ReactNode
	additional?: React.ReactNode
	className?: string
}

export const Input = ({
	label,
	name,
	placeholder,
	icon,
	additional,
	className
}: Props) => {
	return (
		<label className=''>
			<span className='font-semibold text-black'>{label}</span>
			<div className='border-accent-light mt-2 flex w-full items-center gap-3 rounded-lg border p-3'>
				{icon}
				<input
					className='flex-1'
					name={name}
					placeholder={placeholder}
				/>
				{additional}
			</div>
		</label>
	)
}
