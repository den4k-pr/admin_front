import { FC } from 'react'

import { useReview } from '@/screens/dashboard/reviews/list/useReview'

import Heading from '@/ui/heading/Heading'
import Layout from '@/ui/layout/Layout'
import Table from '@/ui/table/Table'

const ReviewList: FC = () => {
	const { mutate, isLoading, response } = useReview()

	return (
		<Layout title="Review list">
			<div className="flex-center-between relative">
				<Heading isMargin={false}>Review list</Heading>
			</div>
			<Table
				items={
					response?.data.length
						? response.data.map(review => ({
								id: review.id,
								name: review.description,
								image: review.movie.poster,
								viewLink: `/movie/${review.movie.id}`,
								removeHandler: () => mutate(review.id)
						  }))
						: []
				}
				isLoading={isLoading}
			/>
		</Layout>
	)
}

export default ReviewList
