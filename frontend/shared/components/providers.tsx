'use client'
import { TooltipProvider } from '@/shared/components/ui'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

export const Providers = ({ children }: { children: React.ReactNode }) => {
	const queryClient = new QueryClient()
	return (
		<QueryClientProvider client={queryClient}>
			<TooltipProvider>{children}</TooltipProvider>
		</QueryClientProvider>
	)
}
