import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'

import { ReviewService } from '@/services/review.service'

export const useReview = () => {
	const { data: response, isLoading } = useQuery(['get all reviews'], () =>
		ReviewService.getAll()
	)

	const queryClient = useQueryClient()

	const { mutate } = useMutation(
		['remove review'],
		(id: number) => ReviewService.deleteReview(id),
		{
			onSuccess() {
				queryClient.invalidateQueries(['get all reviews'])
			}
		}
	)

	return {
		response,
		isLoading,
		mutate
	}
}
