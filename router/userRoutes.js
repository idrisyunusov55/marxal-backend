import express from 'express'
import { deleteUsers, getUser, getUsers, updateUsers } from '../controllers/userController.js'
import { verifyAdmin, verifyUser } from '../utils/verifyToken.js'

const router = express.Router()

router.put("/:id", verifyUser, updateUsers);
router.delete("/:id", verifyUser, deleteUsers);
router.get("/:id", verifyUser, getUser);
router.get("/", verifyAdmin, getUsers);

export default router