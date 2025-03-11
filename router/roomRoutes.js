import express from "express";
import { 
    deleteRoom, 
    getRooms, 
    postRooms,  
    updateRooms, 
    reserveRoom,  
    getReservations,
    getUserReservations,
    deleteReservation
} from "../controllers/roomController.js";


const router = express.Router();

router.route("/")
    .get(getRooms)
    .post(postRooms); 

router.route("/:id")
    .delete( deleteRoom)
    .put( updateRooms);

router.post("/:id/reserve", reserveRoom); 
router.delete("/:id/:reservationId", deleteReservation);


router.get("/reservations/all",  getReservations); 
router.get("/reservations/:userId",  getUserReservations); 

export default router;