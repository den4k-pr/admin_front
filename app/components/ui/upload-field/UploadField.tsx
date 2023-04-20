import { FC } from 'react'

import { IUploadField } from '@/components/ui/upload-field/upload-field.interface'
import { useUploadFile } from '@/components/ui/upload-field/useUploadFile'

import styles from './UploadField.module.scss'

const UploadField: FC<IUploadField> = ({ onChange, folder, value }) => {
	const { uploadFile } = useUploadFile(onChange, folder)

	return (
		<div className={styles.file}>
			{/* eslint-disable-next-line @next/next/no-img-element */}
			{value && <img src={value} alt="" width="70" className="mb-2 rounded" />}
			<label className="block">
				<span className="sr-only">Choose File</span>
				<input type="file" onChange={uploadFile} />
			</label>
		</div>
	)
}

export default UploadField
