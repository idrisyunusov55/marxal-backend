import express from 'express'
import { deleteKingBalcony, getKingBalcony, postKingBalcony, updateKingBalcony } from '../controllers/kingBalconyController.js'


const router = express.Router()


router.route('/')
.get(getKingBalcony)
.post(postKingBalcony)

router.route('/:id')
.delete(deleteKingBalcony)
.put(updateKingBalcony)


export default router