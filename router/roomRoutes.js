import express from 'express'
import { deleteRoom, getRooms, postRooms,  updateRooms } from '../controllers/roomController.js'
import { verifyAdmin } from '../utils/verifyToken.js'


const router = express.Router()


router.route('/')
.get(getRooms)
.post(postRooms, verifyAdmin)

router.route('/:id')
.delete(deleteRoom, verifyAdmin)
.put(updateRooms, verifyAdmin)


export default router