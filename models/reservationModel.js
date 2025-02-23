import mongoose from "mongoose";

const ReservationSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    roomId: { type: mongoose.Schema.Types.ObjectId, ref: "Room", required: true },
    checkIn: { type: Date, required: true },
    checkOut: { type: Date, required: true },
    totalGuests: { type: Number, required: true },
    totalPrice: { type: Number, required: true }
}, { timestamps: true });

const Reservation = mongoose.model("Reservation", ReservationSchema);
export default Reservation;
