import express from 'express'
import { deleteRoom, getRooms, postRooms,  updateRooms } from '../controllers/roomController.js'


const router = express.Router()


router.route('/')
.get(getRooms)
.post(postRooms)

router.route('/:id')
.delete(deleteRoom)
.put(updateRooms)


export default router