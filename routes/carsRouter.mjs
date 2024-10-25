import { Router } from 'express'
import multer from 'multer'
import CarsController from '../controllers/carsController.mjs'
const router = Router()
const storage = multer.diskStorage({
	destination: function (req, file, cb) {
		cb(null, 'uploads/images')
	},
	filename: function (req, file, cb) {
		cb(null, Date.now() + '-' + file.originalname)
	},
})
const upload = multer({storage})
router.get('/', CarsController.carsList)

router.get('/create', CarsController.carsCreate)
router.post('/create', upload.single('image'), CarsController.addCar)

router.get('/edit/:id', CarsController.editCar)
router.post('/edit/:id', upload.single('image'), CarsController.updateCar)

router.get('/:id', CarsController.carInfo)
router.delete('/', CarsController.deleteCar)
export default router