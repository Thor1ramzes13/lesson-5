import fs from 'fs'
import path from 'path'

export const deleteFileFromFS = (filePath, fileSrc) => {
	const imagePath = path.join(filePath, fileSrc)
	if (fs.existsSync(imagePath)) {
		try {
			fs.unlinkSync(imagePath)
		} catch (error) {
			res.sendStatus(500)
		}
	}
}