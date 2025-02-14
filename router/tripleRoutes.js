import express from 'express'
import { deleteTriple, getTriple, postTriple, updateTriple } from '../controllers/tripleController.js'


const router = express.Router()


router.route('/')
.get(getTriple)
.post(postTriple)

router.route('/:id')
.delete(deleteTriple)
.put(updateTriple)


export default router