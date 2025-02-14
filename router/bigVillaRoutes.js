import express from 'express'
import { deleteBigVilla, getBigVilla, postBigVilla, updateBigVilla } from '../controllers/bigVillaController.js'


const router = express.Router()


router.route('/')
.get(getBigVilla)
.post(postBigVilla)

router.route('/:id')
.delete(deleteBigVilla)
.put(updateBigVilla)


export default router