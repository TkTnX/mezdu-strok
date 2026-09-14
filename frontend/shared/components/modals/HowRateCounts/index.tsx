import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
	AlertDialog,
	AlertDialogCancel,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogTitle,
	AlertDialogTrigger
} from '@/shared/components/ui'
import { RATE_ITEMS } from '@/shared/constants'
import { X } from 'lucide-react'
import Image from 'next/image'

export const HowRateCounts = () => {
	return (
		<AlertDialog>
			<AlertDialogTrigger className='text-main border-main border-b border-dashed text-xs text-nowrap'>
				Как считается оценка?
			</AlertDialogTrigger>
			<AlertDialogContent
				className={
					'max-h-[98vh]  max-w-100! overflow-y-auto bg-white'
				}
			>
				<AlertDialogCancel
					className={
						'absolute top-0 right-0 border-none! text-black hover:bg-transparent hover:text-black'
					}
				>
					<X />
				</AlertDialogCancel>
				<AlertDialogTitle>
					Система оценивания «Между строк»
				</AlertDialogTitle>
				<AlertDialogDescription>
					Уникальная авторская методика подсчета баллов за книжное
					произведение. Симбиоз математики и химии эмоций, включает в
					себя 4 параметра образующих фундамент оценки и один
					множитель.
				</AlertDialogDescription>
				<Image
					src={'/images/rate-system.jpg'}
					width={345}
					height={85}
					alt='Расчёт рейтинга'
					className='mx-auto'
				/>

				<Accordion>
					{RATE_ITEMS.map((item, index) => (
						<AccordionItem
							key={index}
							className={'border-b-gray-300'}
						>
							<AccordionTrigger
								className={'border-b-0 font-bold uppercase'}
							>
								{index + 1}. {item.title}
							</AccordionTrigger>
							<AccordionContent>
								{item.description}
							</AccordionContent>
						</AccordionItem>
					))}
				</Accordion>
			</AlertDialogContent>
		</AlertDialog>
	)
}
