import cn from 'classnames'
import { forwardRef } from 'react'

import styles from './Field.module.scss'
import { IField } from './field.interface'

const Field = forwardRef<HTMLInputElement, IField>(
	({ error, type = 'text', style, Icon, ...rest }, ref) => {
		return (
			<div
				className={cn(styles.input, {
					[styles.withIcon]: !!Icon
				})}
				style={style}
			>
				{Icon && (
					<div className={styles.icon}>
						<Icon />
					</div>
				)}
				<input ref={ref} type={type} {...rest} />
				{error && <div className={styles.error}>{error.message}</div>}
			</div>
		)
	}
)

Field.displayName = 'Field'

export default Field
