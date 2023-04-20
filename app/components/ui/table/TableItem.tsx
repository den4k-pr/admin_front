import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'
import {
	HiOutlineExternalLink,
	HiOutlinePencil,
	HiOutlineTrash
} from 'react-icons/hi'

import { ITableItem } from '@/ui/table/table.interface'

import { useTheme } from '@/hooks/useTheme'

import styles from './Table.module.scss'

const TableItem: FC<{ item: ITableItem }> = ({ item }) => {
	const { isDarkTheme } = useTheme()

	return (
		<div className={styles['table-item']}>
			<div className={styles.info}>
				{item.image && (
					<Image src={item.image} alt={item.name} width={40} height={61} />
				)}
				<div>{item.name}</div>
			</div>
			<div className={styles.actions}>
				<a
					rel="noreferrer"
					href={item.viewLink}
					target="_blank"
					className={isDarkTheme ? 'text-purple-400' : 'text-primary'}
				>
					<HiOutlineExternalLink />
				</a>

				{item.editLink && (
					<Link href={item.editLink}>
						<a className={isDarkTheme ? 'text-blue-400' : 'text-blue-500'}>
							<HiOutlinePencil />
						</a>
					</Link>
				)}

				<button onClick={item.removeHandler}>
					<HiOutlineTrash />
				</button>
			</div>
		</div>
	)
}

export default TableItem
