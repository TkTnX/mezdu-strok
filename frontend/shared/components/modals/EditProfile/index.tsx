import { AddMoreInfoForm } from '@/features'
import {
	AlertDialog,
	AlertDialogCancel,
	AlertDialogContent,
	AlertDialogTitle,
	AlertDialogTrigger,
	Button
} from '@/shared/components/ui'
import { IUser } from '@/shared/types'
import { X } from 'lucide-react'

interface Props {
	user: IUser | null
	open: boolean
	setOpen: (open: boolean) => void
}

export const EditProfile = ({ user, open, setOpen }: Props) => {
	return (
		<AlertDialog open={open} onOpenChange={setOpen}>
			<AlertDialogTrigger
				render={
					<Button variant={'outline'} className={'h-10'}>
						Редактировать профиль
					</Button>
				}
			></AlertDialogTrigger>
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
				<AlertDialogTitle>Редактирование профиля</AlertDialogTitle>
				<AddMoreInfoForm setOpen={setOpen} user={user} />
			</AlertDialogContent>
		</AlertDialog>
	)
}
