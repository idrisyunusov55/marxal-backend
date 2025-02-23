import express from "express";
import { 
    deleteRoom, 
    getRooms, 
    postRooms,  
    updateRooms, 
    reserveRoom, 
    cancelReservation, 
    getReservations,
    getUserReservations
} from "../controllers/roomController.js";
import { verifyAdmin, verifyUser } from "../utils/verifyToken.js";

const router = express.Router();

router.route("/")
    .get(getRooms)
    .post(verifyAdmin, postRooms); 

router.route("/:id")
    .delete(verifyAdmin, deleteRoom)
    .put(verifyAdmin, updateRooms);

router.post("/:id/reserve", reserveRoom); 
router.post("/:id/cancel", cancelReservation); 

router.get("/reservations/all", verifyAdmin, getReservations); 
router.get("/reservations/:userId",  getUserReservations); 

export default router;