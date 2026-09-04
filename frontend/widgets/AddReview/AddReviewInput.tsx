import { IRating } from '@/shared'
import { Info } from 'lucide-react'
import { Dispatch, SetStateAction } from 'react'
import { FieldValues, UseFormRegister } from 'react-hook-form'

interface Props {
	label: string
	name: string
	register: UseFormRegister<FieldValues>
	setValues: Dispatch<SetStateAction<IRating>>
	values: Record<string, number>
}

export const AddReviewInput = ({ label, name, register, setValues, values }: Props) => {
	return (
		<label className='flex-1'>
			<p className='flex items-center justify-between text-xs font-semibold'>
				<span className='flex items-center gap-1'>
					{label} <Info size={14} className='min-w-3.5' />{' '}
				</span>
				<span className='text-main text-base font-bold'>
					{values[name]}
				</span>{' '}
			</p>
			<input
				value={values[name]}
				{...register(name, {required: true})}
				onChange={e => setValues(prev => ({...prev, [name]: +e.target.value}))}
				min={1}
				max={10}
				name={name}
				type='range'
				className='accent-main w-full sm:mt-3'
			/>
		</label>
	)
}
