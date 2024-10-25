import fs from 'fs'
import settings from '../settings.mjs'

class DataFileManager {
	constructor(filePath) {
		this.filePath = filePath
	}

	saveData(dataArr) {
		try {
			fs.writeFileSync(this.filePath, JSON.stringify(dataArr), 'utf8')
		} catch (error) {
			throw new Error(`Error on save data ${error.message}`)
		}
	}
	loadData() {
		try {
			const data = fs.readFileSync(this.filePath, 'utf8')
			return JSON.parse(data)
		} catch (error) {
			if (error.code === 'ENOENT') {
				this.saveData([])
				return []
			} else throw new Error(`Error on load data ${error.message}`)
		}
	}
	addItem(item) {
		try {
			if (!item) throw new Error('Data not send')
			const data = this.loadData()
			data.push(item)
			this.saveData(data)
		} catch (error) {
			throw new Error('Error on add file')
		}
	}
	getItemById(id) {
		try {
			const data = this.loadData()
			const item = data.find(el => el.id === id)
			if (!item) throw new Error(`Element with id ${id} not found`)
			return item
		} catch (error) {
			throw new Error(`Error on search file ${error.message}`)
		}
	}
	updateItemById(id, updatedData) {
		try {
			const data = this.loadData()
			const index = data.findIndex(el => el.id == id)
			if (index !== -1) {
				data[index] = { ...data[index], ...updatedData }
				this.saveData(data)
				return true
			} else throw new Error(`Element with id ${id} not found`)
		} catch (error) {
			throw new Error(`Error on update element ${error.message}`)
		}
	}
	deleteItemById(id) {
		try {
			const data = this.loadData()
			const newData = data.filter(el => el.id != id)
			if (newData.length === data.length) {
				throw new Error(`Element with id ${id} not found`)
			}
			this.saveData(newData)
		} catch (error) {
			throw new Error(`Error on delete element ${error.message}`)
		}
	}
}

export default new DataFileManager(settings.dataPath)
