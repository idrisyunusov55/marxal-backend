import express from 'express'
import { deleteSizeVilla, getSizeVilla, postSizeVilla, updateSizeVilla } from '../controllers/sizeVillaController.js'


const router = express.Router()


router.route('/')
.get(getSizeVilla)
.post(postSizeVilla)

router.route('/:id')
.delete(deleteSizeVilla)
.put(updateSizeVilla)


export default router