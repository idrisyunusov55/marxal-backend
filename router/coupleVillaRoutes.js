import express from 'express'
import { deleteCoupleVilla, getCoupleVilla, postCoupleVilla, updatedCoupleVilla } from '../controllers/coupleVillaController.js'


const router = express.Router()


router.route('/')
.get(getCoupleVilla)
.post(postCoupleVilla)

router.route('/:id')
.delete(deleteCoupleVilla)
.put(updatedCoupleVilla)


export default router