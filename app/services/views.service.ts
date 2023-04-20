import { axiosClassic } from '../api/interceptor'

export const ViewsService = {
	async updateViews(moviedId: string) {
		return axiosClassic.patch(`/views/update/${moviedId}`)
	}
}
