import { getPublishers } from "@/shared/api";
import { useQuery } from "@tanstack/react-query";

export function usePublishers() {
    const useGetPublishers = ({ take }: { take: number }) =>
		useQuery({
			queryKey: ['publishers'],
			queryFn: () => getPublishers({take})
		})

    return {
		useGetPublishers
	}
}