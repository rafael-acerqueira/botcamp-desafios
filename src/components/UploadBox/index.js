import React from 'react'
import { UploadButton } from './styles'

const UploadBox = ({ handleUpload }) => (
	<>
		<label htmlFor='upload'><UploadButton /></label>
		<input 
			onChange={handleUpload}
			id='upload' 
			type='file' 
			style={{ display: 'none'}}
			multiple
			accept='image/*'
		/>
	</>
)

export default UploadBox