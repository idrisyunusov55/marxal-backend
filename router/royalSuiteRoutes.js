import express from 'express'
import { deleteRoyal, getRoyal, postRoyal, updateRoyal } from '../controllers/royalSuiteController.js'


const router = express.Router()


router.route('/')
.get(getRoyal)
.post(postRoyal)

router.route('/:id')
.delete(deleteRoyal)
.put(updateRoyal)


export default router