import { AddQuoteForm } from '@/features'
import {
	AlertDialog,
	AlertDialogCancel,
	AlertDialogContent,
	AlertDialogTitle,
	AlertDialogTrigger
} from '@/shared/components/ui'
import { X } from 'lucide-react'

export const AddQuote = () => {
	return (
		<AlertDialog>
			<AlertDialogTrigger
				className={
					'bg-primary bg-main hover:bg-main/90 h-10 rounded-lg px-2.5 text-white transition'
				}
			>
				Добавить цитату
			</AlertDialogTrigger>
			<AlertDialogContent
				className={'max-h-[98vh] max-w-100! overflow-y-auto bg-white'}
			>
				<AlertDialogCancel
					className={
						'absolute top-0 right-0 border-none! text-black hover:bg-transparent hover:text-black'
					}
				>
					<X />
				</AlertDialogCancel>
                <AlertDialogTitle>Добавить цитату</AlertDialogTitle>
                <AddQuoteForm />
			</AlertDialogContent>
		</AlertDialog>
	)
}
