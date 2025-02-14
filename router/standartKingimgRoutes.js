import express from 'express'
import { deleteStandartKing, getStandartKing, postStandartKing, updateStandartKing } from '../controllers/standartKingimgController.js'


const router = express.Router()


router.route('/')
.get(getStandartKing)
.post(postStandartKing)

router.route('/:id')
.delete(deleteStandartKing)
.put(updateStandartKing)


export default router