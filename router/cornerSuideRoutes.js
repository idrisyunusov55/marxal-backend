import express from 'express'
import { deleteCornerSuide, getCornerSuide, postCornerSuide, updatedCornerSuide } from '../controllers/cornerSuideModel.js'


const router = express.Router()


router.route('/')
.get(getCornerSuide)
.post(postCornerSuide)

router.route('/:id')
.delete(deleteCornerSuide)
.put(updatedCornerSuide)


export default router