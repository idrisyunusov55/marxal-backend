import express from 'express'
import { deleteDeluxeSuide, getDeluxeSuide, postDeluxeSuide, updateDeluxeSuide } from '../controllers/deluxeSuiteController.js'


const router = express.Router()


router.route('/')
.get(getDeluxeSuide)
.post(postDeluxeSuide)

router.route('/:id')
.delete(deleteDeluxeSuide)
.put(updateDeluxeSuide)


export default router