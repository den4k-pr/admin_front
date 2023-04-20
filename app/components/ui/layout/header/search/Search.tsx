import { motion } from 'framer-motion'
import { FC } from 'react'
import { BiSearch } from 'react-icons/bi'

import Field from '@/ui/field/Field'
import { useSearch } from '@/ui/layout/header/search/useSearch'
import MovieItem from '@/ui/movie-item/MovieItem'

import { menuAnimation } from '@/utils/animation/fade'

import styles from './Search.module.scss'

const Search: FC = () => {
	const { data, handleSearch, searchTerm, isSuccess } = useSearch()

	return (
		<div className={styles.search_top}>
			<label>
				<Field
					placeholder="Search videos..."
					value={searchTerm}
					onChange={handleSearch}
					Icon={BiSearch}
				/>
			</label>
			{isSuccess && (
				<motion.div
					initial={false}
					animate={isSuccess ? 'open' : 'closed'}
					variants={menuAnimation}
					className={styles.result}
				>
					{data?.length ? (
						data.map(movie => <MovieItem movie={movie} key={movie.id} />)
					) : (
						<div>Movies not found!</div>
					)}
				</motion.div>
			)}
		</div>
	)
}

export default Search
