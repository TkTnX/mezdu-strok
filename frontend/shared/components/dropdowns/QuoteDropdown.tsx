import { DeleteQuoteButton } from '@/features'
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuTrigger
} from '@/shared/components/ui'
import { MoreHorizontal } from 'lucide-react'

export const QuoteDropdown = ({ quoteId }: { quoteId: string }) => {
	return (
		<DropdownMenu>
			<DropdownMenuTrigger render={<button />}>
				<MoreHorizontal className='text-secondary' />
			</DropdownMenuTrigger>
			<DropdownMenuContent className={'w-40'}>
				<DeleteQuoteButton quoteId={quoteId} />
			</DropdownMenuContent>
		</DropdownMenu>
	)
}
