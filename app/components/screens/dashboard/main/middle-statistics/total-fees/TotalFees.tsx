import { FC } from 'react'
import { MdOutlineQueryStats } from 'react-icons/md'

import AnimatedCounter from '@/ui/AnimatedCounter'
import ProgressBar from '@/ui/prorgess-bar/ProgressBar'

import styles from './Totalfess.module.scss'

const Totalfess: FC<{ total: number }> = ({ total }) => {
	return (
		<div className={styles.fess}>
			<ProgressBar percent={Math.round((total * 100) / 3000000000)} />
			<div className={styles.icon}>
				<MdOutlineQueryStats />
			</div>
			<div className={styles.name}>Total fess</div>
			<div className={styles.total}>
				$<AnimatedCounter to={total} />
			</div>
		</div>
	)
}

export default Totalfess
