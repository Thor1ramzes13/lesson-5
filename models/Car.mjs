import { v4 as uuidv4 } from 'uuid'
import dataFileManager from '../utils/DataFileManager.mjs'
class Car {
	static getCarsList() {
		try {
			return dataFileManager.loadData()
		} catch (error) {
			throw new Error('Error on load list')
		}
	}
	static addNewCar(carObject) {
		try {
			dataFileManager.addItem({
				id: uuidv4(),
				...carObject,
			})
		} catch (error) {
			throw new Error('Error on add item')
		}
	}
	static getCarById(id) {
		try {
			return dataFileManager.getItemById(id)
		} catch (error) {
			throw new Error('Error on load item')
		}
	}
	static updateCar(id, carData) {
		try {
			dataFileManager.updateItemById(id, carData)
		} catch (error) {
			throw new Error('Error on update item')
		}
	}
	static deleteCarById(id) {
		try {
			dataFileManager.deleteItemById(id)
		} catch (error) {
			throw new Error('Error on delete item')
		}
	}
}
export default Car
