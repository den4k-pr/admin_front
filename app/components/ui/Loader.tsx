import { FC } from 'react'
import Skeleton, { SkeletonProps } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

import { useTheme } from '@/hooks/useTheme'

const Loader: FC<SkeletonProps> = props => {
	const { isDarkTheme } = useTheme()
	return (
		<Skeleton
			baseColor={isDarkTheme ? '#424451' : '#D7E3FF'}
			highlightColor={isDarkTheme ? '#636571' : '#E8EDFB'}
			{...props}
		/>
	)
}

export default Loader
