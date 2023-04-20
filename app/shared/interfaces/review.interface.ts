import { IMovie } from '@/shared/interfaces/movie.interface'
import { IUser } from '@/shared/interfaces/user.interface'

export interface IReview {
	id: number
	user: IUser
	movie: IMovie
	description: string
}

export interface IReviewDto extends Pick<IReview, 'description'> {
	moviedId: number
}
