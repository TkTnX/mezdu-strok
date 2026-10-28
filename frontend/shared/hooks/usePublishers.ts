import { createPublisher, getPublishers } from "@/shared/api";
import { PublisherResolverType } from "@/shared/resolvers";
import { IPublisher } from "@/shared/types";
import { useMutation, useQuery } from "@tanstack/react-query";

export function usePublishers() {
    const useGetPublishers = ({ take }: { take: number }) =>
		useQuery({
			queryKey: ['publishers'],
			queryFn: () => getPublishers({take})
		})
	
	const useCreatePublisher = () =>
		useMutation({
			mutationFn: (
				values: PublisherResolverType
			): Promise<IPublisher> => createPublisher(values)
		})

    return {
		useGetPublishers,
		useCreatePublisher
	}
}