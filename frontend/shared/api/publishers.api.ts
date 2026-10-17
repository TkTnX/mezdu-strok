import { axiosInstance } from "@/shared/lib"
import { IAuthor } from "@/shared/types"

export const getPublishers = async ({take}: {take: number}): Promise<IAuthor[]> => {
	const { data } = await axiosInstance.get('publishers', {params: {take}})
	return data
}