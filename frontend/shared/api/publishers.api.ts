import { axiosInstance } from "@/shared/lib"
import { PublisherResolverType } from "@/shared/resolvers"
import {  IPublisher } from "@/shared/types"

export const getPublishers = async ({take}: {take?: number}): Promise<IPublisher[]> => {
	const { data } = await axiosInstance.get('publishers', {params: {take}})
	return data
}

export const getPublisher = async (id: string): Promise<IPublisher> => {
	const { data } = await axiosInstance.get(`publishers/${id}`)
	
	return data
}

export const createPublisher = async (
	values: PublisherResolverType
): Promise<IPublisher> => {
	const { data } = await axiosInstance.post('publishers', values)
	return data
}