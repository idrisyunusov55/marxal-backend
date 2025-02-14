import express from 'express'
import { deleteTwinBalcony, getTwinBalcony, postTwinBalcony, updateTwinBalcony } from '../controllers/twinBalconyController.js'


const router = express.Router()


router.route('/')
.get(getTwinBalcony)
.post(postTwinBalcony)

router.route('/:id')
.delete(deleteTwinBalcony)
.put(updateTwinBalcony)


export default router