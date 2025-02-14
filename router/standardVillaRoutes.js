import express from 'express'
import { deleteStandartVilla, getStandartVilla, postStandartVilla, updateStandartVilla } from '../controllers/standardVillaController.js'


const router = express.Router()


router.route('/')
.get(getStandartVilla)
.post(postStandartVilla)

router.route('/:id')
.delete(deleteStandartVilla)
.put(updateStandartVilla)


export default router