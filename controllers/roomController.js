import Reservation from "../models/reservationModel.js";
import RoomItem from "../models/roomModel.js";

const getRooms = async (req, res) => {
    try {
        const rooms = await RoomItem.find();
        res.json(rooms);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

const postRooms = async (req, res) => {
    try {
        const newRoom = { ...req.body, isReserved: false }; 
        const createdRoom = await RoomItem.create(newRoom);
        res.json(createdRoom);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

const deleteRoom = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedRoom = await RoomItem.findByIdAndDelete(id);

        if (!deletedRoom) {
            return res.status(404).json({ error: "Room tapılmadı!" });
        }

        res.json({ message: "Məlumat silindi!" });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

const updateRooms = async (req, res) => {
    try {
        const updatedRoom = await RoomItem.findByIdAndUpdate(
            req.params.id,
            { $set: req.body },
            { new: true, runValidators: true }
        );

        if (!updatedRoom) {
            return res.status(404).json({ error: "Room tapılmadı!" });
        }

        res.json(updatedRoom);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};


const reserveRoom = async (req, res) => {
    try {
        const { userId, checkIn, checkOut, totalGuests, totalPrice } = req.body;
        const { id } = req.params;

        const room = await RoomItem.findById(id);
        if (!room) {
            return res.status(404).json({ error: "Otaq tapılmadı!" });
        }

        if (room.isReserved) {
            return res.status(400).json({ error: "Bu otaq artıq rezerv edilib!" });
        }

        const newReservation = await Reservation.create({
            userId,
            roomId: req.params.id,
            checkIn,
            checkOut,
            totalGuests,
            totalPrice
        });

        room.isReserved = true;
        await room.save();

      
        res.json({
            message: "Rezervasiya uğurla tamamlandı!",
            reservationId: newReservation._id
        });

    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};


const deleteReservation = async (req, res) => {
    try {
        const { id } = req.params; // Rezervasiyanın ID-sini alırıq
        const reservation = await Reservation.findById(id); // Rezervasiyanı tapırıq

        if (!reservation) {
            return res.status(404).json({ error: "Rezervasiya tapılmadı!" });
        }

        // Otağı tapırıq
        const room = await RoomItem.findById(reservation.roomId);
        if (!room) {
            return res.status(404).json({ error: "Otaq tapılmadı!" });
        }

        // Rezervasiyanı silirik
        await Reservation.findByIdAndDelete(id);

        
        room.isReserved = false;
        await room.save();

        res.json({ message: "Rezervasiya uğurla ləğv edildi!" });

    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};


const getReservations = async (req, res) => {
    try {
        const reservations = await Reservation.find();
        res.json(reservations);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};


const getUserReservations = async (req, res) => {
    try {
        const { userId } = req.params;
        const reservations = await Reservation.find({ userId });
        res.json(reservations);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};



export { getRooms, postRooms, deleteRoom, updateRooms, reserveRoom, deleteReservation, getReservations, getUserReservations };
