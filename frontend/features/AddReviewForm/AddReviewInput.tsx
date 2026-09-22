import {
	ReviewResolverType,
	Tooltip,
	TooltipContent,
	TooltipTrigger
} from '@/shared'
import { Info } from 'lucide-react'
import { UseFormRegisterReturn } from 'react-hook-form'

interface Props {
	label: string
	name: keyof ReviewResolverType
	register: UseFormRegisterReturn
	value: number
	tooltip: string
}

export const AddReviewInput = ({
	label,
	tooltip,
	name,
	register,
	value
}: Props) => {
	return (
		<label className='flex-1'>
			<p className='flex items-center justify-between text-xs font-semibold'>
				<Tooltip>
					<TooltipTrigger className='flex items-center gap-1'>
						{label} <Info size={14} className='min-w-3.5' />
					</TooltipTrigger>
					<TooltipContent className='bg-bg border-main text-md border'>
						{tooltip}
					</TooltipContent>
				</Tooltip>
				<span className='text-main text-base font-bold'>
					{value}
				</span>{' '}
			</p>
			<input
				defaultValue={1}
				{...register}
				min={1}
				max={10}
				name={name}
				type='range'
				className='accent-main w-full sm:mt-3'
			/>
		</label>
	)
}
