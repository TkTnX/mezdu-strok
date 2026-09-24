'use client'
import { AlignLeft, CaseSensitive } from 'lucide-react'
import { useForm } from 'react-hook-form'
import {
	cn,
	Input,
	reviewResolver,
	ReviewResolverType,
	useReviews
} from '@/shared'
import { countRating, showErrorMessage } from '@/shared/helpers'
import { toast } from 'react-toastify'
import { AddReviewInput } from './AddReviewInput'
import { AddReviewConfirm } from './AddReviewConfirm'
import { useQueryClient } from '@tanstack/react-query'
import { zodResolver } from '@hookform/resolvers/zod'

interface Props {
	bookId: string
}

export const AddReviewForm = ({ bookId }: Props) => {
	const queryClient = useQueryClient()
	const { useCreateReview } = useReviews()

	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
		watch
	} = useForm<ReviewResolverType>({
		resolver: zodResolver(reviewResolver)
	})
	const rating = countRating({
		characters: watch('characters'),
		idea: watch('idea'),
		impression: watch('impression'),
		language: watch('language'),
		story: watch('story')
	})

	const { mutate, isPending } = useCreateReview({
		onSuccess: () => {
			reset()
			queryClient.invalidateQueries({ queryKey: ['reviews', {}] })
			toast.success('Рецензия успешно создана')
		},
		onError: error => showErrorMessage(error)
	})
	return (
		<form
			onSubmit={handleSubmit(data => mutate({ ...data, bookId, rating }))}
		>
			<div className='border-secondary/40 items-center justify-between gap-5 border-b px-4 pt-4 pb-2 sm:grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4'>
				<div className='flex w-full items-center gap-5'>
					<AddReviewInput
						value={watch('story')}
						register={register('story', { valueAsNumber: true })}
						name='story'
						label='Сюжет / Композиция'
						tooltip='Сюжет / Композиция - насколько хорошо построена история: развитие событий, темп, логика, кульминация и финал.'
					/>
					<div className='bg-secondary/20 hidden h-13 w-px sm:block' />
				</div>
				<div className='flex w-full items-center gap-5'>
					<AddReviewInput
						register={register('characters', {
							valueAsNumber: true
						})}
						value={watch('characters')}

						name='characters'
						label='Персонажи / Психология'
						tooltip='Персонажи / Психология - насколько глубоко раскрыты персонажи, их характеры, мотивация, эмоции и развитие.'
					/>
					<div className='bg-secondary/20 hidden h-13 w-px md:block lg:hidden xl:block' />
				</div>
				<div className='flex w-full items-center gap-5'>
					<AddReviewInput
						value={watch('language')}
						register={register('language', { valueAsNumber: true })}
						name='language'
						label='Язык / Стиль'
						tooltip='Язык / Стиль - насколько выразительно автор использует язык: слог, диалоги, описания, образность и авторский стиль.'
					/>
					<div className='bg-secondary/20 hidden h-13 w-px sm:block' />
				</div>
				<AddReviewInput
					value={watch('idea')}
					register={register('idea', { valueAsNumber: true })}
					name='idea'
					label='Идея / Глубина'
					tooltip='Идея / Глубина - насколько интересны мысли и темы книги, её основная идея, подтекст и вопросы, которые она заставляет обдумать.'
				/>
			</div>
			<div className='mt-3 px-4'>
				<AddReviewInput
					value={watch('impression')}
					register={register('impression', { valueAsNumber: true })}
					name='impression'
					label='Общее впечатление'
					tooltip='Общее впечатление - насколько сильно книга повлияла лично на тебя и какие эмоции и ощущения оставила после прочтения.'
				/>
			</div>
			<div className='text-main mt-3 px-4'>
				<Input
					className='placeholder:text-secondary w-full'
					icon={<CaseSensitive />}
					placeholder='Заголовок рецензии'
					register={register('title')}
					error={errors.title?.message}
					additional={
						<span
							className={cn('text-secondary text-sm', {
								'text-red-500': watch('title')?.length > 100
							})}
						>
							{watch('title')?.length}/100
						</span>
					}
				/>
				<label className='border-accent-light relative mt-4 flex items-start rounded-2xl border px-3 py-4'>
					<AlignLeft size={22} />
					<textarea
						{...register('review')}
						placeholder='Текст рецензии (от 300 до 8500 символов)'
						className='placeholder:text-secondary h-40! w-full resize-none px-3 outline-none'
					></textarea>
					<span
						className={cn(
							'text-secondary absolute right-3 bottom-3 text-sm',
							{
								'text-red-500': watch('review')?.length > 8500
							}
						)}
					>
						{watch('review')?.length}/8500
					</span>
				</label>
				{errors.review && (
					<p className='my-2 text-left text-xs text-red-500'>
						{errors.review.message}
					</p>
				)}
			</div>
			<AddReviewConfirm isPending={isPending} rating={rating} />
		</form>
	)
}
