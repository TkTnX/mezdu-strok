'use client'
import { AddReviewInput } from './AddReviewInput'
import { AlignLeft, CaseSensitive } from 'lucide-react'
import { AddReviewConfirm } from './AddReviewConfirm'
import { AddReviewTop } from './AddReviewTop'
import { useForm } from 'react-hook-form'
import { useState } from 'react'
import { cn, useReviews } from '@/shared'
import { countRating } from '@/shared/helpers'
import { toast } from 'react-toastify'
import { AxiosError } from 'axios'

interface Props {
	bookId: string
}

export const AddReview = ({ bookId }: Props) => {
	const { useCreateReview } = useReviews()
	const [values, setValues] = useState({
		characters: 5,
		idea: 5,
		impression: 1,
		language: 5,
		story: 5
	})
	const rating = countRating(values)
	const [title, setTitle] = useState('')
	const [review, setReview] = useState('')

	const { register, handleSubmit, reset } = useForm()
	const { mutate, isPending } = useCreateReview({
		onSuccess: () => {
			reset()
			setValues({
				characters: 5,
				idea: 5,
				impression: 1,
				language: 5,
				story: 5
			})
			toast.success('Рецензия успешно создана')
		},
		onError: error => {
			const err = error as AxiosError | Error
			if (err instanceof AxiosError)
				return err.response?.data.message.map((msg: string) =>
					toast.error(msg)
				)
			return toast.error(err.message)
		}
	})

	return (
		<div className='w-full flex-1 lg:w-auto'>
			<AddReviewTop />
			<div className='mt-2 rounded-2xl border'>
				<form
					onSubmit={handleSubmit(() =>
						mutate({ title, review, bookId, rating, ...values })
					)}
				>
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
								{...register('title', { required: true })}
								onChange={e => setTitle(e.target.value)}
								type='text'
								className='placeholder:text-secondary w-full px-3 py-4'
								placeholder='Заголовок рецензии'
							/>
							<span
								className={cn('text-secondary text-sm', {
									'text-red-500': title.length > 100
								})}
							>
								{title.length}/100
							</span>
						</label>
						<label className='border-secondary/40 focus-within:border-main relative mt-4 flex items-start rounded-2xl border px-3 py-4'>
							<AlignLeft size={22} />
							<textarea
								{...register('text', { required: true })}
								onChange={e => setReview(e.target.value)}
								placeholder='Текст рецензии (от 300 до 8500 символов)'
								className='placeholder:text-secondary h-40! w-full resize-none px-3 outline-none'
							></textarea>
							<span
								className={cn(
									'text-secondary absolute right-3 bottom-3 text-sm',
									{
										'text-red-500': review.length > 8500
									}
								)}
							>
								{review.length}/8500
							</span>
						</label>
					</div>
					<AddReviewConfirm isPending={isPending} rating={rating} />
				</form>
			</div>
		</div>
	)
}
