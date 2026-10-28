import { AddPublisherForm } from '@/features'
import {
	AlertDialog,
	AlertDialogCancel,
	AlertDialogContent,
	AlertDialogTitle,
	AlertDialogTrigger
} from '@/shared/components/ui'
import { Building, ChevronRight, X } from 'lucide-react'

export const AddPublisher = () => {
	return (
		<AlertDialog>
			<AlertDialogTrigger className='border-accent-light hover:bg-main/10 flex flex-1 items-center gap-3 rounded-2xl border p-4 transition'>
				<div className='bg-main/15 hidden h-10 w-10 items-center justify-center rounded-full lg:flex'>
					<Building size={18} className='text-main' />
				</div>
				<p className='mr-auto block lg:hidden xl:block'>
					Добавить издательство
				</p>
				<ChevronRight />
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
                <AlertDialogTitle>Добавить издательство</AlertDialogTitle>
                <AddPublisherForm />
			</AlertDialogContent>
		</AlertDialog>
	)
}
