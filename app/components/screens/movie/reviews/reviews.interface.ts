import { IReview } from '@/shared/interfaces/review.interface'

export interface IReviews {
	moviedId: number
	reviews: IReview[]
	isLoading: boolean
}
