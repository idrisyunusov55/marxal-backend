import express from 'express'
import { deleteAmbassador, getAmbassador, postAmbassador, updateAmbassador } from '../controllers/ambassadorController.js'


const router = express.Router()


router.route('/')
.get(getAmbassador)
.post(postAmbassador)

router.route('/:id')
.delete(deleteAmbassador)
.put(updateAmbassador)


export default router