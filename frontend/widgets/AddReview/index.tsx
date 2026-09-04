'use client'
import { AddReviewInput } from './AddReviewInput'
import { AlignLeft, CaseSensitive } from 'lucide-react'
import { AddReviewConfirm } from './AddReviewConfirm'
import { AddReviewTop } from './AddReviewTop'
import { useForm } from 'react-hook-form'
import {  useState } from 'react'
export const AddReview = () => {
	const [values, setValues] = useState({
		characters: 5,
		idea: 5,
		impression: 1,
		language: 5,
		story: 5
	})
	
	const { register, handleSubmit } = useForm()

	return (
		<div className='w-full flex-1 lg:w-auto'>
			<AddReviewTop />
			<div className='mt-2 rounded-2xl border'>
				<form onSubmit={handleSubmit(val => console.log(val))}>
					<div className='border-secondary/40 items-center justify-between gap-5 border-b px-4 pt-4 pb-2 sm:grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4'>
						<div className='flex w-full items-center gap-5'>
							<AddReviewInput
								setValues={setValues}
								values={values}
								register={register}
								name='story'
								label='Сюжет / Композиция'
							/>
							<div className='bg-secondary/20 hidden h-13 w-px sm:block' />
						</div>
						<div className='flex w-full items-center gap-5'>
							<AddReviewInput
								register={register}
								setValues={setValues}
								values={values}
								name='characters'
								label='Персонажи / Психология'
							/>
							<div className='bg-secondary/20 hidden h-13 w-px md:block lg:hidden xl:block' />
						</div>

						<div className='flex w-full items-center gap-5'>
							<AddReviewInput
								setValues={setValues}
								values={values}
								register={register}
								name='language'
								label='Язык / Стиль'
							/>
							<div className='bg-secondary/20 hidden h-13 w-px sm:block' />
						</div>

						<AddReviewInput
							setValues={setValues}
							values={values}
							register={register}
							name='idea'
							label='Идея / Глубина'
						/>
					</div>
					<div className='mt-3 px-4'>
						<AddReviewInput
							setValues={setValues}
							values={values}
							register={register}
							name='impression'
							label='Общее впечатление'
						/>
					</div>
					<div className='text-main mt-3 px-4'>
						<label className='border-secondary/40 focus-within:border-main flex items-center rounded-2xl border px-3'>
							<CaseSensitive />
							<input
								type='text'
								className='placeholder:text-secondary w-full px-3 py-4'
								placeholder='Заголовок рецензии'
							/>
							<span className='text-secondary text-sm'>
								0/100
							</span>
						</label>
						<label className='border-secondary/40 focus-within:border-main relative mt-4 flex items-start rounded-2xl border px-3 py-4'>
							<AlignLeft size={22} />
							<textarea
								placeholder='Текст рецензии (от 300 до 8500 символов)'
								className='placeholder:text-secondary h-40! w-full resize-none px-3 outline-none'
							></textarea>
							<span className='text-secondary absolute right-3 bottom-3 text-sm'>
								0/8500
							</span>
						</label>
					</div>
					<AddReviewConfirm values={values} />
				</form>
			</div>
		</div>
	)
}
