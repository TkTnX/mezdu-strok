import { axiosInstance } from "@/shared/lib"
import { PublisherResolverType } from "@/shared/resolvers"
import { IAuthor } from "@/shared/types"

export const getPublishers = async ({take}: {take: number}): Promise<IAuthor[]> => {
	const { data } = await axiosInstance.get('publishers', {params: {take}})
	return data
}

export const createPublisher = async (
	values: PublisherResolverType
): Promise<IAuthor> => {
	const { data } = await axiosInstance.post('publishers', values)
	return data
}