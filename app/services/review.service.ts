import { IReview, IReviewDto } from '@/shared/interfaces/review.interface'

import interceptor from '../api/interceptor'

export const ReviewService = {
	async createReview(body: IReviewDto) {
		return interceptor.post<IReview>(`/review`, body)
	},

	async getReviewById(id: number) {
		return interceptor.get<IReview>(`/review/${id}`)
	},

	async getAll() {
		return interceptor.get<IReview[]>(`/review`)
	},

	async deleteReview(id: number) {
		return interceptor.delete(`/review/${id}`)
	}
}
